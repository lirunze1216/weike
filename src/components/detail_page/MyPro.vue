<template>
  <div class="top_nav">
    <van-icon name="arrow-left" @click="this.$router.go(-1)" />
    <p>已购商品</p>
  </div>
  <van-tabs v-model:active="active">
    <van-tab title="全部">
      <!-- 商品视频的列表 -->
      <van-card
        @click="onList"
        v-for="(item, index) in list"
        :key="index"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.thumb"
      ></van-card>
    </van-tab>
    <van-tab title="Vue 课程">内容 2</van-tab>
    <van-tab title="教师资格证课程">内容 3</van-tab>
  </van-tabs>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MyPro',
  // 定位标签栏
  setup() {
    const active = ref(0)
    return { active }
  },
  data() {
    return {
      list: [
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
  display: flex;
  justify-content: space-around;
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
  p {
    position: absolute;
    font-size: 20px;
    // top: 7%;
    font-weight: 500;
  }
}
</style>
