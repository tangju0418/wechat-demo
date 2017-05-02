var Items = [
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
    ];

function _product(args){
    const record = Items.find(p => p.Id === args.Id)
    console.log('ADD_TO_CART', record)
    if(record) {
      if(!('Num' in record) || record.Num == ''){
        record.Num = 1
      }else{
        record.Num++
      }
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
      Items[index].Num = NaN
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
