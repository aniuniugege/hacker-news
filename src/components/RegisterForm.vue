<template>
  <form>
    <div class="control-group">
       <label for="">昵称:</label>
      <input type="text" placeholder="昵称" />
    </div>
    <div class="control-group">
      <label for="">用户名:</label>
      <input type="text" placeholder="用户名" />
    </div>
    <div class="control-group">
      <label for="">设置密码:</label>
      <input type="password" placeholder="设置密码" />
    </div>
    <div class="control-group">
      <label for="">确定密码:</label>
      <input type="password" placeholder="确定密码" />
    </div>
    <input type="submit" value="注册" />
  </form>
</template>

<script>
export default {
  name: 'RegisterForm'
}
</script>

<style scoped>

</style>
