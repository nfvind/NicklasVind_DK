var NFV = NFV || {};
NFV.Master =  NFV.Master|| {};
var page = (function() {

    var test = function test(msg) {
      console.log('you logged this msg : ' +msg);
      return msg;  
    };
    var _isPageUrl = function isPageUrl(pageToTest) {
        var pageHref = window.location.href;
        var isCorrectPage = false;
        if(pageHref.search(pageToTest) !== -1){
            isCorrectPage = true;
        }
        return isCorrectPage;  
    };
    var _frontPage = function frontpage() {
        var img = $('#frontpageImg');

        var onStart = function onStart() {
            img.show('slow');

        };
        onStart();
    };

    return {
        test:test,
        frontpage:_frontPage
    };
})();