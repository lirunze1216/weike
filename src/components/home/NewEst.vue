<template>
  <div class="new">
    <ul class="newest">
      <router-link to="/allpro">
        <li class="newest_li" v-for="(item, index) in list" :key="index">
          <img src="../../assets/uploads/2032248b0487526240.png" alt="" />
          <div class="txt">
            <p>{{ item.title }}</p>
            <span><van-icon name="eye-o" />&nbsp;1220</span>
            <span class="comment"><van-icon name="comment-o" />&nbsp;246</span>
            <span class="cost">{{ item.cost }}</span>
          </div>
          <div class="mask" :class="{ hide: item.isHide }">已完结 &nbsp;</div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NewEst',
  data() {
    return {
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
      ],
    }
  },
  methods: {
    change() {
      console.log(1)
    },
  },
}
</script>

<style lang="less" scoped>
.new {
  width: 100%;
  // margin: 0 1px;

  .newest {
    // display: flex;
    // justify-content: center;
    .newest_li {
      display: inline-block;
      margin-left: 4px;
      margin-bottom: 15px;
      width: 180px;
      height: 200px;
      background-color: #fff;
      position: relative;
      border-radius: 4px;
      box-shadow: 0 1px 6px 0 rgb(0 0 0 / 8%);

      img {
        width: 100%;
        height: 70%;
      }

      .txt {
        width: 100%;
        height: 30%;
        color: #c1c1c1;
        margin-left: 10px;
        p {
          color: #333;
          font-size: 10px;
        }
        .comment {
          margin: 0 15px;
        }
        .cost {
          margin-left: 25px;
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
