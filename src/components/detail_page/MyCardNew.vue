<template>
  <div class="wrapper">
    <div class="top_nav">
      <van-icon name="arrow-left" @click="this.$router.go(-1)" />
      <p>请输入支付密码</p>
    </div>
    <!-- 密码输入框 -->
    <van-password-input :value="value" :focused="showKeyboard" @focus="showKeyboard = true" info="密码为 6 位数字" />
    <!-- 数字键盘 -->
    <van-number-keyboard v-model="value" :show="showKeyboard" @blur="blurNum" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { ElMessage } from 'element-plus'

export default {
  name: 'new',
  setup() {
    const value = ref('')
    const errorInfo = ref('')
    const showKeyboard = ref(false)
    let router = useRouter()
    watch(value, newVal => {
      if (newVal.length === 6 && newVal !== '123456') {
        ElMessage.error('密码错误')
        value.value = ''
      } else if (newVal.length === 6 && newVal === '123456') {
        // 密码正确执行后续操作
        ElMessage.success('支付成功')
        router.go(-1)
      }
    })
    return {
      value,
      errorInfo,
      showKeyboard,
      router,
    }
  },
  methods: {
    blurNum() {
      this.showKeyboard = false

      //   console.log('sss')
    },
  },
}
</script>

<style lang="less" scoped>
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
    top: 7%;
    font-weight: 500;
  }
}
.wrapper {
  margin: 0 auto;
  width: 100%;
  height: 530px;
  // background-color: pink;
  @media screen and (min-width: 980px) and (max-width: 1400px) {
    width: 78%;
  }
  @media screen and (min-width: 1400px) {
    width: 70%;
  }
}
</style>
