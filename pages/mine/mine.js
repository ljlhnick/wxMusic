//logs.js
const util = require('../../utils/util.js')
const app=getApp()
Page({
  data: {
    logs: [],
    userId:0,
    period:0,
    flag:-1
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  allRecord(e){
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../songsheet/songsheet?pid=' + e.currentTarget.id
        
    })
  },
  weekRecord(e){
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../songsheet/songsheet?pid=' + e.currentTarget.id
    })
  },
  notice(e) {
    wx.navigateTo({
      url: '../more/notice',
    })
  },
  fank(e){
    wx.navigateTo({
      url: '../more/fank',
    })
  },
  contact(e){
    wx.navigateTo({
      url: '../more/contact',
    })
  },
  onShareAppMessage: function () {
    return {
      title: '音乐范儿er',
      desc: '发现音乐!',
      path: '/page/mine/mine'
    }
  }
  
})
