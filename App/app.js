/**
 * Created by 你猜 on 2017/10/15.
 */
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/set', {
            templateUrl: 'App/View/set.html',
            controller: 'setController'
        })
        .when('/set1', {
            templateUrl: 'App/View/set1.html',
            controller: 'setController'
        })
        .otherwise('/set',{

        });
});