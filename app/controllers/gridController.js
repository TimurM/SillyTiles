(function() {

    var GridController = function ($scope, gridsFactory) {
        $scope.grid = [];
        $scope.savedBoardNames = []
        $scope.boardName = null;

         $scope.saveBoard = function() {
           gridsFactory.saveGrid($scope.grid, $scope.boardName)
           $scope.savedBoardNames.push($scope.boardName);
           $scope.boardName = '';
         };

         $scope.resetBoard = function() {
           $scope.genBoard();
         }

         $scope.retrieveBoard = function(boardName) {
           $scope.grid = null;
           $scope.grid = gridsFactory.retrieveGrid(boardName)
         };

         $scope.genBoard = function() {
           $scope.grid.length = 0;
           var rows = $scope.square.rows
           var columns = $scope.square.columns
           var id = 1;

           for(var i = 0; i < rows; i++) {
             var innerArray = [];
             for(var r = 0; r <  columns; r++) {
               var newObj = {
                 color: '{"background-color":"white"}',
                 id: id
               }
               id += 1;
               innerArray.push(newObj);
             }
             $scope.grid.push(innerArray);
           }
         };
    };

    GridController.$inject = ['$scope', 'gridsFactory'];

    angular.module('tilesApp')
      .controller('GridController', GridController);

}());
