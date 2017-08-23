(function(){

// 初始化方法
var d = new Date();  // 根据当前时间创建Date实例
d = new Date(date.getTime() - 1000);  // 根据传入的毫秒...
d = new Date(2014, 2, 25);  // 根据传入的年、月、日...，具体为 new Date(年, 月, 日 [, 时, 分, 秒, 毫秒 ])
                               // 可参考https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/Date

// 从Date 实例上获取各种信息
console.log(d - 0);  // 输出毫秒
console.log(d.getTime());  // 输出毫秒，从 1970年至今的毫秒数

// 获取时间信息
var year = d.getFullYear(); // 输出完整年份，如2014
var month = d.getMonth();  // 输出月份（2），从0开始计数，0代表1月，1代表2月...
var date = d.getDate(); // 输出当前日期（25），从1开始计数,
var day = d.getDay(); // 获取当前星期几（2），从0开始计数，0为星期天，1为星期一。。。wtf！！

var hours = d.getHours();  // 返回小时，从0开始计数，0（午夜）～23（晚上11点）
var minutes = d.getMinutes();  // 返回秒钟，从0开始计数，0～59
var seconds = d.getSeconds();  // 返回秒，从0开始计数，0～59
var millSeconds = d.getMilliseconds();  // 返回毫秒，从0开始计数，0～999

// 设置时间信息
d.setTime(new Date() - 0);  // 通过毫秒数设置
d.setFullYear(2014); //
d.setMonth(2);  //
d.setDate(25);  //
d.setDay(2);  //

// 其他方法
d.toString();  // 类似 Tue Mar 25 2014 01:11:55 GMT+0800 (CST)
d.valueOf();  // 类似 1395680757843

})();