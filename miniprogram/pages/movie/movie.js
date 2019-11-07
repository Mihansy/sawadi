Page({
  data: {
    movieList: []
  },
  getMovieList: function() {
    wx.showLoading({
      title: '加载中……',
    })
    wx.cloud.callFunction({
      name: 'movielist',
      data: {  //传参
        type: 1,
        page: 1
      }
    }).then(res => {
      this.setData({
        movieList: [...this.data.movieList, ...JSON.parse(res.result).data]
        //movieList: this.data.movieList.concat(JSON.parse(res.result).data)
      })
      console.log(this.data.movieList)
      wx.hideLoading()
    }).catch(err => {
      wx.hideLoading()
    })
  },
  //跳转到详情页
  toComment: function(event) {
    console.log(event.target.dataset.themeid)
    wx.navigateTo({
      url: `../detail/detail?themeid=${event.target.dataset.themeid}`,
    })
  },

  // 生命周期：监听页面加载
  onLoad: function(options) {
    //当页面加载时，请求数据
    this.getMovieList()
  },
  
  //页面上拉触底事件的处理函数
  onReachBottom: function() {
    //上拉加载数据
    this.getMovieList()
  }
})