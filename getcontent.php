<?php
error_reporting(E_ALL);
include_once('simple_html_dom.php');

$program = $_POST['data'];

$data_json = $_POST["data"];
$data_array  = json_decode($data_json, true); 
$url = $data_array["url"];
$selector = $data_array["selector"];

$html = file_get_html($url);
foreach($html->find($selector) as $element)  {
	foreach($element->find('script') as $script) 
       {
       		$script->innertext = ' ';
       }
    echo $element->outertext;
}
?>