<template>
  <div class="top_nav">
    <van-icon name="arrow-left" @click="this.$router.go(-1)" />
    <p>个人中心</p>
  </div>
  <div class="my">
    <!-- 个人信息区域 -->
    <div class="top">
      <div class="msg">
        <div class="img">
          <van-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" size="125" />
        </div>
        <span> userinfo.name </span>
      </div>
    </div>
    <!-- 信息区域 -->
    <div class="one"><van-cell title="已购商品" is-link to="index" /></div>
    <div class="two">
      <van-cell title="投资人认证" is-link to="index" />
      <van-cell title="提交的项目" is-link to="index" />
      <van-cell title="我的收藏" is-link to="index" />
    </div>
  </div>

  <!-- 底部导航 -->
  <van-tabbar v-model="active" class="bottom_nav">
    <van-tabbar-item name="home" icon="home-o" is-link to="/home">首页</van-tabbar-item>
    <van-tabbar-item name="search" icon="search">搜索</van-tabbar-item>
    <van-tabbar-item name="friends" icon="friends-o" is-link to="/center">个人中心</van-tabbar-item>
    <van-tabbar-item name="setting" icon="setting-o" is-link to="/setting">设置</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'MyCenter',
  setup() {
    const active = ref('friends')
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
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 0;
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
  }
  p {
    position: absolute;
    font-size: 20px;
    top: 7%;
    font-weight: 500;
  }
}
.my {
  margin-bottom: 80px;
  .top {
    margin-bottom: 35px;
    .msg {
      width: 100%;
      height: 200px;
      background-color: rgba(228, 228, 228, 1);
      text-align: center;
      padding-top: 30px;
      span {
        padding-top: 20px;
        font-size: 30px;
        display: inline-block;
      }
    }
  }
}
// 单元格
.van-cell {
  background-color: rgba(228, 228, 228, 1);
  //   border-left-style: none;
}
.one {
  height: 79px;
}
.two {
  .van-cell {
    border-bottom: 1px solid white;
  }
}
// 底部导航
.bottom_nav {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  background-color: #fff;
}
</style>
