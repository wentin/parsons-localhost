<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

/*
		author: jonathan schmidt		
		date: 12/21/2011

        modified: greg simsic
        date: 08/16/2013

        test albumId = 72348
*/


/*
 * Generates the html for slideshows
 * managed in SlideshowPro Director
 *
 */

include('lib/DirectorPHP/classes/DirectorPHP.php');

$APIKey = 'hosted-3d7c5ef636e9047a6de73123c2bbfb03';
$APIPath = 'newschool.slideshowpro.com';
$director = new Director($APIKey, $APIPath);

// defaults
$options = array(
    'albumId' => 0,
    'limit' => 0, // 0 = no limit
    'random' => false,
    'caption' => false,
    'linkable' => false,
    'width' => 700,
    'height' => 500,
    'quality' => 60,
    'crop' => 0, // don't crop
    'sharpening' => 1,
    'template' => 'edu'
);

// allowed values
// can pass a function name as a string
$safe_values = array(
    'albumId' => 'is_numeric',
    'limit' => 'is_numeric',
    'random' => array(false,true),
    'caption' => array(false,true),
    'linkable' => array(false,true),
    'width' => 'is_numeric',
    'height' => 'is_numeric',
    'quality' => 'is_numeric',
    'template' => array('edu','parsons')
);

// check for safe values and apply default options
foreach ($_GET as $key => $value) {
    if($value == 'true') {
        $value = true;
    } else if ($value == 'false'){
        $value = false;
    }
    if(array_key_exists($key, $options)) {
        if( !empty($value) ) {
            if(is_array( $safe_values[$key])) { // is an array of safe values
                if(in_array($value, $safe_values[$key])) {
                    $options[$key] = $value;
                }
            } else { // is a function name
                if(function_exists($safe_values[$key])
                    && $safe_values[$key]($value)) {
                        $options[$key] = $value;
                }
            }
        }
    }
}

//    echo "<pre>";
//    print_r($options);
//    echo "</pre>";
//    exit;

    // SET THUMB SIZE
//        if(isset($options['thumb'])) {
//            $director->format->add(array(
//                'name' => 'thumb',
//                'width' => '100',
//                'height' => '100',
//                'crop' => 1,
//                'quality' => 75,
//                'sharpening' => 1
//            ));
//        }

// sets a 1-hour cache on results, can be adjusted
// cache named for album AND width (varies according to viewport
$director->cache->set('album-'.$options['albumId'].'-'.$options['width']);

// disable cache
// NOTE (GS) this caused a problem when moving these files
$director->cache->disable();

// SET IMAGE SIZE
$director->format->add(array(
    'name' => 'fullsize',

    'width' => $options['width'],
    'height' => $options['height'],
    'crop' => $options['crop'], // don't crop
    'quality' => $options['quality'],
    'sharpening' => $options['sharpening']
));

# Make API call using get_album method.
$album = $director->album->get($options['albumId'], array('only_active' => true));

$images = $album->contents;

// TODO: check for errors from SSP


//echo "<pre>";
//print_r($album);
//echo "</pre>";
//exit;

// randomize image set
if ($options['random']) shuffle($images);

// limit the number of images
if($options['limit']) {
    $images = array_slice($images, 0, $options['limit']);
}

// apply template
$html = '';
switch ($options['template']) {
    case 'parsons' :
        $html = parsons_home($album, $images, $options);
        break;
    case 'edu' :
    default:
        $html = edu_default($album, $images, $options);
}

$response = array(
    'html'=>$html
);

echo json_encode($response);
exit;

