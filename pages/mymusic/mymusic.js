const app =getApp()
var propost=require('../../data/mymusicData.js')
Page({
  data:{
    
  },
  onLoad(){
    this.setData({
      dataList: propost.postList
    })
  },
  onShareAppMessage: function () {
    return {
      title: '音乐范儿er',
      desc: '发现音乐!',
      path: '/page/mymusic/mymusic'
    }
  }
})
