// scan.js
const { connect } = require('../../store/index.js');
const {
  setTableNum
} = require('../../store/modules/tableNum.actions.js')
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
        vm.setTableNum(res)
        wx.redirectTo({
          url: '/pages/index/index'
        })
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