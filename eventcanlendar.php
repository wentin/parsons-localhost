<?php
error_reporting(E_ALL);
include_once('simple_html_dom.php');

$html = file_get_html('http://www.newschool.edu/parsons/');
//$html = file_get_html('youtube.htm');
//$html = file_get_html('Product.ibatis.xml');
foreach($html->find('.eventsRSS') as $element)  {
	foreach($element->find('script') as $script) 
       {
       		$script->innertext = ' ';
       }
    echo $element->outertext;
}

?>