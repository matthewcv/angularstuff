
(function() {
    "use strict";



    var app = angular.module("matthew");


app.controller("DatagridController", ["$scope",
    function ($scope) {
        $scope.pageIndex = 0;
        $scope.pageSize = 15;
        $scope.people = people;

        $scope.pageMinus = function() {
            if (this.pageIndex > 0) {
                this.pageIndex--;
            }
        }

        $scope.pagePlus = function() {
            var totalPages = Math.ceil( this.people.length / this.pageSize);

            if (this.pageIndex < totalPages - 1) {
                this.pageIndex++;
            }
        }
    }
]);

    //http://filltext.com/?rows=50&id={index}&name={firstName}&age={randomNumberRange|15to50}
var people = [{ "id": 1, "name": "Cavanaugh", "age": 43 }, { "id": 2, "name": "Tasha", "age": 46 }, { "id": 3, "name": "Nona", "age": 39 }, { "id": 4, "name": "Esther", "age": 28 }, { "id": 5, "name": "Sharon", "age": 42 }, { "id": 6, "name": "Delia", "age": 22 }, { "id": 7, "name": "Gilbert", "age": 39 }, { "id": 8, "name": "Randall", "age": 17 }, { "id": 9, "name": "Evan", "age": 30 }, { "id": 10, "name": "Sheryl", "age": 35 }, { "id": 11, "name": "Arthur", "age": 24 }, { "id": 12, "name": "Angela", "age": 31 }, { "id": 13, "name": "Darci", "age": 24 }, { "id": 14, "name": "Jenny", "age": 45 }, { "id": 15, "name": "Ryan", "age": 17 }, { "id": 16, "name": "Christina", "age": 17 }, { "id": 17, "name": "Cecilia", "age": 22 }, { "id": 18, "name": "Paula", "age": 25 }, { "id": 19, "name": "Sonja", "age": 26 }, { "id": 20, "name": "Rodney", "age": 18 }, { "id": 21, "name": "Meribeth", "age": 22 }, { "id": 22, "name": "Desmond", "age": 43 }, { "id": 23, "name": "Kim", "age": 15 }, { "id": 24, "name": "Ilze", "age": 17 }, { "id": 25, "name": "Sajid", "age": 21 }, { "id": 26, "name": "Myla", "age": 25 }, { "id": 27, "name": "Nitin", "age": 28 }, { "id": 28, "name": "Marita", "age": 24 }, { "id": 29, "name": "Jeff", "age": 28 }, { "id": 30, "name": "Herman", "age": 29 }, { "id": 31, "name": "Marty", "age": 35 }, { "id": 32, "name": "Lavette", "age": 50 }, { "id": 33, "name": "Gerald", "age": 17 }, { "id": 34, "name": "Krista", "age": 38 }, { "id": 35, "name": "Kevin", "age": 44 }, { "id": 36, "name": "Dennis", "age": 21 }, { "id": 37, "name": "Nate", "age": 37 }, { "id": 38, "name": "Felix", "age": 17 }, { "id": 39, "name": "May", "age": 45 }, { "id": 40, "name": "William", "age": 36 }, { "id": 41, "name": "Cenna", "age": 46 }, { "id": 42, "name": "Frederick", "age": 19 }, { "id": 43, "name": "Rossana", "age": 16 }, { "id": 44, "name": "Ted", "age": 24 }, { "id": 45, "name": "Angelina", "age": 49 }, { "id": 46, "name": "Maureen", "age": 50 }, { "id": 47, "name": "Nudret", "age": 28 }, { "id": 48, "name": "Eva", "age": 25 }, { "id": 49, "name": "Ken", "age": 44 }, { "id": 50, "name": "Chad", "age": 46 }];


    app.directive("mcvDatagrid", [
        function() {


            return {
                restrict: "EA",
                //scope: {
                //    items:"="
                //},
                link:function() {
                    console.dir(arguments);
                }
            }

        }
    ]);


app.filter("page", [ function () {

    return function (input, index, size) {



            index = index || 0;
            size = size || 10;

            if (input && input.slice ) {

                var start = index * size;
                var end = start + size;
                return input.slice(start, end);

            }

            return input;
        }

    }]);

})();
