<template>
  <!-- 和 AllPro 类似, 不同的是最下方的登录按钮变成了加入购物车和购买两个按钮 -->
  <div class="top">
    <!-- 头部导航 -->
    <div class="top_nav">
      <van-icon name="arrow-left" @click="this.$router.go(-1)" class="left" />
      <p class="big">睿智教育云课堂</p>
      <router-link to="/home"><van-icon name="wap-home-o" size="25" class="right" /></router-link>
    </div>
  </div>
  <div class="main">
    <div class="main_top">
      <van-tabs v-model:active="active">
        <van-tab title="介绍">
          <div class="introduce">
            <p class="one">
              <span>vue3 从入门到精通</span>
              <span><van-cell title="名师团" label="描述信息" size="large" /></span>
            </p>
            <p class="two">课程概述</p>
          </div>
        </van-tab>
        <van-tab title="目录">
          <div class="index">
            <br />
            <van-cell-group inset>
              <van-cell title="基础课程" />
              <div>
                <van-list v-model:loading="loading" :finished="finished" finished-text="" @load="onLoad">
                  <van-cell v-for="item in list" :key="item" :title="item" />
                </van-list>
              </div>
            </van-cell-group>
            <br />
            <van-cell-group inset>
              <van-cell title="高级课程" />
              <div>
                <van-list v-model:loading="loading" :finished="finished" finished-text="" @load="onLoad">
                  <van-cell v-for="item in list" :key="item" :title="item" />
                </van-list>
              </div>
            </van-cell-group>
            <br />
            <van-cell-group inset>
              <van-cell title="综合案例" />
              <div>
                <van-list v-model:loading="loading" :finished="finished" finished-text="" @load="onLoad">
                  <van-cell v-for="item in list" :key="item" :title="item" />
                </van-list>
              </div>
            </van-cell-group>
            <br />
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="main_footer"></div>
  </div>
  <div class="footer">
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon icon="shop-o" text="店铺" />
      <van-action-bar-button color="#be99ff" type="warning" text="加入购物车" />
      <van-action-bar-button color="#7232dd" type="danger" text="立即购买" />
    </van-action-bar>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Shopping',
  setup() {
    const list = ref([])
    const loading = ref(false)
    const finished = ref(false)

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅作示例,真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i > 5; i++) {
          list.value.push(list.value.length + 1)
        }

        // 加载状态结束
        loading.value = false

        // 数据全部加载完成
        if (list.value.length >= 5) {
          finished.value = true
        }
      }, 1000)
    }
    return {
      list,
      onLoad,
      loading,
      finished,
    }
  },
}
</script>

<style lang="less" scoped>
.top {
  background-image: url('../assets/课程封面.png');
  height: 230px;
  width: 100%;
  // 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。
  background-size: contain;
  position: relative;
  .van-icon-wap-home {
    position: absolute;
    right: 10px;
    top: 10px;
    color: black;
  }
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

    .left {
      font-size: 20px;
      position: absolute;
      left: 0;
      top: 0;
      width: 70px;
      height: 70px;
      line-height: 70px;
      text-align: center;
    }

    .big {
      position: absolute;
      font-size: 20px;
      top: 7%;
      font-weight: 500;
    }
    .right {
      z-index: 10;
      font-size: 20px;
      position: absolute;
      right: 0;
      top: 0;
      width: 70px;
      height: 70px;
      line-height: 70px;
      text-align: center;
    }
  }
}
.introduce {
  .one {
    font-size: 20px;
    height: 150px;
    border: 5px solid pink;
    // background-color: pink;
  }
  .two {
    height: 50px;
    width: 100%;
    background-color: gray;
  }
}
.index {
  font-size: 20px;
  background-color: pink;
  height: 100%;
}
.footer {
  .van-action-bar {
    height: 50px;
    width: 100%;
  }
}
</style>
