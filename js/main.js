var homeAnimationTime = 700;
var homeScroll, contentScroll;

			
/*function updatePosition () {
	console.log(this.x);
	var scrollLeft = -this.x;
	var per = 100 - scrollLeft/2056*100;
	$('#homeView').css('background-position-x', per+'%');
}*/

function loaded () {
	homeScroll = new IScroll('#homeScroll', {
		scrollX: true, 
		scrollY: false,
		mouseWheel: true,
		indicators: [{
			el: document.getElementById('background'),
			resize: false,
			ignoreBoundaries: true,
			speedRatioY: 0.5
		}]
	});
	contentScroll = new IScroll('.scrollWrap', { mouseWheel: true });
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

function loadContent(url, selector, targetSelector){
	var url = url;
	var selector = selector;
	var targetSelector = targetSelector;
	var data = {url: url, selector: selector};
	var data_encoded = JSON.stringify(data);
	var returnData;
	$.ajax({
		type: "POST",
		//url: "http://wentin.co/parsons-localhost/getcontent.php",
		url: "getcontent.php",
      	async: false,  
		data: {
			"data" : data_encoded
		},
		datatype: "html",
		success: function(data, textStatus, xhr){
			$(targetSelector).append(data);
			returnData = data;
		},
		// Alert status code and error if fail
		error: function (xhr, ajaxOptions, thrownError){
			returnData = xh4.status;
			console.log(xhr.status);
			console.log(thrownError);
		}
	});    	
	//console.log(returnData)
	//return(returnData);
}


function loadCurriculum(programInfo, programName, side){
	var postData = programInfo;
	var programName = programName;
	var side = side;
	$.ajax({
		type: "POST",
		//url: "http://wentin.co/parsons-localhost/curriculum.php",
		url: "curriculum.php",
		data: postData, 
		datatype: "html",
		success: function(data, textStatus, xhr){
			$('#'+programName+' .'+side+' .curriculumWrapper').append(data);
		},
		// Alert status code and error if fail
		error: function (xhr, ajaxOptions, thrownError){
			console.log(xhr.status);
			console.log(thrownError);
		}
	});    	
}

function loadIntroduction(programInfo, programName){
	var postData = programInfo;
	var programName = programName;
	$.ajax({
		type: "POST",
		//url: "http://wentin.co/parsons-localhost/introduction.php",
		url: "introduction.php",
		data: postData, 
		datatype: "html",
		success: function(data, textStatus, xhr){
			$('#'+programName+' #introduction .scroll').append(data);
		},
		// Alert status code and error if fail
		error: function (xhr, ajaxOptions, thrownError){
			console.log(xhr.status);
			console.log(thrownError);
		}
	});    	
}

$(function(){
	
	loaded();
	
    loaddata();

	/*$('#homeView').scroll(function() {
		console.log($('#homeView').scrollLeft());
		var scrollLeft = $('#homeView').scrollLeft();
		var per = 100 - scrollLeft/2056*100;
		$('#homeView').css('background-position-x', per+'%');
	}); */
	
	
	$('table a').live('tap', function(e) {
			
		e.stopPropagation();
		e.preventDefault();
		var href = $(this).attr('href');
		var courseUrl = {
			"url" : href,
		};
		$.ajax({
			type: "POST",
			url: "http://wentin.co/parsons-web/course.php",
			data: courseUrl, 
			datatype: "html",
			success: function(data, textStatus, xhr){
				$('.right .curriculumWrapper').html(data);
			},
			// Alert status code and error if fail
			error: function (xhr, ajaxOptions, thrownError){
				alert(xhr.status);
				alert(thrownError);
			}
		});
	} )
	
	$('.homeTile').on( "tap", function( event ) {
		/*$('.homeTile').animate({
		opacity : 0.1,
		height  : 900, // You desired height.
		width   : 900
		});	*/
		//$('.homeTile').effect("scale",{ percent: 300 }, 1000);
		var targetViewId = $(this).attr('id')+'View';
		secondViewEnter('#'+targetViewId);
	} )


	$('.mainMenu').live('click', function(){
		secondViewExit();
	});
	
	$('.secondMenu li a').live('click', function(){
		var href = $(this).attr('href');
		$(this).parents('.rightCol').children('.scrollWrapper'+href).addClass('active').siblings().removeClass('active');
	});

	$('.menu li').live('click', function(){
		var targetId = $(this).attr('id');
		$(this).parents('.leftCol').siblings('.rightCol#'+targetId).addClass('active').siblings('.rightCol').removeClass('active');
	});
})

function secondViewEnter(program) {
	var program = program;
	var i=1;
	
	$('ul.menu li').css('left', '-270px');
	var $thisRightCol = $(program).find('.rightCol');
	//$thisRightCol.css('left', '724px');
	
	var $thisMainMenu = $(program).find('.mainMenu');
	$thisMainMenu.css('top', '-50px');
	
	var $thisSschoolName = $(program).find('.schoolName');
	$thisSschoolName.css('left', '-270px');
	
	$('.homeTile').removeClass('homeTileNormal');
	$('.homeTile').addClass('homeTileLarge');
	$('.logo').animate({
		left: -250	
	}, homeAnimationTime, 'easeInOutQuad');


	contentScroll.refresh();

	TNS.slideshow("#home-slideshow", {
	      albumId: 72407, 
	      caption: true,        
	      width: 694,
	      height: 615,
	      animation: "slide",
	      random: true,
	      controlNav: false,
	      linkable: false
	  });
	window.setTimeout(  


		function() {  


			$('.wrapper').removeClass('active');
			$(program).addClass('active');

			/*$thisRightCol.animate({
				left: 0	
			}, 700, 'easeInOutQuad', function(){
				contentScroll = new IScroll('.scrollWrapper', { mouseWheel: true });
				});*/
				
			$thisMainMenu.delay(400).animate({
				top: 0	
			}, 300, 'easeInOutQuad');
			
			$thisSschoolName.animate({
				left: 0	
			}, 500, 'easeInOutQuad');
			
			$(program).find('li').each(function(){
				$(this).delay(100*i).animate({
					left: 0	
				}, 500, 'easeInOutQuad');
				i++
			})
		},  
		homeAnimationTime
	);
	
	
	
}


function secondViewExit() {
	$('.wrapper').removeClass('active');
	$('#homeView').addClass('active');
	
	$('.logo').css('left', '-250px');
	window.setTimeout(  
		function() {  
			$('.logo').animate({
				left: 70	
			}, homeAnimationTime, 'easeInOutQuad');
			$('.homeTile').removeClass('homeTileLarge');
			$('.homeTile').addClass('homeTileNormal');
			window.setTimeout(  
				function() {  
				//$('.homeTile').removeClass('homeTileNormal').removeClass('homeTileLarge');
				},  
				homeAnimationTime
			);
		
		},  
		20
	);
	
}

//add academic canlendar
function loadAcademiccanlendar(){
	
	$.ajax({
		type: "POST",
		//url: "http://wentin.co/parsons-localhost/academiccalendar.php",
		url: "academiccalendar.php",
		datatype: "html",
		success: function(data, textStatus, xhr){

			$('#academicCalendar .scroll').append(data);
		},
		// Alert status code and error if fail
		error: function (xhr, ajaxOptions, thrownError){
			console.log(xhr.status);
			console.log(thrownError);
		}
	});    	
}