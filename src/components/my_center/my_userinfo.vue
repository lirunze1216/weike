<template>
  <div class="wrapper">
    <ul class="my_user">
      <li>
        <van-icon name="user-o" /> <span>昵称 {{ userInfo.nickname }}</span>
      </li>
      <li><van-icon name="contact" /> 您的姓名 {{ userInfo.my_name }}</li>
      <li><van-icon name="smile-o" /> 年龄 {{ userInfo.age }}</li>
      <li><van-icon name="smile-comment-o" /> 性别 {{ userInfo.gender }}</li>
      <li><van-icon name="phone-o" /> 电话 {{ userInfo.telephone }}</li>
      <li><van-icon name="envelop-o" /> 邮箱 {{ userInfo.email }}</li>
      <li><van-icon name="free-postage" /> 地址 {{ userInfo.address }}</li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ userInfo: {} })
</script>

<style lang="less" scoped>
.wrapper {
  margin: 0 auto;
  width: 96%;
  // background-color: pink;
  @media screen and (min-width: 1400px) {
    width: 90%;
  }
  .my_user {
    li {
      padding: 0 40px;
      border-top: 1px solid #999;
      margin: 5px 0;
      font-size: 15px;
      line-height: 35px;

      @media screen and (min-width: 980px) {
        padding: 0 100px;
      }
    }
    :nth-child(1) {
      border: none;
    }
  }
}
</style>
