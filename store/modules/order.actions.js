
const {
  orderTypes
} = require('./order.js')

const addToOrder = (args) =>{
    return (dispatch, getState) => {
        dispatch({type: orderTypes.ADD_TO_ORDER,args})
    }
}


module.exports = {
  addToOrder
}
