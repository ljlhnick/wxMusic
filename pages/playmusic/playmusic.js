const app=getApp()

Page({
  data:{

  },
  onLoad(option){
    var _this=this
   
    wx.request({
      url: 'https://api.imjad.cn/cloudmusic/?type=song&id='+option.id,
      dataType:'json',
      success(res){
        _this.setData({
          url:res.data.data[0].url
        })
      }
    })

    wx.request({
      url: 'https://api.imjad.cn/cloudmusic/?type=lyric&id=' + option.id,
      dataType: 'json',
      success(res) {
        _this.setData({
          lyric: res.data.lrc.lyric
        })
      },
      fail(){
        _this.setData({
          lyric:""
        })
      }
    })

    wx.request({
      url: 'https://api.imjad.cn/cloudmusic/?type=detail&id=' + option.id,
      dataType: 'json',
      success(res) {
        _this.setData({
          detail: res.data.songs[0]
        })
      }
    })
    
  },

  play(){
    this.setData({
      action:{
        "method":'play'
      }
    })
  },
  pause(){
    this.setData({
      action: {
        "method": 'pause'
      }
    })
  },
  replay() {
    this.setData({
      action: {
        "method": 'setCurrentTime',
        data:0
      }
    })
  },

})