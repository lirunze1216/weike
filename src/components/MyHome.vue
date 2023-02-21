<template>
  <div class="top_nav">
    <!-- 跳转到内容的图标 -->
    <van-icon name="wap-nav" size="30" @click="showPopup" />
    <p class="big">睿智教育云课堂</p>
    <div class="user_pic">
      <van-image round width="2rem" height="2rem" :src="userinfo.user_pic">
        <template v-slot:error>请登录!</template>
      </van-image>
    </div>

    <!-- 顶部弹出 -->
    <van-popup v-model:show="show" position="top" :style="{ height: '40%' }">
      <div class="main">
        <ul class="navbar-collapse">
          <li><a href="javascript:;">首页</a></li>
          <li><a href="javascript:;">博客</a></li>
          <li><a href="javascript:;">GitHub</a></li>
          <li><a href="javascript:;">Tweb Cont</a></li>
          <li><a href="javascript:;">SuperStar</a></li>
          <li><a href="javascript:;">Web前端</a></li>
          <li><a href="javascript:;">关于</a></li>
        </ul>
      </div>
    </van-popup>
  </div>
  <div class="wrapper">
    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="../assets/uploads/banner1.png" alt="" /></van-swipe-item>
        <van-swipe-item><img src="../assets/uploads/174655f65e0a441584.png" alt="" /></van-swipe-item>
        <van-swipe-item><img src="../assets/uploads/2032248b0487526240.png" alt="" /></van-swipe-item>
        <van-swipe-item><img src="../assets/uploads/1911335e73c1017292.jpg" alt="" /></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 主体页面 -->
    <div class="box_freeTutorial">
      <div class="inner">
        <div class="box_hd">
          <h3>大厂力荐、专为IT学子打造的教程</h3>
          <p>已发布高级教程14万余节,涵盖配套源码工具等。</p>
        </div>
        <div class="box_bd">
          <ul class="menu">
            <li class="menu-item">
              <router-link to="/home/newest">最新</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/home/hot">最热</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/home/suggest">推荐</router-link>
            </li>
          </ul>
          <router-view></router-view>
        </div>

        <div class="more">
          <van-button plain type="primary" to="/prolist">全部课程></van-button>
        </div>
      </div>
    </div>
  </div>

  <!-- 底部权限 -->
  <div class="copyright">
    <hr />
    课程内容版权均归 福州XX科技有限公司所有<br />
    350104XXXXXX号<br />
    锐智教育云课堂 v1.1.0 2020-2025 闽公网安备 XXX号<br />
    公司地址: 福州市闽侯 商务合作手机号: <br />
    138899887788
  </div>
  <!-- 底部导航 -->
  <van-tabbar v-model="active" class="bottom_nav">
    <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="search" icon="search">搜索</van-tabbar-item>
    <van-tabbar-item name="center" icon="friends-o" is-link to="/center">个人中心</van-tabbar-item>
    <van-tabbar-item name="setting" icon="setting-o" is-link to="/setting">设置</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { getUserInfoApi } from '../api/user'
import { ElMessage } from 'element-plus'
import { ref, reactive, toRefs } from 'vue'

export default {
  name: 'MyHome',
  setup() {
    const active = ref('home')
    // return { active }
    //左边的导航图标对应的js里的下拉内容
    const show = ref(false)
    const showPopup = () => {
      show.value = true
    }
    const state = reactive({
      userinfo: [],
    })
    const { userinfo } = toRefs(state)
    return {
      show,
      showPopup,
      active,
      userinfo,
    }
  },

  created() {
    this.getUse()
  },

  methods: {
    getUse() {
      getUserInfoApi().then(res => {
        if (res.status !== 0) return ElMessage.error('获取用户信息失败')
        this.userinfo = res.data
      })
    },
  },
}
</script>

<style lang="less" scoped>
.wrapper {
  margin: 0 auto;
  width: 100%;
  @media screen and (min-width: 980px) and (max-width: 1400px) {
    width: 78%;
  }
  @media screen and (min-width: 1400px) {
    width: 70%;
  }
}
// 头部导航
.top_nav {
  background-color: #fff;
  width: 100%;
  height: 70px;
  color: #000;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  .van-icon {
    font-size: 22px;
  }
  .big {
    font-size: 20px;
    font-weight: 500;
  }
  .user_pic {
    font-size: 20px;
    vertical-align: top;
  }

  //左上图标的下拉内容
  .main {
    // 边框离正文的距离
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    .navbar-collapse {
      li {
        height: 30px;
        line-height: 30px;
        font-size: 17px;
      }
    }
  }
}
// 轮播图
.banner {
  .my-swipe .van-swipe-item {
    height: 50px;
    color: #fff;
    font-size: 20px;
    // background-color: #39a9ed;
    @media screen and (max-width: 945px) {
      height: 210px;
    }
    @media screen and (min-width: 945px) and (max-width: 1400px) {
      height: 300px;
    }
    @media screen and (min-width: 1400px) {
      height: 370px;
    }
    img {
      margin: 0 auto;
      display: block;
      max-width: 100%;
      height: 100% !important;
    }
  }
}
// 主体视频介绍
.box_freeTutorial {
  margin-top: 20px;
  .inner {
    position: relative;
    .box_hd {
      width: 100%;
      text-align: center;
      p {
        color: #252b3a;
        font-size: 12px;
      }
    }
    .box_bd {
      .menu {
        list-style-type: none;
        padding: 0 90px;
        display: flex;
        justify-content: right;
        @media screen and (max-width: 980px) {
          padding: 0 10px;
        }
        @media screen and (min-width: 980px) {
          padding: 0 60px;
        }
        .menu-item {
          display: inline-block;
          margin: 10px 10px 10px 0;
          line-height: 30px;
          font-weight: bold;
          font-size: 16px;
          a {
            padding: 5px;
            border: 1px solid #dcdcdc;
            border-radius: 5px;
            color: #666666;
          }
        }
      }
      // 设置路由高亮效果
      .router-link-active {
        background-color: #e1e1e1;
      }
    }
    .more {
      text-align: center;
    }
  }
}
// 底部权限
.copyright {
  font-size: 12px;
  width: 100%;
  color: #c1c1c1;
  text-align: center;
}
// 底部导航
.bottom_nav {
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 70px;
  background-color: #fff;
}
</style>
