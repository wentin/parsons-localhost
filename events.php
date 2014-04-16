<div class="about-parsons-news">
	<?php
	error_reporting(E_ALL);
	include_once('simple_html_dom.php');

	define('MAGPIE_INPUT_ENCODING', 'UTF-8');
	define('MAGPIE_OUTPUT_ENCODING', 'UTF-8');
	define('MAGPIE_DIR', 'magpie/');
	require_once(MAGPIE_DIR.'rss_fetch.inc');


	$url = "http://events.newschool.edu/widget/view?schools=newschool&days=31&num=20&types=14994&format=rss";

	if ( $url ) {
		$rss = fetch_rss( $url );
		echo "<ul>";
		foreach ($rss->items as $item) {
			$href = $item['link'];
			$title = $item['title'];
			
			$pubDate = $item['pubdate'];
			
			$description = $item['description'];

			echo "<li><span class = \"pubDate\">$pubDate</span></br><a class = \"title\">$title</a></li>";
			echo "<div class = \"content\">$description</div>";

			/*$html = file_get_html($href);
			foreach($html->find('.entry') as $element){
				foreach($element->find('script') as $script) 
	       		{
	       			$script->innertext = ' ';
	       		}

    			echo "<div class = \"content\">$element->outertext</div>";
			}*/
		}
		echo "</ul>";
		
	}

	?>
	<div style="clear: both;"></div>

</div>

