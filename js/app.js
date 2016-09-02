/**
 * Created by fcmam5 on 9/2/16.
 */
var webComic = angular.module('webComic', ['ngRoute']);

webComic.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/index.html'
        })
        .when('/chapter', {
            templateUrl: 'partials/chapter.html'
        })
        .when('/about', {
            templateUrl: 'partials/about.html'
        })
        .otherwise({redirectTo: '/'})
});
var controllers = {};
controllers.chapterList = function($scope){
    /**/
    $scope.chapters = [
        {'name': "Chapter01", 'link': "#"},
        {'name': "Chapter02", 'link': "#"},
        {'name': "Chapter03", 'link': "#"}
    ];
};

webComic.controller(controllers);