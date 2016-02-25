angular.module('imageApp').directive('imageDirective', function() {

  return {
    restrict: 'E',
    scope: {
      imageToRender: '=blah'
    },
    templateUrl: 'directiveTmpl.html',
    link: function(scope, element, attrs) {
      element.on('mouseover', function() {
        element.css('display', 'none');
      })
    }
  }

})
