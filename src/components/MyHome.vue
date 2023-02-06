<template>
  <div class="top_nav">
    <van-icon name="wap-nav" />
    <p>睿智教育云课堂</p>
    <van-image round width="2rem" height="2rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
  </div>
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
      <div class="more">更多课程<van-icon name="arrow" /></div>
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
import { ref } from 'vue'

export default {
  name: 'MyHome',
  setup() {
    const active = ref('home')
    return { active }
  },
}
</script>

<style lang="less" scoped>
// 头部导航
.top_nav {
  background-color: #fff;
  width: 100%;
  height: 70px;
  color: #000;
  position: relative;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .van-icon {
    position: absolute;
    left: 15px;
    top: 25px;
    font-size: 22px;
  }
  p {
    position: absolute;
    font-size: 20px;
    top: 7%;
    font-weight: 500;
  }
  .van-image {
    position: absolute;
    right: 5px;
    top: 25px;
  }
}
// 轮播图
.banner {
  .my-swipe .van-swipe-item {
    height: 25vh;
    color: #fff;
    font-size: 20px;
    // background-color: #39a9ed;
    img {
      margin: 0 auto;
      display: block;
      max-width: 100%;
      height: 100%;
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
        padding: 0;
        display: flex;
        justify-content: right;
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
      width: 100px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border: 1px solid #e6e6e6;
      border-radius: 5px;
      background-color: #f5f5f5;
      margin-left: 35%;
      margin-bottom: 20px;
    }
  }
}
// 底部权限
.copyright {
  margin: 0 10%;
  font-size: 12px;
  width: 80%;
  color: #c1c1c1;
  text-align: center;
}
// 底部导航
.bottom_nav {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  background-color: #fff;
}
</style>
