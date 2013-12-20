<?php
error_reporting(E_ALL);
include_once('simple_html_dom.php');

$program = $_POST['program'];

$html = file_get_html('http://www.newschool.edu/parsons/' . $program . '/');
//$html = file_get_html('https://www.newschool.edu');
//$html = file_get_html('Product.ibatis.xml');
foreach($html->find('.tablecloth') as $element) {
	//$element->find('script')->innertext = '';
	foreach($element->find('script') as $script) 
       {
       		$script->innertext = ' ';
       }
    echo $element->outertext;
}

foreach($html->find('.total') as $element) {
	foreach($element->find('script') as $script) 
       {
       		$script->innertext = ' ';
       }
    echo $element->outertext;
}

?>