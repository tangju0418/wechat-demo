//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tabs: ["点餐", "呼叫", "订单","我的"],
    activeIndex: 0,
    sliderOffset: 0,
    lists: [
            {name:'鲁菜1',nub:0},
            {name:'鲁菜2',nub:0},
            {name:'鲁菜3',nub:0},
            {name:'鲁菜4',nub:0},
            {name:'鲁菜5',nub:0},
            {name:'鲁菜6',nub:0},
            {name:'鲁菜7',nub:0},
            {name:'鲁菜8',nub:0},
            {name:'鲁菜3',nub:0},
            {name:'鲁菜4',nub:0},
            {name:'鲁菜5',nub:0},
            {name:'鲁菜6',nub:0},
            {name:'鲁菜7',nub:0},
            {name:'鲁菜8',nub:0},
        ],
    currentIndex:0,
    userInfo: {},
  },
  //事件处理函数
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    }
})
