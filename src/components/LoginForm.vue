<template>
    <form>
        <div class="control-group">
            <label for="">用户名:</label>
            <input type="text" placeholder="用户名" />
        </div>
        <div class="control-group">
            <label for="">密码:</label>
            <input type="password" placeholder="密码" />
        </div>
        <input type="submit" value="登录" />
    </form>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style scoped>
</style>
