// miniprogram/pages/index_container/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    // 轮播图配置
    swiperBarConfig: {
      'indicatorDots': true,
      'autoplay': true,
      'interval': 2000,
      "circular": true
    },

    // 轮播图集合
    swiper_bar_imgs: [
      '../../../images/index_swiper_images/1.jpg',
      '../../../images/index_swiper_images/2.jpg',
      '../../../images/index_swiper_images/3.jpg',
    ],

    // 首页功能按钮集合
    fun_tabs: [
      {
        iconPath: '../../../images/index_fun_tab_icon/index_task_announce.png' ,
        pagePath: '/pages/index_container/index_pages_included/index_announce/index',
        tip: '任务通告'
      },

      {
        iconPath: '../../../images/index_fun_tab_icon/index_business.png',
        pagePath: '/pages/index_container/index_pages_included/index_live_business/index',
        tip: '直播招商'
      },

      {
        iconPath: '../../../images/index_fun_tab_icon/index_anchor.png',
        pagePath: '/pages/index_container/index_pages_included/index_anchor/index',
        tip: '纯佣主播'
      },

      {
        iconPath: '../../../images/index_fun_tab_icon/index_resource.png',
        pagePath: '/pages/index_container/index_pages_included/index_resource/index',
        tip: '资源卡'
      },

      {
        iconPath: '../../../images/index_fun_tab_icon/index_hr_data.png',
        pagePath: '/pages/index_container/index_pages_included/index_hr_data/index',
        tip: '红人数据'
      }
    ],

    // 页面布局模块
    theme_parts: [
      {
        tip: '今日必推',
        // 总模块的详情
        pagePath: '/pages/index_container/index_pages_included/index_daily_recommend/index',   
        // 每个项的基础url
        item_base_url: '/pages/index_container/index_pages_included/index_haowu_detail/index',
        items: [
          {
            cover: '../../../images/test_show_cover/1.jpg',
            topTip: '投放费用',
            topValue: '￥15.97',
            downTip: '要求粉丝',
            downValue: '1W' ,
            id: 1  
          },
          {
            cover: '../../../images/test_show_cover/1.jpg',
            topTip: '投放费用',
            topValue: '￥15.97',
            downTip: '要求粉丝',
            downValue: '1W',
            id: 1
          },
          {
            cover: '../../../images/test_show_cover/1.jpg',
            topTip: '投放费用',
            topValue: '￥15.97',
            downTip: '要求粉丝',
            downValue: '1W',
            id: 1
          },
          {
            cover: '../../../images/test_show_cover/1.jpg',
            topTip: '投放费用',
            topValue: '￥15.97',
            downTip: '要求粉丝',
            downValue: '1W',
            id: 1
          },
          {
            cover: '../../../images/test_show_cover/1.jpg',
            topTip: '投放费用',
            topValue: '￥15.97',
            downTip: '要求粉丝',
            downValue: '1W',
            id: 1
          },
          {
            cover: '../../../images/test_show_cover/1.jpg',
            topTip: '投放费用',
            topValue: '￥15.97',
            downTip: '要求粉丝',
            downValue: '1W',
            id: 1
          },
        ]
      },
      {
        tip: '今日必推',
        // 总模块的详情
        pagePath: '/pages/index_container/index_pages_included/index_daily_recommend/index',
        // 每个项的基础url
        item_base_url: '/pages/index_container/index_pages_included/index_haowu_detail/index',
        items: [
          {
            cover: '../../../images/test_show_cover/1.jpg',
            topTip: '投放费用',
            topValue: '￥15.97',
            downTip: '要求粉丝',
            downValue: '1W',
            id: 1
          },
          {
            cover: '../../../images/test_show_cover/1.jpg',
            topTip: '投放费用',
            topValue: '￥15.97',
            downTip: '要求粉丝',
            downValue: '1W',
            id: 1
          },
          {
            cover: '../../../images/test_show_cover/1.jpg',
            topTip: '投放费用',
            topValue: '￥15.97',
            downTip: '要求粉丝',
            downValue: '1W',
            id: 1
          },
          {
            cover: '../../../images/test_show_cover/1.jpg',
            topTip: '投放费用',
            topValue: '￥15.97',
            downTip: '要求粉丝',
            downValue: '1W',
            id: 1
          },
          {
            cover: '../../../images/test_show_cover/1.jpg',
            topTip: '投放费用',
            topValue: '￥15.97',
            downTip: '要求粉丝',
            downValue: '1W',
            id: 1
          },
          {
            cover: '../../../images/test_show_cover/1.jpg',
            topTip: '投放费用',
            topValue: '￥15.97',
            downTip: '要求粉丝',
            downValue: '1W',
            id: 1
          },
        ]
      }
    ]

    
  },

  //  搜索框聚焦
  onSearchFocus: function(){
    wx.navigateTo({
      url: '/pages/index_container/index_pages_included/index_to_search/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})