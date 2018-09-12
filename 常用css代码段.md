- 基数项、偶数项、倍数分组项
```
/* 基数 */
.selector:nth-child(2n-1) {}

/* 偶数 */
.selector:nth-child(2n) {}

/* 倍数分组项 */
.selector:nth-child(3n+1) {} /* 匹配第1、4、7、10... */
.selector:nth-child(3n+5) {} /* 匹配第5、8、11、14... */
.selector:nth-child(5n-1) {} /* 匹配第4、9、13、17... */
```
---
- 如果页面内容不足够长时，页脚固定在浏览器窗口的底部；如果内容足够长时，页脚固定在页面的最底部:

结构:
```html
<div class="wrapper">
    <div class="content"><!-- 页面主体内容区域 --></div>
    <div class="footer"><!-- 需要做到 Sticky Footer 效果的页脚 --></div>
</div>
```
方法1:
```css
html, body {
    height: 100%;
}
.wrapper {
    position: relative;
    min-height: 100%;
    padding-bottom: 50px;
    box-sizing: border-box;
}
.footer {
    position: absolute;
    bottom: 0;
    height: 50px;
}
```
方法2:
```css
.content {
    min-height: calc(100vh - 50px);
}
.footer {
    height: 50px;
}
```
方法3:
```css
html {
    height: 100%;
}
body {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}
.content {
    flex: 1;
}
```

---

- 文字换行
```css
/*强制不换行*/
white-space:nowrap;
/*自动换行*/
word-wrap: break-word;
word-break: normal;
/*强制英文单词断行*/
word-break:break-all;
```
---
- 第三个格子没有右边距
```
li: nth-of-type(3n) { 
　 margin-right: 0;
 }
```
---
- 动画实现简洁loading效果,就只有三个点(...)一直增加和减少,正在加载中...
```
.loading:after{
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  content: '\2026';
  -webkit-animation: ellipsis 2s infinite;
}

// 动画部分
@-webkit-keyframes ellipsis{
  from{
    width: 2px;
  }
  to{
    width: 15px;
  }
}
```

---
- 箭头居中对齐

