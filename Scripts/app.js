(function () {
    "use strict";



var app = angular.module("matthew", ["ui.router"]);

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise("/");

        $stateProvider.state('main', {
            url: "/",
            templateUrl: "/Partials/Main",
            controller: "MainController",
            text:"Main"
        })
        .state('datagrid', {
            url: "/datagrid",
            templateUrl: "/Partials/datagrid",
            controller: "DatagridController",
            text:"Data Grid"
        })
    }
]);

app.controller("ShellController", ["$scope","$state",
    function ($scope, $state) {
        var states = $state.get();
        $scope.states = states.filter(function(s) {
            return !!s.text;
        });
    }
]);


app.controller("MainController", ["$scope",
    function ($scope) {


    }
]);




})();
