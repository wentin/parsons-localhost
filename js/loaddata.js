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