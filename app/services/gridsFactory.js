(function() {
    var gridsFactory = function() {

        var factory = {};
        var savedGrids = {};

        factory.saveGrid = function(collection, name) {
            var savedBoard = angular.copy(collection);
            savedGrids[name] = savedBoard;
        };

        factory.retrieveGrid = function(name) {
            return savedGrids[name];
        };

        return factory;
    };

    angular.module('tilesApp').factory('gridsFactory',
                                           gridsFactory);

}());
