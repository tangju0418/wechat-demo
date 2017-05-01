var Items = [];

function _product(args){
    const record = Items.find(p => p.Id === args.Id)
    console.log('ADD_TO_CART', record)
    if(!record) {
      Items.push({
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
}
function _plus_to_product(args){
    const record = Items.find(p => p.Id === args.Id)
    if(record) {
        record.Num++
    }
}
function _minus_from_product(args){
    const record = Items.find(p => p.Id === args.Id)
    if(record.Num > 1) {
      record.Num--
    }else if(record){
      let index = 0
      for (var i = 0; i < Items.length; i++) {
        if(Items[i].Id == args.Id){
          index = i
          break;
        }
      }
      state.Items.splice(index,1)
    }
}
function _clean_product(){
    Items = []
}

module.exports = {
  Items: Items,
  _product: _product,
  _plus_to_product: _plus_to_product,
  _minus_from_product: _minus_from_product,
  _clean_product: _clean_product
}
