<template>
  <div class="top_nav">
    <van-icon name="arrow-left" @click="this.$router.go(-1)" />
    <p>设置</p>
  </div>
  <div class="outlogin" @click="outlogin">退出登录</div>
</template>

<script>
export default {
  name: 'MySetting',
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
</style>
