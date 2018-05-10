const app=getApp()

Page({
  data:{
    userId: 0,
    period: 0,
  },
  onLoad(option){
    var _this=this
    var pid = option.pid
    if (pid === "week") {
      this.setData({
        userId: 118008381,
        period: 1
      })
      wx.request({
        url: 'https://api.imjad.cn/cloudmusic/?type=record&id=' + _this.data.userId + '&period=' + _this.data.period,
        dataType: 'json',
        success(res) {
          _this.setData({
            recordList: res.data.weekData,
            title: '最近一周的听歌记录'
          })
        }
      })

    } else if (pid === "all"){
      this.setData({
        userId: 118008381,
        period: 0,
      })
      wx.request({
        url: 'https://api.imjad.cn/cloudmusic/?type=record&id=' + _this.data.userId + '&period=' + _this.data.period,
        dataType: 'json',
        success(res) {
          _this.setData({
            recordList: res.data.allData,
            title:'所有的听歌记录'
          })
        }
      })
    }else{
      wx.request({
        url: 'https://api.imjad.cn/cloudmusic/?type=playlist&id=' + option.id,
        dataType: 'json',
        success(res) {
          _this.setData({
            musicList: res.data.playlist.tracks,
            creator: res.data.playlist.creator
          })
        }
      })
    }
  }
})