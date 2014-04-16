function loaddata(){
    $.ajax({
        type: "POST",
        //url: "http://wentin.co/parsons-localhost/getcontent.php",
        url: "news.php",
        async: false,  
        datatype: "html",
        success: function(data, textStatus, xhr){
            $('#aboutParsons #news .scroll').append(data);
            returnData = data;
        },
        // Alert status code and error if fail
        error: function (xhr, ajaxOptions, thrownError){
            returnData = xh4.status;
            console.log(xhr.status);
            console.log(thrownError);
        }
    });    

    $.ajax({
        type: "POST",
        //url: "http://wentin.co/parsons-localhost/getcontent.php",
        url: "events.php",
        async: false,  
        datatype: "html",
        success: function(data, textStatus, xhr){
            $('#aboutParsons #eventCalendar .scroll').append(data);
            returnData = data;
        },
        // Alert status code and error if fail
        error: function (xhr, ajaxOptions, thrownError){
            returnData = xh4.status;
            console.log(xhr.status);
            console.log(thrownError);
        }
    });    

    var content = loadContent('http://www.newschool.edu/parsons/about/', '.col-700 p', '#introduction #introduction');
    
	/**********Load School ADHT*******/
    loadIntroduction({
        "program" : 'aas-graphic-design-programs',
    }, "graphicDesignAAS");
    loadCurriculum({
        "program" : 'aas-graphic-design-curriculum',
    }, "graphicDesignAAS","left");
    loadCurriculum({
        "program" : 'aas-graphic-design-curriculum',
    }, "graphicDesignAAS","right");


	
    loadIntroduction({
        "program" : 'bfa-communication-design',
    }, "communicationDesignBFA");
    loadCurriculum({
        "program" : 'bfa-communication-design-curriculum',
    }, "communicationDesignBFA","left");
    loadCurriculum({
        "program" : 'bfa-communication-design-curriculum',
    }, "communicationDesignBFA","right");



	
    loadIntroduction({
        "program" : 'bfa-design-technology',
    }, "designAndTechnologyBFA");
    loadCurriculum({
        "program" : 'bfa-design-technology-curriculum',
    }, "designAndTechnologyBFA","left");
    loadCurriculum({
        "program" : 'bfa-design-technology-curriculum',
    }, "designAndTechnologyBFA","right");



	
    loadIntroduction({
        "program" : 'mfa-design-technology',
    }, "designAndTechnologyMFA");
    loadCurriculum({
        "program" : 'mfa-design-technology-curriculum',
    }, "designAndTechnologyMFA","left");
    loadCurriculum({
        "program" : 'mfa-design-technology-curriculum',
    }, "designAndTechnologyMFA","right");



	
    loadIntroduction({
        "program" : 'mfa-fine-arts',
    }, "fineArtsBFA");
    loadCurriculum({
        "program" : 'bfa-fine-arts-curriculum',
    }, "fineArtsBFA","left");
    loadCurriculum({
        "program" : 'mfa-fine-arts-curriculum',
    }, "fineArtsBFA","right");



	
    loadIntroduction({
        "program" : 'bfa-fine-arts',
    }, "fineArtsBFA");
    loadCurriculum({
        "program" : 'bfa-fine-arts-curriculum',
    }, "fineArtsBFA","left");
    loadCurriculum({
        "program" : 'mfa-fine-arts-curriculum',
    }, "fineArtsBFA","right");



	
    loadIntroduction({
        "program" : 'mfa-fine-arts',
    }, "fineArtMFA");
    loadCurriculum({
        "program" : 'mfa-fine-arts-curriculum',
    }, "fineArtMFA","left");
    loadCurriculum({
        "program" : 'mfa-fine-arts-curriculum',
    }, "fineArtMFA","right");



	
    loadIntroduction({
        "program" : 'bfa-illustration',
    }, "illustrationBFA");
    loadCurriculum({
        "program" : 'bfa-illustration-curriculum',
    }, "illustrationBFA","left");
    loadCurriculum({
        "program" : 'bfa-illustration-curriculum',
    }, "illustrationBFA","right");



	
    loadIntroduction({
        "program" : 'bfa-photography',
    }, "photographyBFA");
    loadCurriculum({
        "program" : 'bfa-photography-curriculum',
    }, "photographyBFA","left");
    loadCurriculum({
        "program" : 'bfa-photography-curriculum',
    }, "photographyBFA","right");



	
     loadIntroduction({
        "program" : 'mfa-photography',
    }, "photographyMFA");
    loadCurriculum({
        "program" : 'mfa-photography-curriculum',
    }, "photographyMFA","left");
    loadCurriculum({
        "program" : 'mfa-photography-curriculum',
    }, "photographyMFA","right");

    /**********Load School ADHT*******/
	
    loadIntroduction({
        "program" : 'ma-design-studies-research',
    }, "designStudiesMA");
    loadCurriculum({
        "program" : 'ma-design-studies-curriculum',
    }, "designStudiesMA","left");



	
     loadIntroduction({
        "program" : 'ma-fashion-studies',
    }, "fashionStudiesMA");
    loadCurriculum({
        "program" : 'curriculum.aspx?id=37602',
    }, "fashionStudiesMA","left");


	
    loadIntroduction({
        "program" : 'ma-history-decorative-arts-design',
    }, "historyofDecorativeArtsandDesignMA");
    loadCurriculum({
        "program" : 'curriculum.aspx?id=28967',
    }, "historyofDecorativeArtsandDesignMA","left");

    /**********Load School SCE *******/
    /*
	loadIntroduction({
        "program" : 'masters-architecture(the last part of url for introduction)',
    }, "ArchitectureMArch(the id name from the html for '.rightCol')");
    loadCurriculum({
        "program" : 'm-arch-architecture-curriculum(the last part of url for curriculum)',
    }, "ArchitectureMArch(the id name from the html for '.rightCol')","left(load to the left column or right column)");

	*/
    //ad bfa
     loadIntroduction({
        "program" : 'bfa-architecture-design',
    }, "ArchitecturalDesignBFA");
    loadCurriculum({
        "program" : 'bfa-architecture-design-curriculum',
    }, "ArchitecturalDesignBFA","left");//cant find ba/bfa

//a m.arch
    loadIntroduction({
        "program" : 'masters-architecture',
    }, "ArchitectureMArch");
    loadCurriculum({
        "program" : 'm-arch-architecture-curriculum',
    }, "ArchitectureMArch","left");
    loadCurriculum({
        "program" : 'm-arch-architecture-mfa-lighting-design-curriculum',
    }, "ArchitectureMArch","right");//check

//ld mfa
     loadIntroduction({
        "program" : 'lighting-design',
    }, "LightingDesignMFA");
    loadCurriculum({
        "program" : 'mfa-lighting-design-curriculum',
    }, "LightingDesignMFA","left");
     loadCurriculum({
        "program" : 'm-arch-architecture-mfa-lighting-design-curriculum',
    }, "LightingDesignMFA","right");//check


//interior design aas
    loadIntroduction({
        "program" : 'aas-interior-design-programs',
    }, "InteriorDesignAAS");
    loadCurriculum({
        "program" : 'aas-interior-design-curriculum',
    }, "InteriorDesignAAS","left");//fast track is on the same page
     
//interior design bfa
    loadIntroduction({
        "program" : 'bfa-interior-design',
    }, "InteriorDesignBFA");
    loadCurriculum({
        "program" : 'bfa-interior-design-curriculum',
    }, "InteriorDesignBFA","left");// cant find ba/bfa
     
//interior disign mfa
    loadIntroduction({
        "program" : 'mfa-interior-design',
    }, "InteriorDesignMFA");
    loadCurriculum({
        "program" : 'mfa-interior-design-curriculum',
    }, "InteriorDesignMFA","left");//on same page

//product design bfa
    loadIntroduction({
        "program" : 'product-design',
    }, "ProductDesignBFA");
    loadCurriculum({
        "program" : 'product-design-curriculum',
    }, "ProductDesignBFA","left");//can't find BA/BFA
    






    /**********Load School SDS *******/
//db gc
    loadIntroduction({
        "program" : 'design-business-online-graduate-certificate',
    }, "designBusinessGRADUATECERTIFICATE");
    loadCurriculum({
        "program" : 'design-business-online-graduate-certificate-curriculum',
    }, "designBusinessGRADUATECERTIFICATE","left");
    
//due ms
    loadIntroduction({
        "program" : 'ms-design-urban-ecology',
    }, "designAndUrbanEcologiesMS");
    loadCurriculum({
        "program" : 'ms-design-urban-ecologies-curriculum',
    }, "designAndUrbanEcologiesMS","left");
    

//es bs
    loadIntroduction({
        "program" : 'bachelors-environmental-studies',
    }, "environmentalStudiesBS");
    loadCurriculum({
        "program" : '',
    }, "environmentalStudiesBS","left");
    loadCurriculum({
        "program" : '',
    }, "environmentalStudiesBS","right");//missing curriculum info
//id bfa
    loadIntroduction({
        "program" : 'bfa-integrated-design',
    }, "integratedDesignBFA");
    loadCurriculum({
        "program" : 'bfa-integrated-design-curriculum',
    }, "integratedDesignBFA","left");
    loadCurriculum({
        "program" : '',
    }, "integratedDesignBFA","right");//missing ba

//sdm bba
    loadIntroduction({
        "program" : 'bba-design-management',
    }, "strategicDesignAndManagementBBA");
    loadCurriculum({
        "program" : 'bba-design-management-curriculum',
    }, "strategicDesignAndManagementBBA","left");
    
//sdm ms
    loadIntroduction({
        "program" : 'masters-design-management',
    }, "strategicDesignAndManagementMS");
    loadCurriculum({
        "program" : 'masters-design-management-curriculum',
    }, "strategicDesignAndManagementMS","left");
    
//tup ma
    loadIntroduction({
        "program" : 'ma-theories-urban-research',
    }, "theoriesOfUrbanPracticeMA");
    loadCurriculum({
        "program" : 'ma-theories-of-urban-practice-curriculum',
    }, "theoriesOfUrbanPracticeMA","left");
   
//td mfa
    loadIntroduction({
        "program" : 'mfa-transdisciplinary-design',
    }, "transdisciplinaryDesignMFA");
    loadCurriculum({
        "program" : 'mfa-transdisciplinary-design-curriculum',
    }, "transdisciplinaryDesignMFA","left");
   
//ud bs
    loadIntroduction({
        "program" : 'bs-urban-design',
    }, "urbanDesignBS");
    loadCurriculum({
        "program" : 'bs-urban-design-curriculum',
    }, "urbanDesignBS","left");
    

    /**********Load School Fasion *******/
//fd aas
    loadIntroduction({
        "program" : 'aas-fashion-design-programs',
    }, "FashionDesignAAS");
    loadCurriculum({
        "program" : 'aas-fashion-design-curriculum',
    }, "FashionDesignAAS","left");
    loadCurriculum({
        "program" : '',
    }, "FashionDesignAAS","right");// three kinds of curriculums at the same page
//fd bfa
    loadIntroduction({
        "program" : 'bfa-fashion-design',
    }, "FashionDesignBFA");
    loadCurriculum({
        "program" : 'bfa-fashion-design-curriculum',
    }, "FashionDesignBFA","left");
    loadCurriculum({
        "program" : '',
    }, "FashionDesignBFA","right");//missing ba 
//fds mfa
    loadIntroduction({
        "program" : 'mfa-fashion-design-society',
    }, "FashionDesignandSocietyMFA");
    loadCurriculum({
        "program" : 'mfa-fashion-design-society-curriculum',
    }, "FashionDesignandSocietyMFA","left");
    loadCurriculum({
        "program" : '',
    }, "FashionDesignandSocietyMFA","right");//the whole curriculum is not on ipad app
//fm aas
    loadIntroduction({
        "program" : 'aas-fashion-marketing-programs',
    }, "FashionMarketingAAS");
    loadCurriculum({
        "program" : 'fashion-marketing-degree-curriculum',
    }, "FashionMarketingAAS","left");
    loadCurriculum({
        "program" : 'fashion-marketing-degree-curriculum',
    }, "FashionMarketingAAS","right");//fast track is on the same page
    /**********Load School CONTINUING STUDIES *******/
//summer program
    /*loadIntroduction({
        "program" : '',
    }, "");
    loadCurriculum({
        "program" : '',
    }, "","left");
    loadCurriculum({
        "program" : '',
    }, "","right");
    //pre-college academy
     "program" : '',
    }, "");
    loadCurriculum({
        "program" : '',
    }, "","left");
    loadCurriculum({
        "program" : '',
    }, "","right");
    //continuing education
     "program" : '',
    }, "");
    loadCurriculum({
        "program" : '',
    }, "","left");
    loadCurriculum({
        "program" : '',
    }, "","right");*/

}

