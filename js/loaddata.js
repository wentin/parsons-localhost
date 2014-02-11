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

    loadIntroduction({
        "program" : 'masters-architecture',
    }, "ArchitectureMArch");
    loadCurriculum({
        "program" : 'm-arch-architecture-curriculum',
    }, "ArchitectureMArch","left");


    /**********Load School SDS *******/
    

    /**********Load School Fasion *******/


    /**********Load School CONTINUING STUDIES *******/



}