<?php
error_reporting(E_ALL);
include_once('simple_html_dom.php');

$courseUrl = $_POST['url'];

$html = file_get_html($courseUrl);
foreach($html->find('#courseCatalogDetail') as $element) 
       echo $element->outertext;
?>