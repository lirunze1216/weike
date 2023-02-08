<template>
  <!-- 头部导航 -->
  <div class="top_nav">
    <van-icon name="arrow-left" @click="this.$router.go(-1)" />
    <p class="big">睿智教育云课堂</p>

    <van-image round width="2rem" height="2rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
  </div>
  <!-- 商品列表 -->
  <div class="class">
    <van-card
      @click="onList"
      v-for="(item, index) in list"
      :key="index"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="item.thumb"
    >
    </van-card>
  </div>
</template>

<script>
export default {
  name: 'Prolist',
  data() {
    return {
      list: [
        {
          price: '2.00',
          desc: '描述信息',
          title: '商品标题',
          thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        },
        {
          price: '3.00',
          desc: '描述信息',
          title: '商品标题',
          thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        },
        {
          price: '4.00',
          desc: '描述信息',
          title: '商品标题',
          thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        },
        {
          price: '5.00',
          desc: '描述信息',
          title: '商品标题',
          thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        },
      ],
    }
  },
  methods: {
    onList() {
      this.$router.push('/allpro')
    },
  },
}
</script>

<style lang="less" scoped>
// 头部导航
.top_nav {
  background-color: #fff;
  width: 100%;
  color: #000;
  position: relative;
  // 统一
  display: flex;
  justify-content: space-around;
  // justify-content: center;
  align-items: center;
  // 统一
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .van-icon {
    font-size: 20px;
    position: absolute;
    left: 15px;
    top: 25px;
  }

  .big {
    // position: absolute;
    font-size: 20px;
    // top: 7%;
    font-weight: 500;
  }
  .van-image {
    position: absolute;
    right: 15px;
  }
}
</style>
