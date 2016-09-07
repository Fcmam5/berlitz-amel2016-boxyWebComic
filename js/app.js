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
        .when('/team', {
            templateUrl: 'partials/team.html'
        })
        .when('/read', {
            templateUrl: 'partials/read.html',
            controller: 'chapterList'
        })
        .otherwise({redirectTo: '/'})
});

var controllers = {};
controllers.chapterList = function ($scope) {
    $scope.chapters = [
        {
            'num': 1,
            'name': "Chapter01",
            'title': 'Boxy\'s 2016 summer',
            'comicImgs': [
                'http://i.imgur.com/HUat3x3.jpg',
                'http://i.imgur.com/mewb23D.jpg',
                'http://i.imgur.com/GGYQyuv.jpg',
                'http://i.imgur.com/konAR3v.jpg',
                'http://i.imgur.com/pxdnhyk.jpg',
                'http://i.imgur.com/4Thv6bZ.jpg',
                'http://i.imgur.com/TrUDpeR.jpg',
                'http://i.imgur.com/a56N1k8.jpg',
                'http://i.imgur.com/fT4NmNw.jpg',
                'http://i.imgur.com/c9l9y3n.jpg',
                'http://i.imgur.com/jSIV5ej.jpg',
                'http://i.imgur.com/SsidnfG.jpg',
                'http://i.imgur.com/l2H0Xl8.jpg',
                'http://i.imgur.com/r8b3KPj.jpg',
                'http://i.imgur.com/Ze6Z5QZ.jpg',
                'http://i.imgur.com/dWskboB.jpg',
                'http://i.imgur.com/DFg52Ly.jpg',
                'http://i.imgur.com/Y4EVKzO.jpg',
                'http://i.imgur.com/svjLVEs.jpg',
                'http://i.imgur.com/JSRrCY3.jpg',
                'http://i.imgur.com/HBEVxso.jpg',
                'http://i.imgur.com/ipFIpXo.jpg',
                'http://i.imgur.com/WDrygil.jpg',
                'http://i.imgur.com/snjsnus.jpg'
            ],
            /*todo: change to real text*/
            'story': 'Imma zero orem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda at dignissimos ex maxime quo voluptatibus? Assumenda autem commodi dolore eligendi molestias obcaecati, officiis possimus quia reprehenderit temporibus ullam vel',
            'shortStory': 'Zeroes Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        /*for testing*/
        {
            'num': 1,
            'name': "Chapter01",
            'title': 'First day bla bla',
            'link': "#",
            'comicImgs': [
                'http://i.imgur.com/HUat3x3.jpg',
                'http://i.imgur.com/mewb23D.jpg',
                'http://i.imgur.com/GGYQyuv.jpg',
                'http://i.imgur.com/konAR3v.jpg',
                'http://i.imgur.com/pxdnhyk.jpg',
                'http://i.imgur.com/4Thv6bZ.jpg',
                'http://i.imgur.com/TrUDpeR.jpg',
                'http://i.imgur.com/a56N1k8.jpg',
                'http://i.imgur.com/fT4NmNw.jpg',
                'http://i.imgur.com/c9l9y3n.jpg',
                'http://i.imgur.com/jSIV5ej.jpg',
                'http://i.imgur.com/SsidnfG.jpg',
                'http://i.imgur.com/l2H0Xl8.jpg',
                'http://i.imgur.com/r8b3KPj.jpg',
                'http://i.imgur.com/Ze6Z5QZ.jpg',
                'http://i.imgur.com/dWskboB.jpg',
                'http://i.imgur.com/DFg52Ly.jpg',
                'http://i.imgur.com/Y4EVKzO.jpg',
                'http://i.imgur.com/svjLVEs.jpg',
                'http://i.imgur.com/JSRrCY3.jpg',
                'http://i.imgur.com/HBEVxso.jpg',
                'http://i.imgur.com/ipFIpXo.jpg',
                'http://i.imgur.com/WDrygil.jpg',
                'http://i.imgur.com/snjsnus.jpg'
            ],
            'story': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda at dignissimos ex maxime quo voluptatibus? Assumenda autem commodi dolore eligendi molestias obcaecati, officiis possimus quia reprehenderit temporibus ullam vel',
            'shortStory': ' 01 Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
    ];
    $scope.chapter = function (id) {
        return this.chapters[id];
    }


};

webComic.controller(controllers);