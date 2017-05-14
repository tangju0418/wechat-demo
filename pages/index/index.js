//index.js
//获取应用实例
const {
  connect
} = require('../../store/index.js');
const {
  wrapError,
  createError,
  isEmpty
} = require('../../core/common.js')
const {
  addToCart,
  plusToCart,
  minusFromCart,
  cleanCart
} = require('../../store/modules/cart.actions.js')
var app = getApp()
const pageConfig = {
  data: {
    tabs: ["点餐", "呼叫", "订单","我的"],
    activeIndex: 0,
    sliderOffset: 0,
    hiddenDetail:true,
    hiddenCart:true,
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
    grids:[
      {name:'催菜',icon:'ic_B'},
      {name:'加水',icon:'coffe'},
      {name:'加餐具',icon:'kuaicanwaimai'},
      {name:'打包',icon:'waimaicanyin'},
      {name:'呼叫服务',icon:'nv'},
      {name:'纸巾',icon:'zhijin'}
      ],
    currentType:1,
    currentTypeName:'',
    currentFood:'',
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
    that.setData({
        currentTypeName: that.data.lists[0].name
    });
  },
  tabClick: function (e) {
    this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
    })
  },
  selectType:function(e){
    this.setData({
        currentType: e.currentTarget.dataset.index,
        currentTypeName: e.currentTarget.dataset.name
    })
  },
  showDetail:function(e){
    console.log('当前事物',e.currentTarget.dataset.food)
    this.setData({
        hiddenDetail: false,
        currentFood: e.currentTarget.dataset.food
    })
  },
  hiddenbox:function(){
    this.setData({
        hiddenDetail: true,
    })
  },
  showCart(){
    const vm = this
    if(isEmpty(vm.data.cartItem) && this.data.hiddenCart){
      return;
    }else{
      this.setData({
        hiddenCart: !this.data.hiddenCart
      })
    }
  },

  currentAddToCart(e){
    this.addToCart(e)
    if(isEmpty(this.data.currentFood.Num)){
      this.data.currentFood.Num = 1
    }else{
      this.data.currentFood.Num = this.data.currentFood.Num + 1
    }
    this.setData({
        currentFood: this.data.currentFood
    })
  },
  currentMinusFromCart(e){
    this.minusFromCart(e)
    if(isEmpty(this.data.currentFood.Num)){
      this.data.currentFood.Num = 1
    }else{
      this.data.currentFood.Num = this.data.currentFood.Num - 1
    }
    this.setData({
        currentFood: this.data.currentFood
    })
  },
  commit(){
      wx.showModal({
        title: '提交订单',
        content: '正在使用中',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
  },
  calling(e){
    let name = e.currentTarget.dataset.call
    wx.showToast({
      title: '呼叫 "'+name+'" 成功,请稍后...',
      icon: 'success',
      duration: 2000
    })
  }
}

const mapStateToData = state => ({
  tableNum: state.table.Num,
  foods: state.order.Items,
  confirmOrder: state.order.confirmOrder,
  cart: state.cart.Items,
  ItemsCount: state.cart.Items.reduce((count, p) => {
        return count + (p.Num ? p.Num : 0)
      }, 0) ,
  ItemsTotalPrice:
      state.cart.Items ? state.cart.Items.reduce((count, p) => {
        return count + (p.Num ? p.Num : 0)*(p.DiscountedPrice ? p.DiscountedPrice : p.Price)
      }, 0) : 0,
  cartItem: state.cart.Items.filter(x => !isEmpty(x.Num))


})

const mapDispatchToPage = dispatch => ({
  addToCart: (args) => dispatch(addToCart(args)),
  plusToCart: (args) => dispatch(plusToCart(args)),
  minusFromCart: (args) => dispatch(minusFromCart(args)),
  cleanCart: () => dispatch(cleanCart())
})

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)
Page(nextPageConfig);
console.log('nextPageConfig', nextPageConfig)