<template>
  <div class="top_nav">
    <van-icon name="arrow-left" @click="this.$router.go(-1)" />
    <p>我的购物车</p>
  </div>
  <div class="myCardWrapper">
    <!-- course 就是item -->
    <div :key="index" v-for="(course, index) in cart">
      <van-swipe-cell>
        <div class="message" style="touch-action: none">
          <input type="checkbox" name="select" :value="course" v-model="select_list" class="checked" />
          <!-- 类名是 van-card -->
          <van-card :price="course.price" :thumb="course.thumb" :title="course.title" :num="course.number"></van-card>
        </div>
        <template #right>
          <van-button square text="删除" type="danger" @click="delete_item(index)" style="height: 100%; right: -1px" />
        </template>
      </van-swipe-cell>
    </div>
  </div>

  <!-- 全选按钮 -->
  <div class="footer">
    <van-tabbar class="bottom_nav">
      <p class="allcheck">
        <input type="checkbox" name="select" @click="select_all" v-model="is_all_checked" />全选,共{{
          c_total_count
        }}件,总计{{ c_total_num }}元
      </p>

      <van-button text="提交订单" @click="onSub" @touchstart.stop="show = true" />
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'MyCard',
  data() {
    return {
      cart: [
        {
          id: 1,
          title: 'course 12',
          price: 60,
          number: 1,
          thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        },
        {
          id: 2,
          title: '商品标题',
          price: 90,
          number: 1,
          thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        },
        {
          title: '商品标题',
          id: 3,
          price: 59,
          number: 1,
          thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
        },
      ],
      total_count: 0, // 总数量
      total_num: 0, // 总价格
      select_list: [], // 维护已经添加的数据
      is_all_checked: false, // 维护是否全选按钮
      // showKeyboard: false,
      // isHide: false,
    }
  },
  methods: {
    // 提交按钮后的提示框
    onSub() {
      if (this.select_list.length !== 0)
        this.$alert('确认提交订单吗?', '这是一段提示内容', {
          confirmButtonText: '确定',
          callback: action => {
            // this.isHide = true
            this.$router.push('/mycardnew')
          },
        })
      else {
        this.$alert('未选择购物车里的商品', '无法提交订单', {
          confirmButtonText: '确定',
        })
      }
    },

    // 删除商品
    delete_item(index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          let cur_course = this.cart[index]
          console.log(cur_course)
          this.cart.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },

    // 全选
    select_all() {
      if (this.is_all_checked) {
        this.is_all_checked = false
        this.select_list = [] // 清空
      } else {
        this.select_list = [] // 先清空,以防多选
        this.is_all_checked = true
        this.cart.forEach(element => {
          this.select_list.push(element)
        })
      }
    },
  },
  // 计算数据
  computed: {
    c_total_num: function () {
      this.total_num = 0
      this.select_list.forEach(element => {
        this.total_num += element.price * element.number
      })
      return this.total_num.toFixed(2)
    },
    c_total_count: function () {
      this.total_count = 0
      this.select_list.forEach(element => {
        this.total_count += element.number
      })
      return this.total_count
    },
  },
  // 监听选择/取消全选
  watch: {
    select_list: function (newValue, oldValue) {
      // 如果选中的个数一共等于总共的个数
      if (this.select_list.length === this.cart.length) this.is_all_checked = true
      else this.is_all_checked = false
    },
  },
}
</script>

<style lang="less" scoped>
input {
  width: 15px;
}
.myCardWrapper {
  margin: 0 auto;
  width: 96%;
  // background-color: pink;
  @media screen and (min-width: 980px) {
    width: 70%;
  }
}
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
    top: 7%;
    font-weight: 500;
  }
}
.message {
  position: relative;
  .checked {
    position: absolute;
    height: 90px;
    z-index: 1;
  }
}
.footer {
  position: relative;
  .allcheck {
    // position: absolute;
    // bottom: 5px;
    font-size: 20px;
    line-height: 0%;
  }
  .van-button {
    position: absolute;
    right: 10px;
  }
}
</style>
