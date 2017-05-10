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

  },
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
   
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
//   addToCart: (args) => dispatch(addToCart(args)),
//   plusToCart: (args) => dispatch(plusToCart(args)),
//   minusFromCart: (args) => dispatch(minusFromCart(args)),
//   cleanCart: () => dispatch(cleanCart())
})

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)
Page(nextPageConfig);
console.log('nextPageConfig', nextPageConfig)