/*
		author: greg simsic
		date: 08/15/2013

		Notes:
		dom ready calls throughout to smartly start processing  before dom is ready

		Use:

		tns.slideshow("#elementId", {
		    albumId: 24,

		});

        Passive Use:

        <div class="tns-slideshow" data-albumid="24" data-category_name="highlights" data-count="3"></div>

 */

// get framework
var TNS = window.TNS || {};

// shortcut definition for creating a new slideshow
TNS.slideshow = function(element, options) {
    if (options === undefined) options = {};
    return new TNS.Slideshow(element, options);
};

// define module
TNS.Slideshow = (function ($) {

    "use strict"; // jshint

    /* PRIVATE PROPERTIES
     * ============== */
    var defaults = {
        url: '/php/getDirectorAlbum.php',

        caption: true,
        hideCaption: true,
        limit: 0, // 0 = no limit
        random: false,
        ratio: 1.5, // '3:2'
//        width: 700,
        animation: 'fade',
        template: 'edu'
    };


    var captionEventsState = true;

    /* PRIVATE FUNCTIONS
     * ============== */
    var doThat = function() {

    };

    /* CONSTRUCTOR
     * ============== */
    var Slideshow = function(element, options) {
        this.options = $.extend({}, defaults, typeof options === 'object' && options);
        this.$element = $(element);
        this.init();
    };

    /* PUBLIC CLASS METHODS
     * ============== */
    Slideshow.prototype = {

        constructor: Slideshow,


        init: function() {

            // load flexslider assets

            // non jQuery method that makes script available in dom
//            var script   = document.createElement("script");
//            script.type  = "text/javascript";
//            script.src   = "/online-media/simsicg/slideshow-module/flexslider/jquery.flexslider-min.js";    // use this for linked script
////            script.text  = "alert('voila!');"               // use this for inline script
//            document.body.appendChild(script);

            // injects into dom, but it's not accessible
            if(!jQuery.flexslider) {
                $('<script type="text/javascript"></script>').attr('src','/framework/js/jquery.flexslider-min.js').appendTo('head');
                // TODO: double injection of CSS
                // NOTE: css added where? master page for site? YES
                // base styles? YES
//            $('<link rel="stylesheet"/>').attr('href','/framework/css/flexslider-tns.css').appendTo('head');

                $("head link[rel='stylesheet']").first().before("<link rel='stylesheet' href='/framework/css/flexslider-tns.css' type='text/css' media='screen'>");
//            $('<link rel="stylesheet"/>').attr('href','/framework/css/slideshow-edu.css').appendTo('head');
            }

            if(typeof this.options.ratio === 'string' && this.options.ratio.indexOf(':') !== -1) {
                var w = this.options.ratio.split(':')[0];
                var h = this.options.ratio.split(':')[1];
                this.options.ratio = w/h;
            }

            // convert for case
            if(this.options.hasOwnProperty('albumid')) {
                this.options.albumId = this.options.albumid;
            }

            if(this.options.hasOwnProperty('albumId')) { // is from ssp
//                this.$element.find('.spinner').css({height: 700, width: 400});

                // TODO: take up space in dom before loading slideshow html
//                this.$element.css({minHeight: this.options.height, minWidth: this.options.width});

                this.getSSPlist(); // synchronous ??
            } else { // hand coded
                var that = this;
                $(function(){
                    that.processTags();
                    that.initSlideshow();
                    // set first slide as active
                    that.$element.find('li').first().addClass('active');
                });
            }

        },

        initSlideshow: function() {
            this.$element.addClass('slideshow flexslider').find('ul.tns-slides').addClass('slides');
            // attempt to transition height of slidehow conatiner box
//            this.$element.css('min-height', this.$element.find('ul li:first').height());

            var that = this;
            var flexopts = $.extend({}, this.options, {

                // the slideshow had been initialized, let's set some things up
                start: function(){
                    $(that.$element).find('.spinner').remove();

                    // set height of all li's -- in order to position caption at bottom
                    // is this necessary ??
//                    var ul_height = $('.tns-slides').height();
//                    that.$element.find('.slides li').css('height', that.options.height );

                    // show or hide caption
                    if(that.options.caption) {
                        if(that.options.hideCaption) {
                            if($(window).width() > 767) {
                                that.captionEvents('on');
                            }
                        } else {
                            that.$element.find('.slider-text').css('opacity', 1);
                        }
                    }

                }
            });

            that.$element.find('.slides li img:first').load( function(e) {
                that.setDirectionNavTop();
            });

            this.$element.flexslider(flexopts);

//            if(this.options.hasOwnProperty('height')) {
//                this.$element.find('li img').css('max-height', this.options.height);
//            }


            this.$element.wrapInner('<div class="slides-wrapper" />');


//            switch(type) {
//                case 'flexslider':
//                    this.$element.flexslider();
//                    break;
//                case 'basic':
//                default:
//                    // do nothing ?
//                    this.buildDotNav();
//
//            }

            $(window).resize(function() {
                setMaxHeight();
                if($(window).width() > 767) {
                    if(!that.captionEventsState) {
                        that.captionEvents('on');
                    }
                } else if (that.captionEventsState) {
                    that.captionEvents('off');
                }
                that.setDirectionNavTop();
            });

            function setMaxHeight() {
                that.$element.find('.tns-slides li img').css('maxHeight', parseInt(that.$element.width()/that.options.ratio, 10));
            }

            setMaxHeight();
        },

        // set top of rollover arrows
        // because default covers whole slideshow height including nav elements
        // we want it to only adjust for the image
        setDirectionNavTop: function() {
            var img_h = this.$element.find('.slides li img:first').height();
            this.$element.find('.flex-direction-nav a').css('top', function() {
                return img_h/2 - $(this).height()/2;
            });
        },

        captionEvents: function(toggle) {
            var that = this;

            if(toggle === 'on') {
                // events for caption show/hide - new, keeps on for hover on arrows
                that.$element.find('.slides-wrapper').on('mouseover', function(e) {
                    $(this).find('.slider-text').css('opacity', 1);
                });
                that.$element.find('.slides-wrapper').on('mouseout', function(e) {
                    $(this).find('.slider-text').css('opacity', 0);
                });
                that.captionEventsState = true;
            } else {
                that.$element.find('.slides-wrapper').off();
                that.captionEventsState = false;
                this.$element.find('.slider-text').css('opacity', 1);
            }
        },

        // get html from php, which calls SSP api, and place it in dom
        getSSPlist: function() {
            var that = this;

            // start spinner
            $(function(){
                $(that.$element).html('<div class="spinner"><img src="http://newschool.edu/framework/imgs/spinner-80.gif" /></div>');
                $(that.$element).find('.spinner').css('height',that.options.height);
            });

            var url = that.options.url;
            delete that.options.url;

            // possible solution for varying viewports: get ratio specified for desktop and apply to each breakpoint ??
            // recalculate width and height attributes for SSP based on viewport
            // in order to get small images for mobile devices
//            var ratio = this.options.width/this.options.height;
//            var viewport_width = $(window).width();
//            if(viewport_width < 480) {
//                this.options.width = 400; // ??? what value is right
//                this.options.height = Math.round(this.options.width/ratio);
//            }
            // add more viewport sizes

            // read DOM to get image width if not present
            this.options.width = this.options.width || this.$element.width();

            // apply minWidth
            if(this.options.hasOwnProperty('minWidth') && this.options.minWidth > this.options.width) {
                this.options.width = this.options.minWidth;
            }

            this.options.height = parseInt(this.options.width/this.options.ratio, 10);
//            delete this.options.ratio;

            $.getJSON(url, that.options,
                function(response) {
                    $(function(){
                        $(that.$element).append(response.html);
        //                that.buildDotNav(); // flexslider does this
                        that.initSlideshow();
                    });
            }).error(function(response) {
                $(function(){
                    $(that.$element).find('.spinner').text('error loading the slideshow');
                });
            });

        },

        /*
        build set of navigation dots with events
         */
//        buildDotNav: function() {
//            var that = this;
//            this.$nav = $('<div></div>').addClass('nav-dot-wrapper').prependTo(this.$element);
//            this.$navInner = $('<div></div>').addClass('nav-dots').prependTo(this.$nav);
//            var els = this.$element.find('li');
//            els.each( function(index) {
//                var $dot = $('<a href="#" ></a>').appendTo(that.$navInner);
//                if (!index) {
//                    $dot.addClass("active");
//                }
//                $dot.click(function(e) {
//                    e.preventDefault();
//                    that.gotoSlide($(this));
//                });
//            });
//        },

        /*
        Convert shortcodes in markup to expanded HTML elements
            example:
            <li data-type='vimeo' data-id='123456'></li>
            becomes:
            <li data-type='vimeo' data-id='123456'>
                <iframe src="http://player.vimeo.com/video/123456?title=0&byline=0&portrait=0&color=ff9933&autoplay=0&fullscreen=0"></iframe>
            </li>
         */
        processTags: function() {
            var els = this.$element.find('li');
            els.each( function(index) {
                var $this = $(this);
                var data = $this.data();
                if(data.hasOwnProperty('type')) {
                    var el = '';
                    switch(data.type) {
                        case 'vimeo':
                            el = $('<iframe></iframe>').attr('src', 'http://player.vimeo.com/video/' + data.id + '?title=0&byline=0&portrait=0&color=ff9933&autoplay=0&fullscreen=0');
                            // set height
                            el.height(350);
                            break;
                        case 'youtube':
                            // TODO: use 'modestbranding' here??
                            el = $('<iframe></iframe>').attr('src', 'http://www.youtube.com/embed/' + data.id + '?modestbranding=1');
                            el.height(350);
                            break;
                    }
                    if(el !== '') {
                        $this.html(el);
                    }
                }
            });
        }

    };

    return Slideshow;

    /* jQuery PLUGIN DEFINITION
     * ======================= */

//    $.fn.slideshow = function (option) {
//        return this.each(function () {
//            var $this = $(this)
//                , data = $this.data('slideshow')
//                , options = $.extend({}, $.fn.slideshow.defaults, $this.data(), typeof option == 'object' && option)
//                ;
//            if (!data) $this.data('slideshow', (data = new Slideshow(this, options)));
//            if (typeof option == 'string') data[option]() // if option is a method call
//            else data.init() // initialize the slideshow
//        });
//    };



//    $.fn.slideshow.defaults = {
//        url: 'getDirectorAlbum.php',
//        autoplay: true,
//        albumId: 72348,
//        limit: 10,
//        random: false
//    };
//
//    $.fn.slideshow.Constructor = Slideshow;


}(jQuery));


