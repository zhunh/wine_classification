// 图片匹配逻辑
// 依次引入酒名wineList、酒水介绍wineInfoList
// const wineList = ["加拿大俱乐部","占边(美国)","四玫瑰(美国)","威特基(美国)","威雀(苏格兰)","尊美醇(爱尔兰)","布什米尔(爱尔兰)","帝王白方(苏格兰)","杰克丹尼(美国)","格兰特(苏格兰)","格兰菲迪(苏格兰)","欧肯特轩(苏格兰)","添宝15年(苏格兰)","百龄坛12年(苏格兰)","百龄坛17年(苏格兰)","百龄坛特纯(苏格兰)","皇冠(加拿大)","皇家礼炮(苏格兰)","红方(苏格兰)","芝华士12年(苏格兰)","芝华士18年(苏格兰)","顺风(苏格兰)","马谛氏尊者(苏格兰)","麦卡伦(苏格兰)","黑方(苏格兰)"]

// 洗牌算法
if (!Array.prototype.derangedArray) {
    Array.prototype.derangedArray = function() {
        for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
        return this;
    };
  }
// 乱序
let urls = [...wineList].derangedArray() 
// let urls = [...wineList]
// console.log(wineList)
// console.log(urls)
// jq
$(function(){
    new Vue({
        el:"#app",
        data: function(){
            return {
                option:"", //当前选中的选项
                counter:0, //匹配正确计数
                winesBtn:wineList, //选项列表
                winesPic: urls,  //图片列表，和选项列表顺序不一样
                wineInfoList:wineInfoList,
            }
        },
        computed:{
            //当前显示酒水介绍
            wineinfo(){
                if(wineInfoList[this.option]!=undefined){
                    return wineInfoList[this.option]
                }
                return "暂无介绍"
            }
        },
        methods:{
            // 选择酒名
            optClick(item){
                this.option = item
                $(".alert-info").text(this.wineinfo)
                // console.log(item)
                // console.log(this.wineinfo)
            },
            // 选择图片
            picClick(item){
                console.log(item)
                // 未选择酒名
                if(this.option==""){
                    return
                }else{
                    // 判断图片和选项是否匹配
                    if(item.indexOf(this.option)!=-1){
                        $("#T").css("visibility","visible")
                        $("#T").fadeIn(600)
                        $("#T").fadeOut(600)
                        // 消失
                        $("#" + this.strHandle(this.option) + "btn").fadeOut("slow")
                        $("#" + this.strHandle(this.option)).fadeOut("slow")
                        // 计数
                        this.counter+=1
                        if(this.counter==this.winesBtn.length){
                            alert("恭喜通关！")
                        }
                    }else{
                        $("#x").css("visibility","visible")
                        $("#x").fadeIn(600)
                        $("#x").fadeOut(600)
                    }
                }
            },
            reDo(){
                window.location.reload()
            },
            // 字符串替换
            strHandle(str){
                let tmp =  str.replace('(',"_")
                return tmp.replace(")","_")
            },
            getData(){
                this.wineInfoList = wineInfoList
            }
        },
        watch:{
            "$route":"getData"
        },
        created(){

        }
    })
});