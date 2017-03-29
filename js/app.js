/**
 * Created by Leslie on 2017/3/8.
 */

var app = angular.module('BookApp', ['ngRoute']);

// 配置
app.config(['$routeProvider', '$locationProvider','$httpProvider', function ($routeProvider, $locationProvider,$httpProvider) {
    $locationProvider.hashPrefix('');
    $httpProvider.defaults.headers.post={'Content-Type':'application/x-www-form-urlencoded'};

    $routeProvider
        .when('/home', {
            templateUrl: './templates/home.tpl.html',
            controller: 'home.ctrl'
        })
        .when('/list', {
            templateUrl: './templates/list.tpl.html',
            controller: 'list.ctrl'
        })
        .when('/detail/:id', {
            templateUrl: './templates/detail.tpl.html',
            controller: 'detail.ctrl'
        })
        .when('/login', {
            templateUrl: './templates/login.tpl.html',
            controller: 'login.ctrl'
        })
        .when('/reg',{
            templateUrl:'./templates/reg.tpl.html',
            controller:'reg.ctrl'
        })
        .otherwise('/home');
}]);

// run
app.run(['$rootScope','$location','save',function ($rootScope,$location,save) {

    //$rootScope.name=save.get('username',"");
    if(save.get('username',"")){
        $rootScope.name=save.get('username',"");
    }else{
        $rootScope.name="请登录";
    }



    // $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    //     // console.log(next);
    //     // console.log(current);
    // })
    //
    // $rootScope.$on('$routeChangeSuccess', function (evt, current, prev) {
    //     console.log(current);
    //     console.log(prev);
    // })

    $rootScope.$on('$locationChangeStart', function (evt, next, current) {
        // console.log(next)
        // console.log(current)
    })

    $rootScope.$on('$locationChangeSuccess', function (evt, current, prev) {
        $rootScope.currentPath = $location.path(); // /list  /home
        // console.log(prev);
    })
}]);