
var NFV = NFV || {};
NFV.log = function _log(log){
  console.log(log);
};
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
          var element = function _element(elementToFind){
          var objToGive;
            if(Modernizr.addTest('hasJquery','jQuery' in window)) {
            var $jqueryObj = $('body').find(elementToFind);
            objToGive = $jqueryObj;
          }else{
              var normalObj;
              if (elementToFind.includes('#'))
              {
                normalObj = document.getElementById(elementToFind);
              }else if(elementToFind.include('.'))
              {
                normalObj = document.getElementsByClassName(elementToFind);
              }else {
                normalObj = document.getElementsByTagName(elementToFind);
              }
              if(normalObj === undefined || normalObj === null){
                NFV.log('Object empty');
                objToGive = 'error reaching element : '+elementToFind;
              }else{
                objToGive = normalObj;
              }
          }
            return objToGive;
          };
          return {
            getElement:element
          }
    };

    return {
        test:test,
      frontPage:_frontPage
    };
})();
