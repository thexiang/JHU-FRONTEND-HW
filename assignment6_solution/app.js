(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckerController)

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
    $scope.dishes = "";
    $scope.message = ""

    $scope.displayLunchCheckerResult = function () {
    var checkerResult = lunchChecker($scope.dishes);
    $scope.checkerResult = checkerResult;
    };


  function lunchChecker(dishes) {
    var dishesArray = dishes.split(",");

    // remove empty string
    dishesArray = dishesArray.filter(function(x){
        return x !== "";
    });

    var numOfDishes = dishesArray.length;


    if(numOfDishes==0){
        $scope.message = 'Please enter data first!'
        $scope.color = 'red'
    }
    else if (numOfDishes <=3){
        $scope.message = 'Enjoy!'
        $scope.color = 'green'
    }
    else{
        $scope.message = 'Too Much!'
        $scope.color = 'green'
    }

  }

};


})();
