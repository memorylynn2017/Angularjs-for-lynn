##### 一、介绍
　　我们之前用到的ng-click、ng-class、ng-show等都是angular的内置指令，我们也可以自定义指令。自定义指令的基本结构如下：
```
var myApp=angular.module('myApp',[])
.directive('myDirective',function(){ //以下都已myDirective名字为例
    return {
        //在此具体定义指令
    }
});
```
通过**directive**方法进行自定义指令，函数返回一个对象，对象中通过设置属性、方法对指令进行具体的定义，下面来介绍一些简单的设置
##### 二、简单自定义指令
###### 1、restrict
　　restrict共有四个值，分别是E、C、M、A
- E：代表元素element
- C：代表类 class
- A：代表属性attribute
- M：代表注释
我们可以设置为：
` restrict:'ECA' //这局是设置在上例return返回的对象中的`
这句话的意思是**如果html中有一个有一个元素是myDirective，或者class中有myDirective、属性名是myDirective都会执行这个自定义指令**
这里要特别说明一下html中的使用：**在js中自定义指令时用驼峰法命名，使用时必须分隔符‘-’进行连接，
如：**
```
<my-directive>这里是自定义的指令</my-directive>      //对应E
<div class="my-directive">这里是自定义的指令</div>   //对应C
<div my-directive>这里是自定义的指令</div>           //对应A
```
###### 2、template/templateUrl
看名字就知道这里是一个模板，其实就是一个html代码片段，当遇到自定义指令时我们以什么样的内容来展示这个指令：
`template:'<div>哈哈哈，测试，这是一个自定义指令</div>'`
如果这个模板的内容比较复杂一些，html内容比较多，我们就可以将它单独放到一个html文件中，用templateUrl属性，值为这个html文件的路径
`templateUrl:'template.html'    //假设template中的内容也为<div>哈哈哈，测试，这是一个自定义指令</div>`
假如这个时候我们只设置了restrict、template/templateUrl两个属性，那么html中的
`<my-directive>这里是自定义的指令</my-directive>` 最后会成为
`<my-directive><div>哈哈哈，测试，这是一个自定义指令</div></my-directive>`
此处仅以element为例，class、attribute同理。
我们可以看到**html中原来的“这里是自定义的指令”内容没有了**
###### 3、transclude
上面我们看到html中原来的内容消失了，利用transclude可以将原先的内容添加的模板中，如：
```
        template:'<div>哈哈哈，测试，这是一个自定义指令<br/><div ng-transclude></div></div>',
        transclude:true   //默认为false
```
请注意上面代码的第一行中模板内容有一个带有**ng-transclude**指令的元素，原来的内容就会被放入这个元素内
###### 4、replace
我们的指令"my-directive"在html中并不符合html规范，而且这也并不是我们想要的内容，我们仅需要模板中的内容，所以可以用replace：true将其去掉，
```
//自定义指令
        return{
            restrict:'ECAM',
            template:'<div>哈哈哈，测试，replace为true</div>',
            replace:true
        }
```
```
    <test-replace>element</test-replace>
    <div class="test-replace">class</div>
    <div test-replace>attribute</div>
```

![最终显示结果](http://upload-images.jianshu.io/upload_images/2058233-f9fb01945855eb09.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![浏览器解析结果](http://upload-images.jianshu.io/upload_images/2058233-946b4d8b698a6bdf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
**我们可以看到原始html中指令结构没有了，模板内容取代了这个结构，但是restrict为E、C时会在模板的最外层加上对应的class或属性**
**当replace时，模板中必须要有一个最外层的元素包裹着内容，否则会报错**
##### 三、总结
 - 驼峰命名法，注意在html中调用时要用test-no-replace，分隔符“-”必须要有，否则 E、A解析不出来
 - 没有replace或者false，模板的内容会嵌入到标签内，替换原来标签的内容
 - replace为true，模板的内容会替换此标签，同时当为C、A时会给模板添加对应的class、attribute
 - 当replace为true时，模板中的内容必须包含在一个标签中，例如：如果直接是一个字符串“angular"就会报错
 - transclude包含标签原有的数据，将原有的数据嵌入到ng-transclude标签中