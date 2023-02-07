<template>
  <div class="top_nav">
    <p>睿智教育云课堂</p>
  </div>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <div class="upload_pic"><upload-pic @UrlChange="getUrl" v-show="isPic"></upload-pic></div>
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
      <van-field
        v-model="email"
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
        :rules="[{ required: true, message: '请填写邮箱' }]"
      />
      <van-field v-model="nickname" name="昵称" label="昵称" placeholder="昵称" />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit" @click="btn_submit"> 注册 </van-button>
    </div>
    <input type="reset" name="reset" style="display: none" ref="reset" />
  </van-form>
  <el-button type="warning" round class="login_btn" @click="this.$router.push('/login')">我有账号去登陆</el-button>
</template>

<script>
import { ref } from 'vue'
import qs from 'qs'
import UploadPic from './custom_component/UploadPic.vue'
import { ElMessage } from 'element-plus'
import { registerApi } from '../api/user'
export default {
  name: 'MyRegister',
  data() {
    return {
      pic_url: '',
      username: '',
      password: '',
      nickname: '',
      email: '',
      isPic: true,
    }
  },
  components: {
    UploadPic,
  },
  setup() {
    const username = ref('')
    const password = ref('')
    const nickname = ref('')
    const email = ref('')
    const onSubmit = (values) => {
      // console.log('submit', values)
    }

    return {
      username,
      password,
      nickname,
      email,
      onSubmit,
    }
  },
  methods: {
    getUrl(url) {
      this.pic_url = url
      // console.log(this.pic_url)
    },
    btn_submit() {
      //  let postData = qs.stringify({
      //       user_pic: this.pic_url,
      //       username: this.username,
      //       password: this.password,
      //       nickname: this.nickname,
      //       email: this.email,
      //     })
      registerApi({
        user_pic: this.pic_url,
        username: this.username,
        password: this.password,
        nickname: this.nickname,
        email: this.email,
      }).then((res) => {
        if (res.status !== 0) return ElMessage.error('注册失败!')
        ElMessage.success('注册成功!')
        this.$refs.reset.click()
        this.isPic = false
        setTimeout(() => {
          this.$router.push('/login')
        }, 3000)
      })
    },
  },
}
</script>

<style lang="less" scoped>
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
.upload_pic {
  // background-color: pink;
  width: 342px;
  height: 202px;
  margin: 25px auto;
}

.login_btn {
  float: right;
  margin-right: 20px;
}
</style>
