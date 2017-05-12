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
  switch (action.type) {
    case orderTypes.ADD_TO_ORDER:
        let arg = action.args
        console.log('order-redux:',arg)
        renew.Items = arg
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
