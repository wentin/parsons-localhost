function loaddata(){
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
    
/*//due ms
    loadIntroduction({
        "program" : '',
    }, "");
    loadCurriculum({
        "program" : '',
    }, "","left");
    

//es ba
    loadIntroduction({
        "program" : '',
    }, "");
    loadCurriculum({
        "program" : '',
    }, "","left");
    loadCurriculum({
        "program" : '',
    }, "","right");
//id bfa
    loadIntroduction({
        "program" : '',
    }, "");
    loadCurriculum({
        "program" : '',
    }, "","left");
    loadCurriculum({
        "program" : '',
    }, "","right");
//sdm ms
    loadIntroduction({
        "program" : '',
    }, "");
    loadCurriculum({
        "program" : '',
    }, "","left");
    
//tup ma
    loadIntroduction({
        "program" : '',
    }, "");
    loadCurriculum({
        "program" : '',
    }, "","left");
   
//td mfa
    loadIntroduction({
        "program" : '',
    }, "");
    loadCurriculum({
        "program" : '',
    }, "","left");
   
//ud bs
    loadIntroduction({
        "program" : '',
    }, "");
    loadCurriculum({
        "program" : '',
    }, "","left");*/
    

    /**********Load School Fasion *******/


    /**********Load School CONTINUING STUDIES *******/



}