// import { aurl, hy } from "./url.js";
// const tequila = ["懒虫银","豪帅金","豪帅银","阿卡威塔金","阿卡威塔银","懒虫金","雷博士","奥美加金","奥美加银"];
// const whisky = ["加拿大俱乐部","占边(美国)","四玫瑰(美国)","威特基(美国)","威雀(苏格兰)","尊美醇(爱尔兰)","布什米尔(爱尔兰)","帝王白方(苏格兰)","杰克丹尼(美国)","格兰特(苏格兰)","格兰菲迪(苏格兰)","欧肯特轩(苏格兰)","添宝15年(苏格兰)","百龄坛12年(苏格兰)","百龄坛17年(苏格兰)","百龄坛特纯(苏格兰)","皇冠(加拿大)","皇家礼炮(苏格兰)","红方(苏格兰)","芝华士12年(苏格兰)","芝华士18年(苏格兰)","顺风(苏格兰)","马谛氏尊者(苏格兰)","麦卡伦(苏格兰)","黑方(苏格兰)"]
// const history = "whisky_history"
// 洗牌算法
if (!Array.prototype.derangedArray) {
  Array.prototype.derangedArray = function() {
      for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
      return this;
  };
}
wines = [...wineList]
let random = [...wines].derangedArray() 
// console.log(wines)
// console.log(random)

if(localStorage.getItem(history)==null){
    let tmp = []
    localStorage.setItem(history,JSON.stringify(tmp))
}

function aurl(dir,imgName){
    return "./"+dir+"/"+ imgName +".jpg"
}

function putVal(val){
    let tmp = getVal(history)
    console.log(tmp)
    if(isExist(tmp,val.tar)){
        console.log("already exist.")
    }else{
        tmp.push(val)
    }
    localStorage.setItem(history,JSON.stringify(tmp))
    console.log(tmp)
    
}

function getVal(item){
    return JSON.parse(localStorage.getItem(item))
}

function isExist(arr, key){
    let kl = arr.find(item => {
        return item.tar === key //
    })
    return (kl == undefined)?false:true
}

new Vue({
  el: '#app',
  data: function() {
    return { 
      thisIndex:1,
      imgUrl:aurl(dirName,wines[0]),
      curImg:wines[0],
      answerd:false,
      total:0,
      sucNum:0,
      wroNum:0,
      unDo:0,
      info:"",
      wines:wines,
      random:random
    }
  },
  methods:{
    //下一题
    next(){
      this.info = ""
      this.clearOptStyle()
      curIndex = this.wines.findIndex(item=>{
        return item == this.curImg
      })
      if(this.wines.length - 1>curIndex){
        //进入下一题
        this.imgUrl = aurl(dirName,this.wines[curIndex+1])
        this.curImg = this.wines[curIndex+1]
        this.thisIndex += 1
      }else{
        this.info = "已经是最后一题啦"
      }
      this.checkIsAnswered()
    },
    //上一题
    last(){
      this.info = ""
      this.clearOptStyle()
      curIndex = this.wines.findIndex(item=>{
        return item == this.curImg
      })
      if(curIndex>0){
        //进入上一题
        this.imgUrl = aurl(dirName,this.wines[curIndex-1])
        this.curImg = this.wines[curIndex-1]
        this.thisIndex -= 1
      }else{
          this.info = "已经是第一题啦"
      }
      this.checkIsAnswered()
    },
    // 配对
    match(item){
        // this.clearOptStyle()
        if(this.answerd){
            return
        }
        this.answerd = true
        let curOpt = this.$refs[item][0]
        // let preBtn = event.currentTarget
        // preBtn += "jaja"
        // console.log(event.currentTarget)
        if(curOpt.innerText==this.curImg){
            curOpt.setAttribute("class","btn btn-success spanBtn")
            this.info = "答对了~"
        }else{
            curOpt.setAttribute("class","btn btn-danger spanBtn")
            this.tagAnswer()
            this.info = "答错了~"
        }
        putVal({"tar":this.curImg,"option":curOpt.innerText})
    },
    // 清除标记样式
    clearOptStyle(){
        this.answerd = false
        let that = this
        that.wines.forEach((item,index)=>{
            that.$refs[item][0].setAttribute("class","btn btn-default spanBtn")
        })
    },
    // 标出正确答案
    tagAnswer(){
        this.$refs[this.curImg][0].setAttribute("class","btn btn-success spanBtn")
    },
    checkIsAnswered(){
        let tmp = getVal(history)
        //本题已经回答过
        if(isExist(tmp,this.curImg)){
          let kl = tmp.find(item => {
              return item.tar === this.curImg 
          })    
          this.answerd = true
        //回答正确 
          if(kl.tar === kl.option){
            this.$refs[kl.tar][0].setAttribute("class","btn btn-success spanBtn")
            return
          }    
          this.$refs[kl.tar][0].setAttribute("class","btn btn-success spanBtn")
          this.$refs[kl.option][0].setAttribute("class","btn btn-danger spanBtn")
        }        
    },
    reDo(){
        localStorage.removeItem(history)
        window.location.reload()
    },
    scoreCalc(){
      // 初始化
      this.sucNum = 0
      this.wroNum = 0

        let tmp = getVal(history)
        this.total = this.wines.length
        // 已答题目中，分离答对和答错
        for(let i = 0;i<tmp.length;i++){
            if(tmp[i].tar==tmp[i].option){
                this.sucNum++
            }else{
                this.wroNum++
            }
        }
        this.unDo = this.total - this.sucNum -this.wroNum
        // return total, suc, wro
    }
  },
  created(){

  },
  mounted(){
    this.checkIsAnswered()
  }
})