function parsons_home($album, $images, $options) {

    $count=0;
    $slides = array();

    foreach($images as $image) {
        $count++;

        $alt = (empty($image->title)) ? $image->original_album->title." image ".$count : $image->title;

        $str = '<li id="slide-'.$count.'-img" >';
        // open <a> tag
        if ($options['linkable']
            && !empty($image->link)) {
//            $target = ($image->target) ? '' : 'target="_blank"'; // use SSP settings
            $target = ''; // manual global setting, or 'target="_blank"'
            $str .= '<a href="'.$image->link.'" '.$target.' >';
        }
        $str .= '<img src="'.$image->fullsize->url.'" alt="'.$alt.'"/>';

        // add caption
        // a title or caption must exist
        if($options['caption'] &&  (!empty($image->title) || !empty($image->caption))) {
            $str .= '<div class="slider-text">';
            $str .= (!empty($image->title)) ? '<span class="caption-title">'.$image->title.'</span>' : '';
            $str .= (!empty($image->caption)) ? '<span class="caption-description">'.$image->caption.'</span>' : '';
            $str .= '</div></div>';
        }

        // close tags
        if ($options['linkable'] && !empty($image->link)) $str .= '</a>';
        $str .= '</li>';

        $slides[] = $str;
    }

    $html = '<ul class="tns-slides">';
    $html .= implode('', $slides);
//        $html .= '<div class="clear"></div>';
    $html .= '</ul>';

    return $html;

}

/*
 * convert ssp director list of images to UL
 */
function edu_default($album, $images, $options) {

    $count=0;
    $slides = array();

    foreach($images as $image) {
        $count++;

        // try to figure out an alt tag title
        $alt = "";
        if (empty($image->title)) {
            if(property_exists($image, "original_album")) {
                $alt = $image->original_album->title." image ".$count;
            } else {
                $alt = "slideshow image ".$count; // default if not title and no album
            }
        } else {
            $alt = $image->title;
        }

        $str = '<li id="slide-'.$count.'-img" >';
        if ($options['linkable'] && !empty($image->link)) $str .= '<a href="'.$image->link.'">';
        $str .= '<img src="'.$image->fullsize->url.'" alt="'.$alt.'"/>';

        // add caption
//            if($options['caption']) {
//                $str .= '<div class="slider-text">';
////                $str .= '<div class="story-type">'.$album->name.'</div>';
//                $str .= '<h3>'.$image->title.'</h3>';
//                $str .= '<p>'.$image->caption.'</p>';
////                $str .= '<div class="icon-caret-down">';
//                $str .= '</div></div>';
//            }

        // add caption
        // parsons style
        // a title or caption must exist
        if($options['caption'] &&  (!empty($image->title) || !empty($image->caption))) {
            $str .= '<div class="slider-text">';
//            $title = (empty($image->caption)) ? $image->title : $image->title.' / ';
            $str .= (!empty($image->title)) ? '<h3 class="caption-title">'.$image->title.'</h3>' : '';
            $str .= (!empty($image->caption)) ? '<p class="caption-description">'.$image->caption.'</p>' : '';
            $str .= '</div></div>';
        }

        if ($options['linkable'] && !empty($image->link)) $str .= '</a>';
        $str .= '</li>';

        $slides[] = $str;
    }

    $html = '<ul class="tns-slides">';
    $html .= implode('', $slides);
//        $html .= '<div class="clear"></div>';
    $html .= '</ul>';

    return $html;

}


// UNUSED :

/*
 * manual list, circle buttons, text on bottom, any html
 */
function template2($slides) {

    $count=0;
    $slide_items = array();
    $nav_items = array();

    foreach($slides as $slide) { // insert before { to add limit before info is pulled from ssp -> if ($imgCnt < $limit)
        $count++;

        // create html elements
        $slide_items[] = '<li id="slide-'.$count.'-img" class="school-slides">'.$slide.'</li>';
        $nav_items[] = '<a href="#" class="nav-dot" id="story-1'.$count.'"></a>';
    }

    $html = '<div id="slider-module" class="iframe-slider"><div id="story"><ul>';
    $html .= implode('', $slide_items);
    $html .= '</ul></div></div>';

    $html .= '<div id="nav-dot-wrapper"><div id="nav-dots">';
    $html .= implode('', $nav_items);
    $html .= '</div></div>';

    return $html;

}

?>

<!--<div id="slider-module" class="iframe-slider">-->
<!--    <div id="story">-->
<!--        <iframe src="http://player.vimeo.com/video/33405636?title=0&amp;byline=0&amp;portrait=0&amp;color=ff9933&amp;autoplay=0&amp;fullscreen=0"></iframe>-->
<!--        <div id="slider-text">-->
<!--            <h1>Are You New School?</h1>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->