/* passive declarations
 * ============== */
$(function () {

    $('.tns-slideshow').each(function(i, el) {

        TNS.slideshow( el, $(el).data() );

    });

});



// old app.js
//$(document).ready(function(){
//
//    var albumId = $('#galleria').attr('rel');
//	var imgLimit = $('#galleria').attr('limit');
//	var contOrder = $('#galleria').attr('random');
//
//	//CONNECT TO DIRECTOR SERVER
//	var getDirectorData = function(albumId, limit, conorder){
//		var url = 'getDirectorAlbum.php';
//		$.get(url, { albumId : albumId, limit : limit, conorder : conorder }, function(data) {
//			parseFeed(data);
//		}).error(function(data) {
//			//handle server error
//			console.log(data);
//		});
//	}
//
//	var parseFeed = function(data){
//		var outStr = '';
//			$.each(data, function(i, item) {
//			if(item.destination == undefined){item.destination = ''};
//				outStr += '<a href="'+ item.large +'" rel="'+ item.fullsize +'" >'
//	            		+' <img title="'+ item.title +'"'
//	  	     			+' alt="'+ item.caption +'"'
//						+' longdesc="'+ item.destination +'"'
//	            	    +' src="'+ item.thumb +'">'
//	        			+' </a>';
//			});
//
//		    $('#galleria').html(outStr);
//			// Initialize Galleria
//			$('#galleria').galleria({
//				imageCrop:false,
//				autoplay: 5000,
//				preload:2,
//				transition:'fade',
//				touchTransition:'slide'
//				});
//	}
//
//	//GET DIRECTOR DATA
//	getDirectorData(aId, imgLimit, contOrder);
//
//});

