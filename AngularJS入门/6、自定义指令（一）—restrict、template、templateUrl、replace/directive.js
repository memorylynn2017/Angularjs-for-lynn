/**
 * Created by wqq on 2016/6/13.
 */
var myApp=angular.module('myApp',[],['$compileProvider','$controllerProvider',function($compileProvider,$controllerProvider){

    //1、驼峰命名法，注意在html中调用时要用test-no-replace，分隔符“-”必须要有，否则 E、A解析不出来
    //2、没有replace或者false，模板的内容会嵌入到标签内，替换原来标签的内容
    //3、replace为true，模板的内容会替换此标签，但是当为C、A时会给模板添加对应的class、attribute
    //4、当replace为true时，模板中的内容必须包含在一个标签中，例如：如果直接是一个字符串“angular"就会报错
    //5、transclude包含标签原有的数据，将原有的数据嵌入到ng-transclude标签中
    //6、priority优先级，数字越大优先级越高，默认0，默认指令从左到右顺序执行，ng-repeat默认为1000
    //7、terminal为true时，priority<0的指令不执行
    $compileProvider.directive('testNoReplace',function(){
        return{
            restrict:'ECA',
            template:'<div>哈哈哈，测试,noReplace</div>',
            replace:false
        }
    });
    $compileProvider.directive('testReplace',function(){
        return{
            restrict:'ECAM',
            template:'<div>哈哈哈，测试，replace为true</div>',
            replace:true
        }
    });
    $controllerProvider.register('firstController',['$scope',function($scope){
        $scope.hello="Welcome to AngularJs World";
    }]);
    $controllerProvider.register('secondController',['$scope', function ($scope) {
        $scope.hi="How are you";
    }])
}]);
myApp
    .directive('templateurls',function(){
    return{
        restrict:'E',
        templateUrl:'a.html',
        replace:true
    }
})
.directive('transclude',function(){
    return{
        restrict:'E',
        template:'<div>这是新数据,下面是旧的数据<br/><div ng-transclude></div></div>',
        replace:true,
        transclude:true
    }
})