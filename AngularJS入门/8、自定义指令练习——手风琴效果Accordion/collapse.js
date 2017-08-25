/**
 * Created by wqq on 2016/6/20.
 */
var myApp=angular.module('myApp',[])
.service('collapseData',function(){
    return [
        {title:'first',content:'first content'},
        {title:'second',content:'second content'},
        {title:'third',content:'third content'},
        {title:'four',content:'four content'}
    ];
})
.controller('collapseController',['$scope','collapseData',function($scope,collapseData){
    $scope.collapseItems=collapseData;
}])
.directive('collapse',function(){
    return {
        restrict:'E',
        templateUrl:'template.html',
        replace:true,
        scope:{
            items:'&'   // ‘&’返回的是函数形式，‘@’返回的是字符串，‘=’返回的是双向绑定的
        },
        controller:['$scope',function($scope){
            $scope.collapseItems=$scope.items();
            $scope.isClose=[];

            $scope.collapseItems.forEach(function(item,index,items){
                console.log(index)
                $scope.isClose[index]=true ;
            });
            $scope.changeStatus=function($index){
                angular.forEach($scope.isClose,function(item,index,items){
                    if($index!=index){
                        $scope.isClose[index]=true;
                    }else {
                        $scope.isClose[index]=!$scope.isClose[index];
                    }
                })
            };
        }]
    }
})