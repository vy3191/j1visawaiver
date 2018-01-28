
function StudentViewModel($scope, $http) {
    $scope.Student = {
        StudentCode: "",
        StudentName: ""
    };
}

var app = angular.module('myApp', ['ngRoute']);
            app.controller("StudentViewModel", StudentViewModel);
            app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
                $routeProvider.when('/introduction', {
                    templateUrl: 'views/introduction.html',
                    controller: 'StudentViewModel'
                });
                $routeProvider.when('/praxis', {
                    templateUrl: 'views/praxis.html',
                    controller: 'StudentViewModel'
                });
                $routeProvider.when('/h1bvisa', {
                    templateUrl: 'views/h1bvisa.html',
                    controller: 'StudentViewModel'
                });
                
                $routeProvider.otherwise({
                    redirectTo: "/introduction"
                });
                $locationProvider.html5Mode(true).hashPrefix('!')
            }]);