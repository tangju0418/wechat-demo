// scan.js
const { connect } = require('../../store/index.js');
const {
  setTableNum
} = require('../../store/modules/tableNum.actions.js')
const {
  getToken,
  post
} = require('../../store/base/http.js')

const pageConfig = {
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  scan(){
    const vm = this
    wx.scanCode({
      success: (res) => {
        console.log('scan',res)
        let info = res.result.split('&')
        let guid = info[0].split('=')
        let num = info[1].split('=')
        console.log(guid[0],num[0])
        if(guid[0]=='guid' && num[0] == 'n'){
          vm.setTableNum(num[1])
          let url = '/passport/get-token/'+guid[1]
          getToken(url).then(function(response){
            console.log('token',response)
          })
        }else{
          wx.showModal({
            title: '扫二维码',
            content: '数据格式不正确',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        }
        
       
        // wx.redirectTo({
        //   url: `/pages/index/index`
        // })
      }
    }) 
  },
}

const mapStateToData = state => ({
  tableNum: state.table.Num,
})

const mapDispatchToPage = dispatch => ({
  setTableNum: (args) => dispatch(setTableNum(args))
})

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)
Page(nextPageConfig);
console.log('nextPageConfig', nextPageConfig)