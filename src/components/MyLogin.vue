<template>
  <div class="top_nav">
    <p>睿智教育云课堂</p>
  </div>
  <div class="wrapper">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit" @click="login"> 提交 </van-button>
      </div>
    </van-form>
    <div class="fu">
      <router-link to="/register"><div class="forget">忘记密码</div></router-link>
      <div class="register" @click="toRegister">注册</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
// import qs from 'qs'
import { loginApi } from '../api/user'
export default {
  name: 'MyLogin',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  setup() {
    const username = ref('')
    const password = ref('')
    const onSubmit = values => {
      // console.log('submit', values)
    }

    return {
      username,
      password,
      onSubmit,
    }
  },

  methods: {
    async login() {
      // let postData = qs.stringify({ username: this.username, password: this.password })
      // console.log(postData)
      await loginApi({ username: this.username, password: this.password }).then(res => {
        if (res.status !== 0) return ElMessage.error('登陆失败')
        ElMessage({
          message: '登录成功',
          type: 'success',
        })
        localStorage.setItem('token', res.token)
        //   // 跳转到后台主页
        this.$router.push('/home')
      })
    },

    toRegister() {
      this.$router.push('/register')
    },
  },
}
</script>

<style lang="less" scoped>
.wrapper {
  margin: 0 auto;
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
  background-color: #000;
  width: 100%;
  //   width: 100vw;
  height: 70px;
  color: #fff;
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: 20px;
  text-align: center;
}
.van-form {
  margin-top: 100px;
  //   background-color: skyblue;
}
.fu {
  position: relative;
  cursor: pointer;

  .register {
    position: absolute;
    right: 30px;
    // cursor: pointer;
  }
  .forget {
    position: absolute;
    right: 80px;
    // cursor: pointer;
  }
}
</style>
