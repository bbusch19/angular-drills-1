angular.module('selectApp').directive('selectAll', function() {

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.on('click', function() {
        this.select();
      })
    }
  }

})