function loadSlideShow(){
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

    TNS.slideshow("#ma-design-studies-culture-place", {

          albumId: 192988, 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

    });


    TNS.slideshow("#ma-fashion-studies-culture-place", {

          albumId: 86625 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#ma-history-decorative-arts-design-culture-place", {

          albumId: 86626 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#aas-graphic-design-culture-place", {

          albumId: 86609 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#aas-graphic-design-student-work", {

          albumId: 72403 , 

          caption: true,        

          width: 540,

          height: 700,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-communication-design-culture-place", {

          albumId: 86613 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-communication-design-student-work", {

          albumId: 72397 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-design-technology-culture-place", {

          albumId: 86615 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-design-technology-student-work", {

          albumId: 72398 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#mfa-design-technology-culture-place", {

          albumId: 86629  , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#mfa-design-technology-student-work", {

          albumId: 72400  , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-fine-artsn-culture-place", {

          albumId: 86617 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-fine-arts-student-work", {

          albumId: 72401 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#mfa-fine-artsn-culture-place", {

          albumId: 86631  , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#mfa-fine-arts-student-work", {

          albumId: 72402 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-illustration-culture-place", {

          albumId: 86618 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-illustration-student-work", {

          albumId: 72358 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-photography-culture-place", {

          albumId: 86621 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-photography-student-work", {

          albumId: 72404 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#mfa-photography-culture-place", {

          albumId: 86636 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#mfa-photography-student-work", {

          albumId: 72405 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-architecture-design-culture-place", {

          albumId: 86612 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-architecture-design-student-work", {

          albumId: 72406 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#m-arch-architecture-culture-place", {

          albumId: 86627  , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });

    TNS.slideshow("#m-arch-architecture-student-work", {

          albumId: 72407 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#mfa-lighting-design-culture-place", {

          albumId: 86634 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#mfa-lighting-design-student-work", {

          albumId: 72412 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#aas-interior-design-culture-place", {

          albumId: 86636 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#aas-interior-design-student-work", {

          albumId: 72410 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });

    TNS.slideshow("#bfa-interior-design-culture-place", {

          albumId: 86620 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-interior-design-student-work", {

          albumId: 72408 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });

    TNS.slideshow("#mfa-interior-design-culture-place", {

          albumId: 86633 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#mfa-interior-design-student-work", {

          albumId: 206160 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-product-design-culture-place", {

          albumId: 86622 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-product-design-student-work", {

          albumId: 72413 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bachelors-environmental-studies-student-work", {

          albumId: 72415 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-integrated-design-culture-place", {

          albumId: 86619 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-integrated-design-student-work", {

          albumId: 72416 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bba-strategic-design-management-culture-place", {

          albumId: 86611 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bba-strategic-design-management-student-work", {

          albumId: 72414 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#ms-strategic-design-management-culture-place", {

          albumId: 86622 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#ms-strategic-design-management-student-work", {

          albumId: 72413 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#ma-theories-urban-analysis-culture-place", {

          albumId: 218559 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#ma-theories-urban-analysis-student-work", {

          albumId: 72413 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-product-design-culture-place", {

          albumId: 86622 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });


    TNS.slideshow("#bfa-product-design-student-work", {

          albumId: 72413 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });

    TNS.slideshow("#bs-urban-design-culture-place", {

          albumId: 210548 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });

    TNS.slideshow("#bs-urban-design-student-work", {

          albumId: 184488 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });

    TNS.slideshow("#aas-fashion-design-culture-place", {

          albumId: 86607 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });

    TNS.slideshow("#aas-fashion-design-student-work", {

          albumId: 72421 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });

    TNS.slideshow("#bfa-fashion-design-culture-place", {

          albumId: 86616 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });

    TNS.slideshow("#bfa-fashion-design-student-work", {

          albumId: 72419 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });

    TNS.slideshow("#mfa-fashion-design-society-culture-place", {

          albumId: 86630  , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });

    TNS.slideshow("#mfa-fashion-design-society-student-work", {

          albumId: 184488 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });

    TNS.slideshow("#aas-fashion-marketing-culture-place", {

          albumId: 86608 , 

          caption: true,        

          width: 520,

          height: 400,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });

    TNS.slideshow("#aas-fashion-marketing-student-work", {

          albumId: 72420 , 

          caption: true,        

          width: 700,

          height: 540,

          animation: "slide",

          random: true,

          controlNav: false,

          linkable: true

      });
}