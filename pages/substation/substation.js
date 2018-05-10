const app=getApp()

Page({
  data:{

  },
  onLoad(option){
    var _this=this
    wx.request({
      url: 'https://api.imjad.cn/cloudmusic/?type=djradio&id='+option.id,
      dataType:'json',
      success(res){
        
      }
    })
  }
})