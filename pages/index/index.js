var app = getApp();
// 页面通过getApp方法拿到appjs中的方法
Page({
  data:{
    swiperList:[],
    iconList:[]
  },
  onLoad:function(url){
    app.fetch("slides").then((res)=>{
      this.setData({
        swiperList:res.data
      })
    })
    app.fetch("categories").then((res) => {
      console.log(res)
      this.setData({
        iconList: res.data
      })
    })
  }
})