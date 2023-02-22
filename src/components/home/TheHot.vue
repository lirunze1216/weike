<template>
  <div class="wrapper">
    <div class="hot">
      <van-row tag="ul" justify="left" class="hotest">
        <router-link to="/allpro" v-for="(item, index) in list" :key="index">
          <van-col tag="li" class="hotest_li">
            <img src="../../assets/uploads/1911335e73c1017292.jpg" alt="" />
            <div class="txt">
              <p>{{ item.title }}</p>
              <span><van-icon name="eye-o" />&nbsp;1220</span>
              <span class="comment"><van-icon name="comment-o" />&nbsp;246</span>
              <span class="cost">{{ item.cost }}</span>
            </div>
            <div class="mask" :class="{ hide: item.isHide }">已完结 &nbsp;</div>
          </van-col>
        </router-link>
      </van-row>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
const state = reactive({
  list: [
    {
      cover_img: '../../assets/uploads/2032248b0487526240.png',
      title: '线上直播课程',
      cost: '免费',
      isHide: false,
    },
    {
      cover_img: '../../assets/uploads/2032248b0487526240.png',
      title: '线上直播课程',
      cost: '免费',
      isHide: true,
    },
    {
      cover_img: '../../assets/uploads/2032248b0487526240.png',
      title: '线上直播课程',
      cost: '免费',
      isHide: true,
    },
    {
      cover_img: '../../assets/uploads/2032248b0487526240.png',
      title: '线上直播课程',
      cost: '免费',
      isHide: true,
    },
    {
      cover_img: '../../assets/uploads/2032248b0487526240.png',
      title: '线上直播课程',
      cost: '免费',
      isHide: true,
    },
    {
      cover_img: '../../assets/uploads/2032248b0487526240.png',
      title: '线上直播课程',
      cost: '免费',
      isHide: true,
    },
  ],
})
const { list } = toRefs(state)
</script>

<style lang="less" scoped>
.wrapper {
  margin: 0 auto;
  width: 96%;
  // background-color: pink;
  @media screen and (min-width: 1400px) {
    width: 90%;
  }
}
.hot {
  width: 100%;

  .hotest {
    // text-align: center;
    .hotest_li {
      display: inline-block;
      margin-left: 4px;
      margin-bottom: 15px;
      width: 170px;
      height: 190px;
      background-color: #fff;
      position: relative;
      box-shadow: 0 1px 6px 0 rgb(0 0 0 / 8%);
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70%;
      }

      .txt {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30%;
        color: #c1c1c1;
        margin-left: 10px;
        p {
          text-align: left;
          color: #333;
          font-size: 10px;
        }
        .comment {
          margin: 0 15px;
        }
        .cost {
          margin-left: 8px;
          margin-right: 15px;
          color: #43bc60;
        }
      }
      .mask {
        position: absolute;
        bottom: 30%;
        text-align: right;
        width: 100%;
        height: 25px;
        line-height: 25px;
        background-color: rgba(0, 0, 0, 0.5);
        // opacity: 0;
      }
    }
  }
}
.hide {
  opacity: 0;
}
</style>
