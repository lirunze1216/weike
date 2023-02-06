<template>
  <div class="top_nav">
    <van-icon name="arrow-left" @click="this.$router.go(-1)" />
    <p>设置</p>
  </div>
  <div class="outlogin" @click="outlogin">退出登录</div>
  <!-- 底部导航 -->
  <van-tabbar v-model="active" class="bottom_nav">
    <van-tabbar-item name="home" icon="home-o" is-link to="/home">首页</van-tabbar-item>
    <van-tabbar-item name="search" icon="search">搜索</van-tabbar-item>
    <van-tabbar-item name="center" icon="friends-o" is-link to="/center">个人中心</van-tabbar-item>
    <van-tabbar-item name="setting" icon="setting-o" is-link to="/setting">设置</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'MySetting',
  setup() {
    const active = ref('setting')
    return { active }
  },
  methods: {
    outlogin() {
      window.localStorage.clear()
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="less" scoped>
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
.outlogin {
  text-align: center;
  background-color: #f56c6c;
  color: #fff;
  font-size: 19px;
  border-radius: 10px;
  line-height: 40px;
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
