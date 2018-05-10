//index.js
//获取应用实例
const app = getApp()

var postData =require('../../data/indexData.js')
Page({
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:4000,
    duration:1000,
    imgUrls:[
      {
        url: 'http://oyop9bv8z.bkt.clouddn.com/1347c07a212be03b%21400x400_big.jpg',
        desc:'小清新文艺女'
      },
      {
        url:'http://oyop9bv8z.bkt.clouddn.com/15d24ceb0cfda971%21400x400_big.jpg' ,
        desc:"好听的欧美歌曲"
      },
      {
        url: 'http://oyop9bv8z.bkt.clouddn.com/1b4b40de4330377a%21400x400_big.jpg',
        desc:"◢◤Avicii丨当一切都结束的时候再叫醒我"
      },
      {
        url: 'http://oyop9bv8z.bkt.clouddn.com/24ed96bd944752e5%21400x400_big.jpg',
        desc:"怎么会爱上了他并决定跟他回家"
      }
    ]
  },
  onLoad: function () {
    var _this=this
    this.setData({
     dataList: postData.postList
    })
  },
  search(event){
    // console.log(event.detail.value);
    wx.navigateTo({
       url: '../search/search?s=' + event.detail.value
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '音乐范儿er',
      desc: '发现音乐!',
      path: '/page/index/index'
    }
  }
})
