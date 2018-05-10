
const app=getApp()
Page({
  data: {
  },
  onLoad: function (option) {
    //console.log(option.s)
    var _this=this
    wx.request({
      url: 'https://api.imjad.cn/cloudmusic/?type=search&s='+option.s,
      dataType:'json',
      success(res){
        _this.setData({
          resultList: res.data.result.songs
        })
      }
    })
  }
})
