// scan.js
const { connect } = require('../../store/index.js');
const {setTableNum} = require('../../store/modules/tableNum.actions.js')
const {getFoods} = require('../../store/modules/cart.actions.js')
const {setStartup} = require('../../store/modules/startup.actions.js')
const {getToken,post} = require('../../store/base/http.js')

const pageConfig = {
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const vm = this
    console.log(options)
    let guid = options.guid
    let num = options.n
    if (guid != null && num != null){
      console.log(guid, num)
      vm.setTableNum(num)
      let url = '/passport/get-token/' + guid
      vm.getData(url)

    }else{
      wx.showModal({
        title: '自动登录',
        content: '参数格式不正确,请重新获取餐厅信息',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }

  
  },
  scan(){
    const vm = this
    wx.scanCode({
      success: (res) => {
        console.log('scan',res)
        let patt = /^guid=\S+&n=\d+$/g
        if (patt.test(res.result)){
          let info = res.result.split('&')
          let guid = info[0].split('=')
          let num = info[1].split('=')
          console.log(guid[0], num[0])
          
          vm.setTableNum(num[1])
          let url = '/passport/get-token/' + guid[1]

    // let url = '/passport/get-token/DDEB9EBC-A2BB-4A11-924B-A9F118B4CA34'
          vm.getData(url)

        }else{
          wx.showModal({
            title: '扫码获取信息',
            content: '数据格式不正确',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        }

      }
    }) 
  },
  getData(url){
    const vm = this
    wx.showLoading({
      title: '加载中',
    })
    getToken(url).then(function (response) {
      console.log('token', response)
      vm.setStartup(response.Data.AccessToken)
      post('foods/list', {})
        .then(function (data) {
          vm.getFoods(data)
          wx.hideLoading()
        })
        .catch(function (error) {
          console.log('error', error)
          wx.hideLoading()
          wx.showModal({
            title: '菜品目录',
            content: error.message,
            showCancel: false
          })
        })
      wx.redirectTo({
        url: '/pages/index/index'
      })
    }).catch(function (error) {
      console.log('error', error)
      wx.showModal({
        title: '自动登录',
        content: error.message,
        showCancel: false
      })
    })
  }
}

const mapStateToData = state => ({
  tableNum: state.table.Num,
})

const mapDispatchToPage = dispatch => ({
  setTableNum: (args) => dispatch(setTableNum(args)),
  setStartup: (args) => dispatch(setStartup(args)),
  getFoods: (args) => dispatch(getFoods(args))
})

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)
Page(nextPageConfig);
console.log('nextPageConfig', nextPageConfig)