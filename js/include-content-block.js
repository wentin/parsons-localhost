/* Ajax Includes script- © Dynamic Drive DHTML code library (www.dynamicdrive.com)  */
/* Adapted by Edward Wright to use Ektron Webservice to retrieve a specified block. */
//var rootdomain="//"+window.location.hostname;
var rootdomain = "//"+window.location.hostname; // GS 2-5-2014

function includeContentBlock(content_id) {
    var page_request = false
    var url = rootdomain + "/Workarea/Webservices/ContentWS.asmx/GetContentBlock?ContentId=" + content_id
    
    if (window.XMLHttpRequest) // if Mozilla, Safari etc
        page_request = new XMLHttpRequest()
    else if (window.ActiveXObject){ // if IE
        try {
            page_request = new ActiveXObject("Msxml2.XMLHTTP")
        } 
        catch (e){
            try{
                page_request = new ActiveXObject("Microsoft.XMLHTTP")
            }
            catch (e){}
        }
    }
    else
        return false
    
    page_request.open('GET', url, false) //get page synchronously 
    page_request.send(null)
    displayContentBlock(page_request)
}

function displayContentBlock(page_request){
    if (window.location.href.indexOf("http")==-1 || page_request.status==200){
        if (window.DOMParser){
          // Browsers other than Internet Explorer.
          parser=new DOMParser();
          xmlDoc=parser.parseFromString(page_request.responseText,"text/xml")
        }
        else{
           // Internet Explorer
          xmlDoc=new ActiveXObject("Microsoft.XMLDOM")
          xmlDoc.async="false"
          xmlDoc.loadXML(page_request.responseText)
        }
        
        // Get content and display.
        document.write(xmlDoc.getElementsByTagName("Html")[0].childNodes[0].nodeValue.replace("&lt;","<").replace("&gt;",">").replace("&amp;","&"))
    }
}