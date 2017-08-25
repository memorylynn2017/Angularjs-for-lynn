/**
 * Created by wqq on 2016/6/16.
 */
var myApp = angular.module('myApp', [])
    .controller('myAppCtr', ['$scope', function ($scope) {
        $scope.items=[{name:'Javascript'},{name:'C#'},{name:'Css'}];
        $scope.title=121;
        $scope.hello=function(){
            console.log('hello world');
        };
        console.log('controller')
    }])
    .directive('directiveScope', function () {
        return {
            scope: {
                say: '&say',
                items: '&',
                title: '@'
            },
            controller: function ($scope) {
                $scope.title += "——测试一下独立作用域会影响同一个指令的多个调用吗1";
                $scope.say()();
                console.log('1');
                console.log(typeof $scope.title)
            },
            restrict: 'EACM',
            template: '<div>正在进行scope独立作用域测试1:<br/><ul><li ng-repeat="item in items()">{{item.name}}</li><li>{{title}}</li></ul></div>',
            replace: true
        }
    })
    .directive('directiveScope2', function () {
        return {
            scope: {
                say:'&say',
                items:'&',
                title:'@'
            },
            controller: function ($scope) {
                $scope.title+="——测试一下独立作用域会影响同一个指令的多个调用吗2";

                $scope.say()();
                console.log('2');

            },
            restrict:'EACM',
            template:'<div>正在进行scope独立作用域测试2:<br/><ul><li ng-repeat="item in items()">{{item.name}}</li><li>{{title}}</li></ul></div>',
            replace:true
        }
    })