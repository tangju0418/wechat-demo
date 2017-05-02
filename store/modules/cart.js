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
  console.log('购物车：',action)
  const args = action.args
  switch (action.type) {
    case cartTypes[ADD_TO_CART]:
        record = state.Items.find(p => p.Id === args.Id)
        console.log('ADD_TO_CART', record)
        if(!record) {
            state.Items.push({
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
        return state;
        break;
    case cartTypes[PLUS_TO_CART]:
        record = state.Items.find(p => p.Id === args.Id)
        if(record) {
            record.Num++
        }
        return state;
        break;
    case cartTypes[MINUS_FROM_CART]:
        record = state.Items.find(p => p.Id === args.Id)
        if(record.Num > 1) {
            record.Num--
        }else if(record){
        let index = 0
        for (var i = 0; i < state.Items.length; i++) {
            if(state.Items[i].Id == args.Id){
            index = i
            break;
            }
        }
            state.Items.splice(index,1)
        }
        return state;
        break;
    case cartTypes[CLEAN_CART]:
        state.Items = []
        return state;
        break;
    }
}   


module.exports = {
  cartTypes,
  cart
}
