<template>
  <div class="top_nav">
    <van-icon name="wap-nav" />
    <p>睿智教育云课堂</p>
    <van-image round width="2rem" height="2rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
  </div>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="../assets/uploads/banner1.png" alt="" /></van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item><img src="../assets/uploads/banner1.png" alt="" /></van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
  <div class="copyright">
    课程内容版权均归 福州XX科技有限公司所有<br />
    350104XXXXXX号<br />
    锐智教育云课堂 v1.1.0 2020-2025 闽公网安备 XXX号<br />
    公司地址: 福州市闽侯 商务合作手机号: <br />
    138899887788
  </div>
  <div class="copyright">
    课程内容版权均归 福州XX科技有限公司所有<br />
    350104XXXXXX号<br />
    锐智教育云课堂 v1.1.0 2020-2025 闽公网安备 XXX号<br />
    公司地址: 福州市闽侯 商务合作手机号: <br />
    138899887788
  </div>
  <div class="bottom_nav">
    <ul>
      <li>咨询</li>
      <li>知识电商</li>
      <li>首页</li>
      <li>投资人</li>
      <li>我的</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyHome',
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}

.top_nav {
  background-color: #000;
  width: 100%;
  height: 70px;
  color: #fff;
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
    top: 25px;
    font-weight: 500;
  }
  .van-image {
    position: absolute;
    right: 5px;
    top: 25px;
  }
}
.banner {
  .my-swipe .van-swipe-item {
    height: 25vh;
    color: #fff;
    font-size: 20px;
    background-color: #39a9ed;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.copyright {
  font-size: 12px;
  background-color: #000;
  width: 100%;
  color: #c1c1c1;
  text-align: center;
}
.bottom_nav {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    li {
      list-style: none;
      text-align: center;
      line-height: 70px;
      width: 70px;
      &:nth-child(3) {
        border: 1px solid #000;
        border-radius: 50%;
      }
    }
  }
}
</style>
