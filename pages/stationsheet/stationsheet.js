const app=getApp()

Page({
  data:{
    backgroundUrl:'https://p1.music.126.net/pmHS4fcQtcNEGewNb5HRhg==/2002210674180202.jpg',
  },
  onLoad(option){
    var _this=this
    wx.request({
      url: 'https://api.imjad.cn/cloudmusic/?type=detail_dj&id=' + option.id,
      dataType:'json',
      success(res){
        _this.setData({
          musicList: res.data.program.songs,
          creator: res.data.program.mainSong.album,
          dj: res.data.program.dj,
          radio: res.data.program.radio,
          res: res.data.program
        })
      }
    })
    
  }
})