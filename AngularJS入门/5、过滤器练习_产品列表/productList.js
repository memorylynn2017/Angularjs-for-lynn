/**
 * Created by wqq on 2016/6/2.
 */
var productList = angular.module('productList', [])
    .service('products', function () {
        return [
            {
                id: 10001,
                title: "Web全栈工程师的自我修养 余果",
                type: 'book',
                price: 40.80,
                quantity: 1200, //库存
                linkUrl: "https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.4.cwywJs&id=532166746631"
            }, {
                id: 10002,
                title: "MacBook Pro Retina 15英寸",
                type: 'pc',
                price: 16088.00,
                quantity: 18,
                linkUrl: "https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.26.cwywJs&id=45771116847"
            }, {
                id: 10003,
                title: "Ipad Mini4 Retina 7.9英寸",
                type: 'pad',
                price: 3400.00,
                quantity: 68,
                linkUrl: "https://detail.tmall.com/item.htm?spm=a230r.1.14.3.71OdSR&id=522212249670"
            }, {
                id: 10004,
                title: "Surface Book I5 128G 独显",
                type: 'pc、pad',
                price: 11088.00,
                quantity: 51,
                linkUrl: "https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.15.cwywJs&id=525614504276"
            }, {
                id: 10005,
                type: 'pc',
                title: "Lenovo Yoga3Pro I5 4G",
                price: 7299.00,
                quantity: 21,
                linkUrl: "https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.37.cwywJs&id=41541519814"
            }
        ];
    }).controller('productController', ['$scope', 'products', function ($scope, products) {
        $scope.products = products;
        $scope.Ascending = true;
        $scope.orderByType = 'title';//默认按照title进行升序 排列
        $scope.sort = function (type) {
            $scope.Ascending = !$scope.Ascending;

            if ($scope.Ascending) {
                $scope.orderByType = type;
            }
            else {
                $scope.orderByType = '-' + type;
            }
        }
    }]);