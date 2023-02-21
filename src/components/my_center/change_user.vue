<template>
  <div class="top_nav">
    <van-icon name="arrow-left" @click="this.$router.go(-1)" />
    <p>修改个人信息</p>
  </div>
  <div class="wrapper">
    <div class="userInfor">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model.trim="postData.nickname" label="昵称" label-align="top" />
          <van-field v-model.trim="postData.my_name" label="姓名" label-align="top" />
          <van-field v-model.trim="postData.age" type="digit" label="年龄" label-align="top" />
          <van-field v-model.trim="postData.gender" label="性别" label-align="top" />
          <van-field v-model.trim="postData.telephone" type="digit" label="手机号" label-align="top" />
          <van-field v-model.trim="postData.email" label="邮箱" label-align="top" />
          <van-field v-model.trim="postData.address" label="地址" label-align="top" />
        </van-cell-group>
        <!-- <van-field
          v-model="result"
          is-link
          readonly
          name="area"
          label="地区选择"
          placeholder="点击选择省市区"
          @click="showArea = true"
        />
        <van-popup v-model:show="showArea" position="bottom">
          <van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
        </van-popup> -->
        <div style="margin: 16px">
          <van-button round block type="primary" @click="onChangeUser"> 提交 </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs, ref } from 'vue'
import { areaList } from '@vant/area-data'
import { postUserInfoApi, getUserInfoApi } from '../../api/user'
import { ElMessage } from 'element-plus'

const result = ref('')
const showArea = ref(false)
const state = reactive({
  postData: {},
})
const { postData, userinfo } = toRefs(state)

const onConfirm = ({ selectedOptions }) => {
  showArea.value = false
  result.value = selectedOptions.map(item => item.text).join('/')
}
const onSubmit = values => {}
getUserInfoApi().then(res => {
  if (res.status !== 0) return ElMessage.error('获取用户信息失败')
  postData.value = res.data
  //   console.log(postData.value)
})
const onChangeUser = () => {
  //   console.log(postData.value)
  postUserInfoApi(postData.value).then(res => {
    if (res.status !== 1) return ElMessage.error('更新用户信息失败')
    ElMessage.success('更新用户信息成功')
  })
}
</script>

<style lang="less" scoped>
.wrapper {
  margin: 10px auto;
  width: 100%;
  // background-color: pink;
  @media screen and (min-width: 980px) and (max-width: 1400px) {
    width: 78%;
  }
  @media screen and (min-width: 1400px) {
    width: 70%;
  }
}
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
</style>
