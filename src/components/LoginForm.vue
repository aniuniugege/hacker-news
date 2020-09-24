<template>
    <form>
        <div class="control-group">
            <label for="">username:</label>
            <input type="text" placeholder="username" v-model="username"/>
        </div>
        <div class="control-group">
            <label for="">password:</label>
            <input type="password" placeholder="password" v-model="password" />
        </div>
        <input type="submit" value="login" @click="sumbit" />
    </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'LoginForm',
  data () {
     return {
         username: '',
         password: ''
     }
  },
  methods: {
    ...mapMutations('user', ['SET_ID', 'SET_NAME']),  
    sumbit () {
      this.SET_ID(Math.floor(Math.random() * 100 + 20000))
      this.SET_NAME(this.username)
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
</style>
