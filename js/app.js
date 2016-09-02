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
        .when('/read', {
            templateUrl: 'partials/read.html'
        })
        .otherwise({redirectTo: '/'})
});
var controllers = {};
controllers.chapterList = function ($scope) {
    /**/
    $scope.chapters = [
        {
            'num': 1,
            'name': "Chapter01",
            'title': 'First day bla bla',
            'link': "#",
            'comicImg': 'http://th01.deviantart.net/fs70/PRE/i/2013/126/1/e/nature_portrait_by_pw_fotografie-d63tx0n.jpg',
            'story': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda at dignissimos ex maxime quo voluptatibus? Assumenda autem commodi dolore eligendi molestias obcaecati, officiis possimus quia reprehenderit temporibus ullam vel',
            'shortStory': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            'num': 2,
            'name': "Chapter02",
            'title': 'First day bla bla',
            'link': "#",
            'comicImg': 'http://th01.deviantart.net/fs70/PRE/i/2013/126/1/e/nature_portrait_by_pw_fotografie-d63tx0n.jpg',
            'story': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda at dignissimos ex maxime quo voluptatibus? Assumenda autem commodi dolore eligendi molestias obcaecati, officiis possimus quia reprehenderit temporibus ullam vel',
            'shortStory': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'        },
        {
            'num': 3,
            'name': "Chapter03",
            'title': 'First day bla bla',
            'link': "#",
            'comicImg': 'http://th01.deviantart.net/fs70/PRE/i/2013/126/1/e/nature_portrait_by_pw_fotografie-d63tx0n.jpg',
            'story': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda at dignissimos ex maxime quo voluptatibus? Assumenda autem commodi dolore eligendi molestias obcaecati, officiis possimus quia reprehenderit temporibus ullam vel',
            'shortStory': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
    ];
};

webComic.controller(controllers);