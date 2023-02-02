<template>
  <!-- 页面讨论部分 -->
  <div class="panel panel-primary">
    <div>评论人：</div>
    <input type="text" class="form-control" name="username" v-model="username" />

    <div>评论内容：</div>
    <textarea class="form-control" name="content" v-model="content"></textarea>

    <button @click="getCommentList">发表评论</button>
  </div>
  <!-- 评论列表 -->

  <ul class="list-group" id="cmt-list">
    <li class="list-group-item">
      <span class="badge" style="background-color: #f0ad4e">评论时间：</span>
      <span class="badge" style="background-color: #5bc0de">评论人：</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      content: '',
    }
  },
  methods: {
    getCommentList() {
      console.log(this.content)
    },
    // postComment() {
    //   let postData = { username: this.username, content: this.content }
    //   this.$http.post('/api/article_comment', postData)
    //   if (res.status !== 0) return console.log('上传失败')
    //   console.log('上传成功')
    // },
  },
}
</script>

<style></style>
