<?php
error_reporting(E_ALL);
include_once('simple_html_dom.php');

$program = $_POST['program'];

//$html = file_get_html('http://www.newschool.edu/parsons/' . $program . '/');
// $html = file_get_html('http://www.google.com');
$html = file_get_html('Product.ibatis.xml');
foreach($html->find('.col-520') as $element)  {
	foreach($element->find('script') as $script) 
       {
       		$script->innertext = ' ';
       }
    echo $element->outertext;
}

?>