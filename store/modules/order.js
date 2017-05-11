const updeep = require('../libs/updeep.js');
const {
  wrapError,
  createError,
  isEmpty
} = require('../../core/common.js')
const orderTypes = {
  ADD_TO_ORDER: 'ADD_TO_ORDER'
}

const initial = {
  Items:[
        {Name:'爆炒腰花',Id:11,Price:28,Unit:'份'},
        {Name:'土豆烧牛肉',Id:12,Price:35,Unit:'份'},
        {Name:'青笋烧兔',Id:13,Price:30,Unit:'份'}
      ]
}

const order = (state = initial, action) => {
  let renew = state
  
  switch (action.type) {
    case orderTypes.ADD_TO_ORDER:
        let arg = action.args
        console.log('order-redux:',arg)
        renew = arg
        break;
    }
    console.log('提交订单',renew)
    if (renew != state)
        return updeep(renew, state)
    
    return state
}   


module.exports = {
  orderTypes,
  order
}
