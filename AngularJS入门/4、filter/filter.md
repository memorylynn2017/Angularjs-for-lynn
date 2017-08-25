　　angular中filter过滤器主要有两个作用：**格式化数据**和**过滤数据**。filter组件共有以下几种：1、currency 2、number 3、date 4、json 5、lowercase 6、uppercase 7、limitTo 8、orderBy 9、filter。   
　　官方API：https://code.angularjs.org/1.4.0-rc.2/docs/api/ng/filter
##### 一 、currency　　
`{{ currency_expression | currency : symbol : fractionSize}}`  
currency的作用是将值转换为精确小数点的数字，同时在前面添加货币符号，如果**值不能转化为数字，会返回空字符**  
symbol：货币符号，  
fractionSize：精确小数位数  
`$scope.money = 126893.5564;`
![currency测试](http://upload-images.jianshu.io/upload_images/2058233-c2dc0b0e78ca8980.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  
图中我们可以看到currency**默认添加$符号，精确2位小数，会给数字添加逗号**
##### 二、number
　　currency已经包含了number的功能了，同样如果值不能转换为数字，返回空，如果是无穷大返回“∞”  
　　`{{ number_expression | number : fractionSize}}`  
　　fractionSize:小数点位数
![number测试](http://upload-images.jianshu.io/upload_images/2058233-42de6e917f15979a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  
我们可以看到，**number默认精确了3位小数**  
**currency和number精确小数时都会发生四舍五入**
#####三、date
　　关于date的格式化一看官方API简直吓死人，真是太多了，我们就来关注一下我们会用到的，想了解更多的自己可以去看看文档。  
　　1. yyyy：表示年份，如2016  
　　2. MM：表示月份，如06  
　　3. M：同样表示月份，如6，**和MM的区别是个位数月份时前面没有0**，其他类似  
　　4. dd/d:表示天，如今天是06  
　　5. HH/H:表示小时，24小时制  
　　6. hh/h:同样表示小时，12小时制  
　　7. mm/m:分钟  
　　8. ss/s：秒  
　　9. sss：毫秒  
　　10. a :表示AM/PM，没有它的话12小时制时我们怎么知道上午还是下午啊，当然24小时制时仍然可以用它  
　　`$scope.today = new Date();`

![date](http://upload-images.jianshu.io/upload_images/2058233-807605454f297692.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  
我们可以看到年、月、日、时间的顺序是可以自行调的，连接符也是。之前犯二不解为什么有的是大写字母有的是小写字母，那是因为默认是小写的，但是月份M和分钟m冲突，所以才有大小写混合了。。
#####四、uppercase、lowercase
这两个确实没什么好说的  
`$scope.str = 'Hello AngularJs';`
![大小写转换](http://upload-images.jianshu.io/upload_images/2058233-0ff97d7049105d6a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#####五、limitTo
`{{ limitTo_expression | limitTo : limit : begin}}`  
limit：截取长度  
begin：开始位置  
limitTo的作用类似于string的substr函数，只不过参数颠倒了，注意是substr不是substring，  
**limitTo不仅可以用于字符串，也可以用于数组**，此处仅以字符串举例

![limitTo](http://upload-images.jianshu.io/upload_images/2058233-92554b2a5a29e608.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#####六、orderBy
`{{ orderBy_expression | orderBy : expression : reverse}}`  
orderBy的作用是按照某一规则给数组进行排序，可以是普通数组，也可以是对象数组  
`$scope.items = [{id: 1001, name: '赵云', country: '蜀'}, {id: 1003, name: '关羽', country: '蜀'}, {id: 1002,name: '马超',country: '蜀'}];`

![orderBy按照对象id排序](http://upload-images.jianshu.io/upload_images/2058233-49758590614b64ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  
从例子2中我们可以看到，**orderBy默认按照对象id进行了升序排序，例子3“-id”即按照id进行了降序排序，而例子4可以看出`reverse`为true的作用是反转排序结果**，JavaScript中也有reverse函数。  
普通数组也是可以的`{{[22,34,12,3,56]|orderBy:'':true}}`

![普通数组排序](http://upload-images.jianshu.io/upload_images/2058233-a098c1b2f9785d3c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#####七、filter
终于到最后一个了，写完就可以回家吃饭了。  
看名字就知道filter是过滤作用啦~~还是直接举例子吧

![filter过滤](http://upload-images.jianshu.io/upload_images/2058233-7c6e4de34066a674.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  
我们看到：  
1. 例子1中直接filter："00"匹配到了所有数据，那是因为filter进行的是**模糊匹配**，只要有一个属性值含有”00“就会匹配到  
2. 例子2中用filter：{id:'1001'}，不出我们所料这次只匹配到了id为1001的数据，其实这里仍然是**模糊匹配**，如果我们把“1001”改成“001”你试试是不是仍会匹配到  
3. 忘记告诉item是啥了  
`$scope.item={};  
$scope.item.id='001';`  
我们用了item.id和item.$进行了匹配，这其实是一种更加灵活的方式，下一节中我们会用到。
#####八、In JavaScript
　　我们上面讲的一些都是在html中使用过滤器，其实在JavaScript中也可以。  
`myApp.controller('filterCtr', ['$scope', '$filter', function ($scope, $filter) {}`  
我们要先注入$filter，然后我们再讲一个新的过滤器-json  
官方说json过滤器的作用就是为了调试用的，也是，要不然谁没事把一个json字符串输出到页面干嘛。  
我们来看一下它的效果：

![json过滤器](http://upload-images.jianshu.io/upload_images/2058233-184cd09bf3edd28f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  
是不是看起来方便多了。  
类似的其他过滤器也能在函数里面用：  
`$scope.test = $filter('currency')(142, 'CNY', 5);`  
其他类似，可以看看文档，试一下。  
而且filter过滤器还能自定义过滤函数，功能会更加强大，类似于ECMAScript5中的filter函数，快去看看。
#####总结
　　肚子好饿，我要吃饭去了  
　　[github代码地址](https://github.com/wangqingqiang/Angularjs/tree/master/AngularJS从懵逼到入门/4、filter)