![image](https://upload-images.jianshu.io/upload_images/5683553-127139078c708855.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/203)
``` css
.icon-arrow {
    display: inline-block;
    width: 20px;
    height: 1ex;
    background: url(arrow.svg) no-repeat center/20px 20px;
}

<div style="font-size: 18px">
   箭头居中对齐
    <i class="icon-arrow"></i>
</div>
```


---
- 对话框气泡下的三角形

![image](https://upload-images.jianshu.io/upload_images/5683553-1596df060fbd63bc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/56)
```css
div {
    width: 0;
    border-width: 20px 10px;
    border-style: solid;
    border-color: #f30 #f30 transparent transparent;
}
```

- 三角形

![image](https://upload-images.jianshu.io/upload_images/5683553-ad26f451ff6f654e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/42)
```css
div {
    width: 0;
    border-width: 20px 10px;
    border-style: solid;
    border-color: #f30 transparent transparent;
}
```

- 三角形

![image](https://upload-images.jianshu.io/upload_images/5683553-9b95d365f2f818ce.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/112)
```css
div {
  width: 0;
  border: 10px solid;
  border-color: #f30 transparent transparent;
}
```
- 增加图标按钮点击区域

![image](https://upload-images.jianshu.io/upload_images/5683553-57452f02ffe53204.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/668)
```css
.icon- clear { 　
     width: 16px; 　 
      height: 16px; 　 
      border: 11px solid transparent; 　 /**key code here**/
}
```

- 三道杠

![image](https://upload-images.jianshu.io/upload_images/5683553-bb22c9ea582add10.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/314)
```css
.icon-menu { 　
     display: inline-block; 　
     width: 140px; 
     height: 10px; 　
     padding: 35px 0; 　
     border-top: 10px solid; 　
     border-bottom: 10px solid; 　
     background-color: currentColor; 　
     background-clip: content-box; 
}
```
- 双层圆点

![image](https://upload-images.jianshu.io/upload_images/5683553-3d54630050054b3b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/288)
```css
.icon-dot { 　
     display: inline-block; 　 
      width: 100px; 
      height: 100px; 　 
      padding: 10px; 　
      border: 10px solid; 　 　 　 
      border-radius: 50%; 　 
      background-color: currentColor; 　 
      background-clip: content-box; 
}

```
- 点击后，内部出现实心圆

![image](https://upload-images.jianshu.io/upload_images/5958994-de281920ccd4c8e7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/110)
```
.circle {
    position: absolute;
    top: 12.4rem;
    left: 2.5rem;
    height: 20px ;
    width:20px;
    border-radius: 50%;
    border: 2px solid #25c4c7;   
}
.circle::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    top: 2px;
    left: 2px;
    background-color: #25c4c7;
    border-radius: 50%;
}
```

---

- 两端对齐
```css
text-align:justify;text-justify:inter-ideogra
```


---

- [去掉Webkit(chrome)浏览器中input(文本框)或textarea的黄色焦点框](http://www.cnblogs.com/niao/archive/2012/09/07/2674511.html)
```css
input,button,select,textarea{ outline:none;}
textarea{ resize:none;}
```

- [去掉chrome记住密码后自动填充表单的黄色背景](http://www.tuicool.com/articles/EZ777n )


---
clearfix

用法:在浮动元素的父云素上添加class=”demo clearfix”。
```css
方法1:
.clearfix{overflow:auto;_height:1%}

方法2:
.clearfix{overflow:hidden;_zoom:1;}
```
[http://www.daqianduan.com/3606.html](http://www.daqianduan.com/3606.html)

---
```
首字下沉
要实现类似word中首字下沉的效果可以使用以下代码

element:first-letter{
  float:left;
  color:green;
  font-size:30px;
}
```

---

让 chrome 支持小于 12px 的字体
```
#box{
  font-size: 8px;
  -webkit-text-size-adjust: none;
}
/* 但是，上面这个方法 chrome27 以后就不能用了。但我们可以用 css3 解决这个问题 */
#box{
  font-size: 12px;
  -webkit-transform: scale(0.75);
}
```

---

css变量
```
/* 将变量声明到全局 */
: root {
  --theme_color: red
}

/* 使用变量，参数2为当未找到变量--theme_color时所使用*/
body {
  color: var (--theme - color, '#000')
}

/* 将变量声明到局部, 只能在elem的子节点中使用*/
.selector {
  --color: black
}
.selectorspan {
  color: var (--color)
}

```

---

Javascript如何操作css变量
```
// 操作全局变量
document.documentElement.style.setProperty('--theme_color', 'blue');

// 操作局部变量，如果有两个selector，那么现在只设置了第一个的selector，不影响第二个selector的变量
document.querySelectorAll(selector)[0].style.setProperty('--color', 'blue');
```
---
计算函数
```
注意，减号、加号运算符首尾必须要有空格
.selector {  width: calc(100% / 3 * 2 - 5px + 10px)}
```
---
字体大小根据不同视口进行放大缩小调整
```
:root {  font-size: calc(2vw + 1vh)}body {  font-size: 1rem}
```
---
左右滑动
```
.scroll-x {  display: flex;  width: auto;  overflow-x: auto;  -webkit-overflow-scrolling: touch}.scroll-x > .scroll-x-item {  flex-shrink: 0;  margin-right: .5rem}
```

---
- seperate-table
```css
.tab{border-collapse:separate;border:1px solid #e0e0e0;}
.tab th,.tab td{padding:3px;font-size:12px;background:#f5f9fb;border:1px solid;border-color:#fff #deedf6 #deedf6 #fff;}
.tab th{background:#edf4f0;}
.tab tr.even td{background:#fff;}
```
```html
<table class="tab" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <th>111</th>
        <td>222</td>
    </tr>
    <tr>
        <th>111</th>
        <td>222</td>
    </tr>
</table>
```

---
- min-height: 最小高度兼容代码
```css
.minheight500{min-height:500px;height:auto !important;height:500px;overflow:visible;}
```
---
- 鼠标不允许点击
```css
cursor:not-allowed;
```
---
- mac font: osx平台字体优化
```css
font-family:"Hiragino Sans GB","Hiragino Sans GB W3",'微软雅黑';
```

---
- 文字过多后显示省略号
```css
.ellipsis,.ell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
```

---

- title 换行
```html
&#13;
```

---
- 关闭 x 符号
```html
&#215;
```
---

- 投影
```css
.b{box-shadow:inset 1px -1px 0 #f1f1f1;text-shadow:1px 1px 0px #630;}
filter:progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr='#99000000',endColorstr='#99000000');background:rgba(0,0,0,.6);

background:rgba(0,0,0,0.5);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#50000000',endColorstr='#50000000')\9;
```
---

阻止默认事件
```css
pointer-events:none;
```

---
去掉输入框聚焦时候的白色背景
```css
-webkit-user-modify: read-write-plaintext-only;
```

---
- [input:focus时input不随软键盘升起而抬高的情况](http://www.cnblogs.com/hongru/archive/2013/02/06/2902938.html)
```css
 :focus{-webkit-tap-highlight-color:rgba(255, 255, 255, 0);
 -webkit-user-modify:read-write-plaintext-only;}
```

---
- 变灰 gray
```css
html{
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
    filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    -webkit-filter: grayscale(1);
}
```
---
- firefox 阻止选中
```css
-moz-user-focus:ignore;-moz-user-input:disabled;-moz-user-select:none;
```
---
- 箭头
```css
display:block;border:solid transparent;line-height: 0;width:0; height:0;border-top:solid #0288ce;border-width:8px 6px 0 6px;

border-style:solid; border-width:7px; border-color:transparent transparent transparent #ff7020;
position:absolute;top: 0;left: 0;border-width:20px;border-style:solid;border-color:#d1ddde transparent transparent #d1ddde;
```
---

-九宫格
```css
<style>
.block {
    padding-top: 30%;
    margin-top: 3%;
    border-radius: 10%;
    background-color: orange;
    width: 30%;
}
.container-flex2  {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
<body>
   <div class="container-flex2">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
    </div>
</body>
```

---

- 取消textarea右下角可拖动手柄
```css
resize:none
```
---
- 取消chrome form表单的聚焦边框
```css
input,button,select,textarea{outline:none}
textarea{resize:none}
```
---
- 取消a链接的黄色边框
```css
a{-webkit-tap-highlight-color:rgba(0,0,0,0);}
```
---
- 取消input,button焦点或点击时蓝色边框
```css
input{outline:none;}
```
---
- 取消chrome 搜索x提示
```css
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
    display: none;
}
```
---

```
- 手机版本网页a标记虚线框问题
```css
a:focus {outline:none;-moz-outline:none;}

---
```
- 焦点去除背景
```css
-webkit-tap-highlight-color:rgba(255, 255, 255, 0);
-webkit-tap-highlight-color:transparent;  // i.e. Nexus5/Chrome and Kindle Fire HD 7''

---
```
- placeholder占位符颜色自定义
```css
input:-moz-placeholder {color: #369;}
::-webkit-input-placeholder {color:#369;}
```

---
- [IOS 禁用高亮](http://hi.barretlee.com/2014/03/31/tap-highlight-in-webview/)
```css
-webkit-tap-highlight-color:rgba(255,0,0,0.5);-webkit-tap-highlight-color:transparent; /* For some Androids */
```
---

- IOS iframe 滚动 [滚动回弹特效](http://www.cnblogs.com/flash3d/archive/2013/09/28/3343877.html)
```css
-webkit-overflow-scrolling:touch;overflow-y:scroll;
```

---
- [禁止选中文本](http://www.qianduan.net/introduce-user-select/)
```css
-moz-user-select:none;
-webkit-user-select:none;
-ms-user-select:none;
user-select:none;
---
```
- [模糊(毛玻璃)效果1](http://www.zhangxinxu.com/wordpress/2013/11/%E5%B0%8Ftip-%E4%BD%BF%E7%94%A8css%E5%B0%86%E5%9B%BE%E7%89%87%E8%BD%AC%E6%8D%A2%E6%88%90%E6%A8%A1%E7%B3%8A%E6%AF%9B%E7%8E%BB%E7%92%83%E6%95%88%E6%9E%9C/)
- [模糊(毛玻璃)效果2](http://mao.li/css3-blur-filter-pratice/)
- [模糊(毛玻璃)逼真效果](http://codepen.io/ariona/pen/geFIK)
```css
.blur {    
    -webkit-filter: blur(10px); /* Chrome, Opera */
       -moz-filter: blur(10px);
        -ms-filter: blur(10px);    
            filter: blur(10px);    
}
```
```html
<img src="mm1.jpg" />
<img src="mm1.jpg" class="blur" />
```

---
- 显示旋转加载图片，[下拉加载数据](https://github.com/chalecao/chale/blob/master/iscroll.js)
```css
#pullDown .pullDownIcon{display:inline-block;vertical-align:middle;width:40px;height:40px;background:url(https://github.com/chalecao/chale/blob/master/pull-icon%402x.png) 0 0 no-repeat;-webkit-background-size:40px 80px;background-size:40px 80px;-webkit-transition-property:-webkit-transform;-webkit-transition-duration:250ms}
#pullDown .pullDownIcon{-webkit-transform:rotate(0deg) translateZ(0)}
#pullDown .pullDownLabel{display:inline-block;vertical-align:middle;margin-left:5px;}
#pullDown.flip .pullDownIcon{-webkit-transform:rotate(-180deg) translateZ(0)}
#pullDown.loading .pullDownIcon{background-position:0 100%;-webkit-transform:rotate(0deg) translateZ(0);-webkit-transition-duration:0ms;-webkit-animation-name:loading;-webkit-animation-duration:2s;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:linear}
@-webkit-keyframes loading{
    from{-webkit-transform:rotate(0deg) translateZ(0)}
    to{-webkit-transform:rotate(360deg) translateZ(0)}
}

```

```html
<div id="pullDown" class="none loading">
    <span class="pullDownIcon"></span><span class="pullDownLabel">正在载入中...</span>
</div>
```

---
- 类似Iphone相册标题吸顶
```
<ul class="sticky-list">
  <!-- n个sticky-item -->
  <li class="sticky-item">
    <div class="title">2018年8月1日</div>
    <ul class="photo-list">
      <!-- n个photo-item -->
      <li class="photo-item">
        <img src="timg.jpg">
      </li>
    </ul>
  </li>
</ul>

.sticky-list {
  .sticky-item {
    .title {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      padding: .5rem;
      background-color: #fff;
    }
  }
  .photo-list {
    display: flex;
    flex-wrap: wrap;
    padding: .5rem;
    padding-bottom: 0;
    .photo-item {
      flex-basis: 19%;
      margin-right: 1%;
      margin-bottom: 1%;
      &:last-child {
        margin-right: 0;
      }
      img {
        display: block;
        width: 100%;
      }
    }
  }
}

---
- 硬件加速(写transition、animation时，请用transform代替left、top等属性，从而使动画更流畅)
```
transform: translateZ(0)
```
---
- 用户点击反馈
```
.btn:active {
  opacity: .7;
  /* background-color: #f1f1f1 */
}
```

---
```
- 移动端屏幕旋转时，字体大小不改变
```
html, body, form, p, div, h1, h2, h3, h4, h5, h6 {
 -webkit-text-size-adjust: 100%;
 -ms-text-size-adjust: 100%;
 text-size-adjust: 100%
}
```

---
- Animation动画结束时，保持该状态不变
```
animation-fill-mode: forwards;
```

---
- 改变input光标颜色
```
.input {
  caret-color: red
}
```

---
- 手机多终端适配 media query[web app iphone4 iphone5 iphone6 响应式布局 适配代码](http://club.zoomla.cn/PItem?id=12594)
```css
@media (device-height:480px) and (-webkit-min-device-pixel-ratio:2){/* 兼容iphone4/4s */
    .class{}
}
@media (device-height:568px) and (-webkit-min-device-pixel-ratio:2){/* 兼容iphone5 */
    .class{}
}
@media (device-height:667px) and (-webkit-min-device-pixel-ratio:2){/* 兼容iphone6 */
    .class{}
}
@media (device-height:736px) and (-webkit-min-device-pixel-ratio:2){/* 兼容iphone6 Plus */
    .class{}
}
```

---
- 横竖屏匹配
```
/* 竖屏时样式 */
@media all and (orientation:portrait) {
  body::after {
      content: '竖屏'
    }
}

/* 横屏时样式 */
@media all and (orientation:landscape) {
    body::after {
      content: '横屏'
    }
}
```

---
- 屏蔽苹果浏览器对数字的识别[Meta标签中的format-detection属性及含义](http://blog.sina.com.cn/s/blog_51048da70101cgea.html)
```html
<meta content="telephone=no" name="format-detection">
```

---
- 移除HTML5 input在type="number"时的上下小箭头
  - 在chrome下：
  ```css
    input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{
        -webkit-appearance: none !important;
        margin: 0; 
    }
  ```
  - Firefox下：
  ```css
    input[type="number"]{-moz-appearance:textfield;}
  ```
    
  - 第二种方案：
    - 将type="number"改为type="tel"，同样是数字键盘，但是没有箭头。
    

---
- [CSS判断横屏竖屏](http://www.w3cways.com/1772.html)
```css
@media screen and (orientation: portrait) {
  /*竖屏 css*/
} 
@media screen and (orientation: landscape) {
  /*横屏 css*/
}
```

---
//判断手机横竖屏状态：
```javascript
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        if (window.orientation === 180 || window.orientation === 0) { 
            alert('竖屏状态！');
        } 
        if (window.orientation === 90 || window.orientation === -90 ){ 
            alert('横屏状态！');
        }  
    }, false); 
//移动端的浏览器一般都支持window.orientation这个参数，通过这个参数可以判断出手机是处在横屏还是竖屏状态。
```
---
ram适配公式:
```javascript
var PAGE_MAX_WIDTH = 1280,
    BASE_FONT_SIZE = 50;
(function() {
    function n() {
        e.fontSize = Math.min(window.innerWidth / PAGE_MAX_WIDTH * BASE_FONT_SIZE, BASE_FONT_SIZE) + "px"
    }
    var e = document.documentElement.style;
    window.addEventListener("load", n),
    window.addEventListener("resize", n),
    n();
}());
```




---

高度Auto如何全屏居中
```

<div class="dialog-wrapper box box-center">
  <div class="dialog-content">我是内容</div>
</div>


.dialog-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  z-index: 100
}

.dialog-content {
  background-color: #fff
}
```
---
左边固定宽度，右边自适应
```

<div class="item box">
  <div class="left"></div>
  <div class="right box-1"></div>
</div>


.item .left {
  width: 50rem;
}
```
---
Scroll-X
```

<div class="scroll-x">
  <div class="scroll-item"></div> * n
</div>


.scroll-x {
  display: flex;
  width: auto;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  height: 55px;
  padding: 15px;
}

.scroll-item {
  width: 55px;
  flex-shrink: 0;
  margin-right: 10px;
  background-color: blueviolet;
}
```

```
顶角贴纸效果
有时候我们会有这样的需求，在一个列表展示页面，有一些列表项是新添加的、或者热度比较高的，就会要求在其上面添加一个贴纸效果的小条就像hexo默认博客的fork me on github那个效果一样，如下图。 贴纸效果

接下来我们开始一步步完成最左边的这个效果

html

<div class="wrap">
  <div class="ribbon">
    <a href="#">Fork me on GitHub</a>
  </div>
</div>
css

/* 外层容器几本设置  */
.wrap{
  width: 160px;
  height:160px;
  overflow:hidden;
  position: relative;
  background-color: #f3f3f3;
}

.ribbon{
  background-color: #a00;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  /* shadom */
  -webkit-box-shadow: 0 0 10px #888;
  -moz-box-shadow: 0 0 10px #888;
  box-shadow: 0 0 10px #888;
  /* rotate */
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  /* position */
  left: -50px;
  top: 40px;
}

.ribbon a{
  border: 1px solid #faa;
  color: #fff;
  display: block;
  font: bold 81.25% 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 1px 0;
  padding: 10px 50px;
  text-align: center;
  text-decoration: none;
  /* shadow */
  text-shadow: 0 0 5px #444;
}

```























---
```html

移动端配置项
1. Viewport
<!-- 让页面宽度等于设备宽度，缩放比例为1，禁止用户缩放网页 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<!-- 针对一些不识别viewport的浏览器，如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 针对微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
不设置的话，相当于用手机访问PC端页面一样，无初始缩放和页面宽度

2. Apple设备使用Web App模式（一般用于SPA应用，因为如果在里面点击还是跳转其他链接的话，还是会从Safari打开的）
<!-- 设置Web应用是否以全屏模式运行 -->
<meta name="apple-mobile-web-app-capable" content="yes">
<!-- 设置状态栏（屏幕顶部栏）的样式，default为白色，black为黑色，black-translucent为透明 -->
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<!-- 设置添加到主屏幕后的图标 -->
<link rel="apple-touch-icon" href="xxx.png">
<!-- 设置启动动画，避免加载时出现白屏 -->
<link rel="apple-touch-startup-image" href="xxx.png">
<!-- 设置添加到主屏幕后的标题 -->
<meta name="apple-mobile-web-app-title" content="标题">
在Safari浏览器点击分享按钮-添加到主屏幕，然后在桌面打开

3. 强制浏览器全屏(UC/QQ)
<!-- UC强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- UC强制全屏 --> 
<meta name="full-screen" content="yes">
<!-- UC应用模式 --> 
<meta name="browsermode" content="application">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
就是浏览器全屏，隐藏浏览器上下的状态栏

4. 忽略
<!-- 忽略网页自动识别数字为电话号码 -->
<meta name="format-detection" content="telephone=no">
<!-- 忽略网页自动识别邮箱账号 -->
<meta name="format-detection" content="email=no">
某些浏览器识别成功之后会将号码或者邮箱转换成a标签

5. Windows Phone点击无阴影
<meta name="msapplication-tap-highlight" content="no">
类似于css的-webkit-tap-highlight: transparent

6. 清除浏览器缓存
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
手机页面通常在第一次加载后会进行缓存，然后每次刷新会使用缓存而不是去重新向服务器发送请求。如果不希望使用缓存可以设置no-cache

HTML项
1. 调用系统功能
<!-- 拨号 -->
<a href="tel:10086">打电话给: 10086</a>
<!-- 短信 -->
<a href="sms:10086">发短信给: 10086</a>
<!-- 邮件 -->
<a href="mailto:839626987@qq.com">发邮件给：839626987@qq.com</a>
<!-- 选择照片或者拍摄照片 -->
<input type="file" accept="image/*">
<!-- 选择视频或者拍摄视频 -->
<input type="file" accept="video/*">
<!-- 多选 -->
<input type="file" multiple>
2. 取消Input在Apple设备中，英文首字母默认大写
<input autocapitalize="off" autocorrect="off">
3. :active伪类失效
<!-- 注册一个空的touchstart事件 -->
<body ontouchstart=""></body>
4. 唤醒App
<a href="weixin://">打开微信</a>
让Android或者Ios开发者提供一个App协议给你就可以了，让人尴尬的是，我们不知道用户到底有没有安装此App应用，所以需要Javascript来配合，当用户已安装直接跳转到App，没有安装跳到下载地址，详情在本文中的Javascript项
```
```css
样式项
1. 去除某些区域点击的时候会出现阴影
a, button, input, img, select, textarea {
  -webkit-tap-highlight-color: transparent
}
2. 禁止用户长按选中、复制文本
.text {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none
}
3. 禁止用户长按出现菜单栏
a, img {
  -webkit-touch-callout: none
}
4. 流畅滚动（一般用于overflow: scroll之后出现滚动不流畅的情况）
.scroll {
  -webkit-overflow-scrolling: touch
}
5. 改变输入框placeholder的颜色值
::-webkit-input-placeholder { /* WebKit browsers */ color: #999; }
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ color: #999; }
::-moz-placeholder { /* Mozilla Firefox 19+ */ color: #999; }
:-ms-input-placeholder { /* Internet Explorer 10+ */ color: #999; }
input:focus::-webkit-input-placeholder{ color:#999; }
6. 修改表单元素的默认样式
input, button, select, textarea {
  border: none;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none
}
checkbox也可以写成switch组件，点击查看switch组件(https://www.jianshu.com/p/102bc25d44b3)

7. 多行文本超出显示省略号
/* 超出n行时显示省略号 */
.hide-text-n {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: n;
  -webkit-box-orient: vertical
}
8. css3启用硬件加速
写transition、animation时，请用transform代替left、top等属性，从而使动画更流畅

.cube {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0)
}
9. 解决transition闪屏
.cube {
  -webkit-transform-style: preserve-3d; 
  -webkit-backface-visibility: hidden; 
  -webkit-perspective: 1000
}
10. 旋转屏幕时字体大小不改变
html, body, form, p, div, h1, h2, h3, h4, h5, h6 {
 -webkit-text-size-adjust: 100%;
 -ms-text-size-adjust: 100%;
 text-size-adjust: 100%
}
11. 某些Android机圆角失效
.radius {
  background-clip: padding-box
}
12. select下拉选择设置右对齐
select option {
  direction: rtl
}
13. 部分机型input的type为search时，自带close按钮的样式修改方案
.search::-webkit-search-cancel-button {
   display: none 
}
14. 使用rem单位
:root {
  font-size: 10px
}

body {
  font-size: 1.4rem
}

@media screen and (max-width: 320px) {
  :root {
    font-size: 8px
  }
}
1rem = 1 * 根元素的font-size值，因此这里的body font-size为14px，以后要修改font-size，直接修改根元素的就行啦，牵一发而动全身

15. 自定义滚动条样式
::-webkit-scrollbar /* 滚动条整体部分 */
::-webkit-scrollbar-thumb /* 滚动条内的小方块 */
::-webkit-scrollbar-track /* 滚动条轨道 */
::-webkit-scrollbar-button /* 滚动条轨道两端按钮 */
::-webkit-scrollbar-track-piece /* 滚动条中间部分，内置轨道 */
::-webkit-scrollbar-corner /* 边角，两个滚动条交汇处 */
::-webkit-resizer /* 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件 */
::-webkit-scrollbar修改浏览器滚动条样式，div::-webkit-scrollbar修改某个节点的滚动条样式

16. Android上去掉语言输入按钮
input::-webkit-input-speech-button {
  display: none
}
17. 监听屏幕旋转事件并且处理样式
/* 竖屏时样式 */
@media all and (orientation:portrait) {
  body::after {
      content: '竖屏'
    }
}
/* 横屏时样式 */
@media all and (orientation:landscape) {
    body::after {
      content: '横屏'
    }
}
```
