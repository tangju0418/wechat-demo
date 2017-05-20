const updeep = require('../libs/updeep.js');
const {
  wrapError,
  createError,
  isEmpty
} = require('../../core/common.js')
const cartTypes = {
  GET_FOODS: 'GET_FOODS',
  ADD_TO_CART: 'ADD_TO_CART',
  PLUS_TO_CART:'PLUS_TO_CART',
  MINUS_FROM_CART:'MINUS_FROM_CART',
  CLEAN_CART: 'CLEAN_CART'
}

const initial = {
  Items:[
      {Name:'北欧海鲜浓汤',Id:1,Price:20,Unit:'份'},
      {Name:'烧白',Id:2,Price:15,Unit:'份'},
      {Name:'水煮肉片',Id:3,Price:20,Unit:'份'},
      {Name:'剔骨肉',Id:4,Price:25,Unit:'份'},
      {Name:'糯米桂花藕片',Id:5,Price:28,Unit:'份'},
      {Name:'手撕鸡',Id:6,Price:30,Unit:'份'},
      {Name:'红烧肉',Id:7,Price:26,Unit:'份'},
      {Name:'红烧肥肠',Id:8,Price:27,Unit:'份'},
      {Name:'辣子鸡',Id:9,Price:25,Unit:'份'},
      {Name:'宫保鸡丁',Id:10,Price:20,Unit:'份'},
      {Name:'爆炒腰花',Id:11,Price:28,Unit:'份'},
      {Name:'土豆烧牛肉',Id:12,Price:35,Unit:'份'},
      {Name:'青笋烧兔',Id:13,Price:30,Unit:'份'},
    ]
}

const cart = (state = initial, action) => {
  let record = ''
  let renew = state
  console.log('cart-redux:',action)
  let args = ''
 
  switch (action.type) {
    case cartTypes.GET_FOODS:
      args = action.args.Data
      renew.Items = args
      break;
    case cartTypes.ADD_TO_CART:
        args = action.args.currentTarget.dataset.food
        record = renew.Items.find(p => p.Id === args.Id)
        console.log('ADD_TO_CART', record)
        if(record){
            if(isEmpty(record.Num)){
                record.Num = 1
            }else{
                record.Num++
            }
        }
        break;
    case cartTypes.PLUS_TO_CART:
        args = action.args.currentTarget.dataset.food
        record = renew.Items.find(p => p.Id === args.Id)
        if(record) {
            record.Num++
        }
        break;
    case cartTypes.MINUS_FROM_CART:
        args = action.args.currentTarget.dataset.food
        record = renew.Items.find(p => p.Id === args.Id)
        if(record.Num > 0) {
            record.Num--
        }
        // }else if(record){
        // let index = 0
        // for (var i = 0; i < renew.Items.length; i++) {
        //     if(renew.Items[i].Id == args.Id){
        //     index = i
        //     break;
        //     }
        // }
        //     renew.Items.splice(index,1)
        // }
        break;
    case cartTypes.CLEAN_CART:
        renew.Items.forEach(x=> x.Num = 0)
        break;
    }
    if (renew != state)
        return updeep(renew, state)
    return state
}   


module.exports = {
  cartTypes,
  cart
}
