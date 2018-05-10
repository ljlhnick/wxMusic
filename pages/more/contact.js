Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },


  getQq(){
    wx.showToast({
      title:'qq号是1903271712',
      icon: 'success',
      mask: 'true',
      duration:3000
    })
  },
  getWechat() {
    wx.showToast({
      title: '微信号是l520ljlh520',
      icon:'success',
      mask:'true',
      duration: 3000
    })
  }, 
  getWeibo() {
    wx.showToast({
      title: '微博名是：就是个123456',
      icon: 'success',
      mask: 'true',
      duration: 3000
    })
  },
  getBlog() {
    wx.showToast({
      title: '博客地址是ljlhnick.top',
      icon: 'success',
      mask: 'true',
      duration: 3000
    })
  },
  getGithub() {
    wx.showToast({
      title: 'github账号是ljlhnick',
      icon: 'success',
      mask: 'true',
      duration: 3000
    })
  }, 
  getPixiv() {
    wx.showToast({
      title: '插画项目地址是http://39.107.119.89:8088/',
      icon: 'success',
      mask: 'true',
      duration: 3000
    })
  }

})