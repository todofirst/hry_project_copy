// miniprogram/pages/my_container/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: true,
    basePath: '../../../images/my_images/funs_icons/',
    fun_icons: [
      {
        icon: 'icon_business_auth.png',
        url: '/pages/my_container/my_pages_included/business_auth/index',
        tip: '机构认证'
      },
      {
        icon: 'icon_hr_academy.png',
        url: '/pages/my_container/my_pages_included/hr_academy/index',
        tip: '红人学院'
      },
      {
        icon: 'icon__accept_good.png',
        url: '/pages/my_container/my_pages_included/good_accept_addr/index',
        tip: '收货地址'
      },
      {
        icon: 'icon_news_announce.png',
        url: '/pages/my_container/my_pages_included/news_announce/index',
        tip: '新闻公告'
      },
      {
        icon: 'icon_help.png ',
        url: '/pages/my_container/my_pages_included/help_center/index',
        tip: '帮助中心'
      },
      {
        icon: 'icon_invite.png',
        url: '/pages/my_container/my_pages_included/invite_gift/index',
        tip: '邀请有礼'
      },
      {
        icon: 'icon_contact.png',
        url: '/pages/my_container/my_pages_included/contact_us/index',
        tip: '联系客服'
      },
      {
        icon: 'icon_about.png',
        url: '/pages/my_container/my_pages_included/about_us/index',
        tip: '关于我们'
      }
    ]
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