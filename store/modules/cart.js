const updeep = require('../libs/updeep.js');
const cartTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  PLUS_TO_CART:'PLUS_TO_CART',
  MINUS_FROM_CART:'MINUS_FROM_CART',
  CLEAN_CART: 'CLEAN_CART'
}

const initial = {
  Items:[]
}

const cart = (state = initial, action) => {
  let record = ''
  let renew = state
  console.log('购物车：',action)
  const args = action.args
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
        record = renew.Items.find(p => p.Id === args.Id)
        console.log('ADD_TO_CART', record)
        if(!record) {
            renew.Items.push({
                Id: args.Id,
                Name: args.Name,
                TypeId: args.TypeId,
                Price: args.Price,
                DiscountedPrice: args.DiscountedPrice,
                ImageUrl: args.ImageUrl,
                Remark: args.Remark,
                StoreId: args.StoreId,
                Unit: args.Unit,
                Num: 1,
            })
        }else{
            record.Num++
        }
        break;
    case cartTypes.PLUS_TO_CART:
        record = renew.Items.find(p => p.Id === args.Id)
        if(record) {
            record.Num++
        }
        break;
    case cartTypes.MINUS_FROM_CART:
        record = renew.Items.find(p => p.Id === args.Id)
        if(record.Num > 1) {
            record.Num--
        }else if(record){
        let index = 0
        for (var i = 0; i < renew.Items.length; i++) {
            if(renew.Items[i].Id == args.Id){
            index = i
            break;
            }
        }
            renew.Items.splice(index,1)
        }
        break;
    case cartTypes.CLEAN_CART:
        renew.Items = []
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
