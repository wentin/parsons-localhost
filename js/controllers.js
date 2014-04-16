var myApp = angular.module('myApp', []);

myApp.controller('MyController', function ($scope){
    $scope.author = {
        'name' : 'Wenting',
        'title': 'Parsons Web App'
    }
});

