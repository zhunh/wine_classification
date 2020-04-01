# 单张图片练习
* 根据图片所在文件夹生成酒名列表，并引入单独的缓存键名和文件夹名称。这三者定义为一个js文件引入到页面
* 例：
```js
const wineList = ["懒虫银",...]; //图片名称列表
const history = "tequila_history"  //缓存键名
const dirName = "龙舌兰"  //图片路径
const wineInfoList = {}  //酒水介绍

const picType = '.png' //加入图片后缀设置参数，默认为jpg
```
# 图片匹配
* 页面区别在于引入的wineList不同, HTML页面图片路径匹配的文件夹名不一样，以及引入的酒水介绍列表不同
* 例：
```js
const wineInfoList = {
    "必富达":"Beefeater是伦敦塔守卫的昵称...",
}
const wineList = ["三得利六金酒",...];
```
# 酒水介绍整理成json数组
