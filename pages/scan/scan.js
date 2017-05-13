// scan.js
Page({
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  scan(){
    wx.scanCode({
      success: (res) => {
        console.log('scan',res)
      }
    })
  }

})