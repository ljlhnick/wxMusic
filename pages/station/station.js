const app=getApp()
var proData=require('../../data/stationData.js')
Page({
  data:{

  },
  onLoad(){
    this.setData({
      dataList: proData.postList
    })
  },
  onShareAppMessage: function () {
    return {
      title: '音乐范儿er',
      desc: '发现音乐!',
      path: '/page/station/station'
    }
  }
})