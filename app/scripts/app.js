'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',

  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form',{
        templateUrl:'views/form.html',
        url:'/form'
    })
      .state('dashboard.blank',{
        templateUrl:'views/pages/blank.html',
        url:'/blank'
    })
      .state('login',{
        templateUrl:'views/pages/login.html',
        url:'/login'
    })
      .state('dashboard.chart',{
        templateUrl:'views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                'bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.table',{
        templateUrl:'views/table.html',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl:'views/ui-elements/panels-wells.html',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
        templateUrl:'views/ui-elements/buttons.html',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
        templateUrl:'views/ui-elements/notifications.html',
        url:'/notifications'
    })
      .state('dashboard.typography',{
       templateUrl:'views/ui-elements/typography.html',
       url:'/typography'
   })
      .state('dashboard.icons',{
       templateUrl:'views/ui-elements/icons.html',
       url:'/icons'
   })
      .state('dashboard.grid',{
       templateUrl:'views/ui-elements/grid.html',
       url:'/grid'
   })
        .state('dashboard.FormExampleJson',{
            templateUrl:'views/FormExampleJson.html',
            url:'/FormExampleJson'
        })
  }]);

sbAdminApp.controller("cont",function ($scope) {

    $scope.listProduct =[

        {   id: 1,
            name: "Mariam",
            surename: "Poghosyan",
            fathername: "Ashot",
            position: "Manager",
            dateofemployment: "12.03.2013",
            email: "Poghosyan@gmail.com",
            dateofebirth: "21.03.1996",
            address: "Spandaryan 87",
            department:"Marketing",
            gender: "Female",
            personalcarac: "gtgtgtgtgtgtgtgtgtgtgtgtgtgtgtgtgtg",
            image: "url",
            salary: "130000",
            education: "Bacalourus degree",
            phonenumber: "099889988"
        }
    ];
    $scope.del = function (id) {
        var index = getSelectedIndex(id);
        $scope.listProduct.splice(index,1);
    };
    function getSelectedIndex(id) {
        for(var i=0; i<$scope.listProduct.length; i++)
            if($scope.listProduct[i].id==id)
                return i;
        return -1;
    }
    $scope.edit = function (id) {
        var index =  getSelectedIndex(id);
        var product = $scope.listProduct[index];
        $scope.id =product.id;
        $scope.name =product.name;
        $scope.surename =product.surename;
        $scope.fathername =product.fathername;
        $scope.position =product.position;
        $scope.dateofemployment =product.dateofemployment;
        $scope.email =product.email;
        $scope.dateofebirth =product.dateofebirth;
        $scope.address =product.address;
        $scope.department =product.department;
        $scope.gender =product.gender;
        $scope.personalcarac =product.personalcarac;
        $scope.image =product.image;
        $scope.salary =product.salary;
        $scope.education =product.education;
        $scope.phonenumber =product.phonenumber;

    };
    $scope.add =function (id) {
        $scope.listProduct.push ({
            id:$scope.id,
            name:$scope.name,
            surename:$scope.surename,
            fathername:$scope.fathername,
            position:$scope.position,
            dateofemployment:$scope.dateofemployment,
            email:$scope.email,
            dateofebirth:$scope.dateofebirth,
            address:$scope.address,
            department:$scope.department,
            gender:$scope.gender,
            personalcarac:$scope.personalcarac,
            image:$scope.image,
            salary:$scope.salary,
            education:$scope.education,
            phonenumber:$scope.phonenumber
        });
        $scope.id = "";
        $scope.name='';
        $scope.surename='';
        $scope.fathername="";
        $scope.position="";
        $scope.dateofemployment="";
        $scope.email="";
        $scope.dateofebirth="";
        $scope.address="";
        $scope.department="";
        $scope.gender="";
        $scope.personalcarac="";
        $scope.image="";
        $scope.salary="";
        $scope.education="";
        $scope.phonenumber="";
    };
    $scope.save = function (id) {
        var index = getSelectedIndex($scope.id);
        $scope.listProduct[index].id =$scope.id;
        $scope.listProduct[index].name =$scope.name;
        $scope.listProduct[index].surename =$scope.surename;
        $scope.listProduct[index].fathername =$scope.fathername;
        $scope.listProduct[index].position =$scope.position;
        $scope.listProduct[index].dateofemployment =$scope.dateofemployment;
        $scope.listProduct[index].email =$scope.email;
        $scope.listProduct[index].dateofebirth =$scope.dateofebirth;
        $scope.listProduct[index].address =$scope.address;
        $scope.listProduct[index].department =$scope.department;
        $scope.listProduct[index].gender =$scope.gender;
        $scope.listProduct[index].personalcarac =$scope.personalcarac;
        $scope.listProduct[index].image =$scope.image;
        $scope.listProduct[index].salary =$scope.salary;
        $scope.listProduct[index].education =$scope.education;
        $scope.listProduct[index].phonenumber =$scope.phonenumber;

    }
});
    
