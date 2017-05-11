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
  Items:[]
}

const order = (state = initial, action) => {
  let renew = state
  console.log('order-redux:',action)
  switch (action.type) {
    case orderTypes.ADD_TO_ORDER:
        let arg = action.args
        renew = arg
        break;
    }
    if (renew != state)
        return updeep(renew, state)
    return state
}   


module.exports = {
  orderTypes,
  order
}
