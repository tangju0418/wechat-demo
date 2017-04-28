//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tabs: ["点餐", "呼叫", "订单","我的"],
    activeIndex: 0,
    sliderOffset: 0,
    lists: [
            {name:'鲁菜1',nub:1},
            {name:'鲁菜2',nub:2},
            {name:'鲁菜3',nub:3},
            {name:'鲁菜4',nub:4},
            {name:'鲁菜5',nub:5},
            {name:'鲁菜6',nub:6},
            {name:'鲁菜7',nub:7},
            {name:'鲁菜8',nub:8},
            {name:'鲁菜3',nub:9},
            {name:'鲁菜4',nub:10},
            {name:'鲁菜5',nub:11},
            {name:'鲁菜6',nub:12},
            {name:'鲁菜7',nub:13},
            {name:'鲁菜8',nub:14},
        ],
    currentType:1,
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
        })
    },
  selectType:function(e){
    console.log('hiojo',e.currentTarget.dataset)
    this.setData({
            currentType: e.currentTarget.dataset.index
        });
  },
})
