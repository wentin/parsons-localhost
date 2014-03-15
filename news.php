<?php

define('MAGPIE_DIR', 'magpie/');
require_once(MAGPIE_DIR.'rss_fetch.inc');

$url = "http://blogs.newschool.edu/news/category/schools/parsons/feed/";

if ( $url ) {
	$rss = fetch_rss( $url );
	echo "<ul>";
	foreach ($rss->items as $item) {
		$href = $item['link'];
		$title = $item['title'];
		$pubDate = $item['pubDate'];
		echo "<li>$pubDate<a href=$href>$title</a></li>";
	}
	echo "</ul>";
}
?>