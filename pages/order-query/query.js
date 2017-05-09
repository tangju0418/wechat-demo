// index.js
var app = getApp()
Page({
  data:{
    userInfo:'',
    store:[
      { name: '布拉诺意大利餐厅' },
      { name: '布拉诺意大利餐厅' },
      { name: '布拉诺意大利餐厅' },
      { name: '布拉诺意大利餐厅' },
      { name: '布拉诺意大利餐厅' },
      { name: '布拉诺意大利餐厅' },
      { name: '布拉诺意大利餐厅' },
      { name: '布拉诺意大利餐厅' },
      { name: '布拉诺意大利餐厅' }
    ]
  },
  onLoad:function(options){
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

})