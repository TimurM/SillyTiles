angular.module('app.directives.tilesRender', [])
  .directive('tilesRender', [function($document) {
    return {
      restrict: 'E',
      scope: {
        data: "="
      },
      link: function(scope, element, attrs) {
        // Registers a click, then it determines the element
        // parent's color and changes is if it' snot white

        element.bind('click', function(event){
          var item = scope.data;
          var parentElem = element.parent();
          var parentElemColor = parentElem.css('background-color');
          var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

          if(parentElemColor != 'white') {
            parentElem.css('background-color', 'white');
            scope.data.color = '{"background-color": "white"}';
          } else {
            parentElem.css('background-color', randomColor);
            var newColor = '{"background-color": ' + '"'+randomColor + '"' + '}';
            scope.data.color = newColor;
          }
        });
      }
    };
}]);
