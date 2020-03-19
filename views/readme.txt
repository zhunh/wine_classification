#单张图片练习根据图片所在文件夹生成酒名列表，并引入单独的缓存键名和文件夹名称。这三者定义为一个js文件引入到页面0319增加酒水介绍
例：
const wineList = ["懒虫银",...];
const history = "tequila_history"
const dirName = "龙舌兰"
const wineInfoList = {}

#图片匹配的页面区别在于引入的wineList不同, HTML页面图片路径匹配的文件夹名不一样，以及引入的酒水介绍列表不同
例
const wineInfoList = {
    "必富达":"Beefeater是伦敦塔守卫的昵称...",
}
const wineList = ["三得利六金酒",...];

#酒水介绍整理成json数组
