<template>
<div class="sign">
  <div class="main">
    <h4 class="title">
      <div class="normal-title">
        <router-link to="/login">login</router-link>
        <b>·</b>
        <router-link to="/register">register</router-link>
      </div>
    </h4>
    <div class="js-sign-in-container">
      <router-view />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="less" scoped>
  .sign {
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;

    .main {
      width: 400px;
      margin: 60px auto 0;
      padding: 50px 50px 30px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 8px rgba(0, 0, 0, .1);
      vertical-align: middle;
      display: inline-block;
    }

    .js-sign-in-container {
      margin-top: 20px;
    }
  }
</style>
