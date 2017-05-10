// order.js
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
const pageConfig = {
  data: {
    table:['梅','兰','竹','菊'],
    tableIndex:0,
    remark:['少辣','多辣','少盐','多盐','不要蒜','不要香菜','输入更多'],
    remarkIndex:0,
    showPicker:true,
  },
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
   
  },
  bindTableChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      tableIndex: e.detail.value
    })
  },
  bindRemarkChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    if (e.detail.value == 6){
      this.setData({
        showPicker: false
      })
    }else{
      this.setData({
        remarkIndex: e.detail.value
      })
    }
    
  },
}

const mapStateToData = state => ({
  cart: state.cart.Items,
  ItemsCount: state.cart.Items.reduce((count, p) => {
    return count + (p.Num ? p.Num : 0)
  }, 0),
  ItemsTotalPrice:
  state.cart.Items ? state.cart.Items.reduce((count, p) => {
    return count + (p.Num ? p.Num : 0) * (p.DiscountedPrice ? p.DiscountedPrice : p.Price)
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