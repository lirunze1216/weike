<template>
  <div class="top_nav">
    <van-icon name="arrow-left" @click="this.$router.go(-1)" />
    <p>个人中心</p>
  </div>
  <div class="my">
    <!-- 个人信息区域 -->
    <div class="top">
      <div class="img">
        <van-image fit="cover" width="7rem" height="7rem" :src="userinfo.user_pic" />
      </div>
      <span class="nick_name"> {{ userinfo.nickname }} </span>
      <span class="user_name">用户名: {{ userinfo.username }} </span>
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
import { ElMessage } from 'element-plus'
import { getUserInfoApi } from '../api/user'
export default {
  name: 'MyCenter',
  setup() {
    const active = ref('friends')
    return { active }
  },
  data() {
    return {
      userinfo: [],
    }
  },
  created() {
    this.getUse()
  },

  methods: {
    getUse() {
      getUserInfoApi().then((res) => {
        if (res.status !== 0) return ElMessage.error('获取用户信息失败')
        this.userinfo = res.data
      })
    },
    // async getUserInfo() {
    //   const { data: res } = await this.$http.get('/my/userinfo', {})
    //   if (res.status !== 0) return ElMessage.error('获取用户信息失败')

    //   this.userinfo = res.data
    //   // console.log(this.userinfo)
    // },
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
    padding: 3px 20px;
    margin-bottom: 35px;
    position: relative;
    .img {
      border-radius: 25%;
      display: inline-block;
      overflow: hidden;
    }
    .nick_name {
      position: absolute;
      top: 0;
      left: 120px;
      font-size: 30px;
      font-weight: 500;
    }
    .user_name {
      position: absolute;
      top: 45px;
      left: 120px;
      font-size: 15px;
      color: #999999;
    }
  }
}

// 单元格
.van-cell {
  background-color: rgba(228, 228, 228, 1);
  //   border-left-style: none;
}
.one {
  // margin-top: 50px;
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
