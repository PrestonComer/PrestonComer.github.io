// $(document).ready(function() {
    // $("#hangman").on("click", function() {
    //     i = document.getElementById("b");
    //     i.height = i.scrollHeight + "px";
    // })

    // $('iframe').on("load", function() {
        
    // });
    
    // $("#b").height($("#b").scrollHeight);
    
// })

// function iframeLoaded() {
//     var iFrameID = document.getElementById('b');
//     if(iFrameID) {
//           // here you can make the height, I delete it first, then I make it again
//           iFrameID.height = "";
//           iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
//     }   
// }

// function getDocHeight(doc) {
//     doc = doc || document;
//     // stackoverflow.com/questions/1145850/
//     var body = doc.body, html = doc.documentElement;
//     var height = Math.max( body.scrollHeight, body.offsetHeight, 
//         html.clientHeight, html.scrollHeight, html.offsetHeight );
//     return height;
// }


// $("details#hangman summary").on("click", function() {
//     setIframeHeight("b");
// })

// function setIframeHeight(id) {
    // IFrame = document.getElementById(id);
    // console.log(IFrame.offsetTop + IFrame.offsetHeight + IFrame.clientTop)
    // IFrame.height = IFrame.offsetTop + IFrame.offsetHeight + IFrame.clientTop;
//     var ifrm = document.getElementById(id);
//     var doc = ifrm.contentDocument? ifrm.contentDocument: 
//         ifrm.contentWindow.document;
//     ifrm.style.visibility = 'hidden';
//     ifrm.style.height = "10px"; // reset to minimal height ...
//     // IE opt. for bing/msn needs a bit added or scrollbar appears
//     ifrm.style.height = getDocHeight( doc ) + 4 + "px";
//     ifrm.style.visibility = 'visible';
// }