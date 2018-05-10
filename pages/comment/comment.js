const app=getApp()

Page({
  data:{
    limit:20,
    id:0,
    time:[]
  },
  onLoad(option){
    var _this=this
    this.setData({
      id: option.id
    })
    wx.request({
      url: 'https://api.imjad.cn/cloudmusic/?type=comments&id=' + _this.data.id+'&limit='+_this.data.limit,
      dataType:'json',
      success(res){
        _this.setData({
          commentList: res.data.comments,
          hotcommentList: res.data.hotComments
        })
      }
    })
  },
  more(e){
    var _this=this;
    this.data.limit+=20;
    if (this.data.limit==100){
      this.data.limit=20;
    }
    _this.setData({
      limit:_this.data.limit,
    })
    wx.request({
      url: 'https://api.imjad.cn/cloudmusic/?type=comments&id=' + _this.data.id + '&limit=' + _this.data.limit,
      dataType: 'json',
      success(res) {
        _this.setData({
          commentList: res.data.comments,
        })
      }
    })
  },
  getCurTime(e) {
    var timestamp = e.currentTarget.id
    timestamp = timestamp / 1000;
    var n = timestamp * 1000;
    var date = new Date(n);
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    
    var _this=this
    this.data.time.push(Y + '-' + M + '-' + D + ' ' + h + ":" + m + ":" + s)
    this.setData({
      time:_this.data.time
    })
    console.log(Y + '-' + M + '-' + D + ' ' + h + ":" + m + ":" + s)
    // return Y + '-' + M + '-' + D + ' ' + h + ":" + m + ":" + s;
  }
})