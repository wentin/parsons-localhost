<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	

	<title>news</title>
	<style>

		.about-parsons-news{
			width:724px;
			background-color: #000000;
			opacity: 0.7;
			/*margin-left: 300px;
			margin-top: 100px;*/
			padding: 0px;

		}
		.about-parsons-news ul{
            float: left;
			width: 273px;
			/*height: 678px;*/
			
			
			margin-left: 0px;
			margin-top: 0px;
			padding: 0px;
		}
		
		.about-parsons-news li{
			float: left;
			list-style: none;
			display: list-item;

			margin: 0px;
			margin-left:0px;
			width: 273px;
			
			font:12px Arial, Helvetica, sans-serif;
			
			border-bottom: 1px solid #4f4f4f;
			

			
		}
		.about-parsons-news li:last-child{
			border:none;
		}
		.about-parsons-news a{
			text-decoration: none;
			color: red;
			/*color: white;*/
		}
		.about-parsons-news .pubDate{
			padding: 12px 0 0 12px;
			font:12px Arial, Helvetica, sans-serif; 
			color: #bc7602;
			display: inline-block;
			
			
		}
		.about-parsons-news .title{
			
			font:12px Arial, Helvetica, sans-serif;
			color: #ffffff;
			padding: 20px 0 30px 12px;
			line-height: 1;
			display: inline-block;


		}
		.about-parsons-news .content{
			position: absolute;
			display: block;
			margin-top: 0px;
			float: right;
			width: 394px;
			margin-left: 330px;
			font:12px Arial, Helvetica, sans-serif;
			color: #ffffff; 
			/*opacity: 0;*/
			/*width:  394px;
			background-color: #ffffff;*/
		}
		.about-parsons-news .entry{
			width: 370px;
			margin-left:0px;
			
		}
		.size-full {
			max-width: 370px !important;
		}
		.wp-caption-text{
			max-width: 370px !important;
		}
		


	</style>
	<script type="text/javascript" src="./jquery-1.11.0.min.js"></script>
	<script type="text/javascript" src="./pullContent.js"></script>

</head>
<body>
    
	<div class="about-parsons-news">
	<?php
	error_reporting(E_ALL);
include_once('simple_html_dom.php');

	define('MAGPIE_INPUT_ENCODING', 'UTF-8');
	define('MAGPIE_OUTPUT_ENCODING', 'UTF-8');
	define('MAGPIE_DIR', 'magpie/');
	require_once(MAGPIE_DIR.'rss_fetch.inc');


	$url = "http://blogs.newschool.edu/news/category/schools/parsons/feed/";

	if ( $url ) {
		$rss = fetch_rss( $url );
		echo "<ul>";
		foreach ($rss->items as $item) {
			$href = $item['link'];
			$title = $item['title'];
			
			$pubDate = $item['pubdate'];
			
			
			echo "<li><span class = \"pubDate\">$pubDate</span></br><a class = \"title\">$title</a></li>";
			
			$html = file_get_html($href);
			foreach($html->find('.entry') as $element){
			foreach($element->find('script') as $script) 
       {
       		$script->innertext = ' ';
       		}
       

    echo "<div class = \"content\">$element->outertext</div>";
	}
		}
		echo "</ul>";
		
	}

	//pull content to the right 
	// $html = file_get_html($href);
	// foreach($html->find('.entry') as $element){
	// 	foreach($element->find('script') as $script) 
 //       {
 //       		$script->innertext = ' ';
 //       		}
       

 //    echo "<div class = \"content\">$element->outertext</div>";
	// }

	?>
	<div style="clear: both;"></div>

	</div>

</body>
</html>
