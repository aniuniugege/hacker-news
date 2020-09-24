<template>
  <div class="home">
    <div class="main" v-if="item">
      <div>
         <a class="main-title" :href="href">{{item.title}}</a>
      </div>
      <div class="sub-text">
        <span class="score">{{item.score}}points</span>
        <span>by</span>
        <a href="javascript:void(0)">{{item.user}}</a>
        <span>{{item.time | timeFilter}} &nbsp;ago</span>
        <a href="javascript:void(0)" @click="ifLogin">hide</a>
        <a href="javascript:void(0)" @click="ifLogin">post</a>
        <a href="javascript:void(0)" @click="ifLogin">favorite</a>
        <a href="javascript:void(0)" @click="ifLogin">{{item.comments}}comments</a>
      </div>

      <div class="comments">
        <textarea placeholder="add comments" v-model="newComments" cols="50" rows="10"></textarea>
        <div>
           <input type="button" value="add comments" @click="addComments"/>
        </div>
      </div>
      <ul class="comment">
        <comment v-for="id in item.kids" :key="id" :id="id"></comment>
      </ul>

    </div>
  </div>
</template>

<script>
import { pluralize } from '@/util'
import comment from '@/components/comment'
const itemId = 21565624
export default {
  name: 'Home',
  components: {
    comment
  },
  data () {
    return {
      title: '',
      href: '',
      score: '',
      user: '',
      time: '',
      comments: 0,
      itemId,
      newComments: ''
    }
  },
  filters: {
    timeFilter (time) {
      const between = Date.now() / 1000 - Number(time)
      if (between < 3600) {
        return pluralize(~~(between / 60), ' minute')
      } else if (between < 86400) {
        return pluralize(~~(between / 3600), ' hour')
      } else if (between < 2592000) {
        return pluralize(~~(between / 86400), ' day')
      } else {
        return pluralize(~~(between / 2592000), ' month')
      }
    }
  },
  computed: {
    userId () {
      return this.$store.state.user.id
    },
    userName () {
      return this.$store.state.user.name
    },
    item () {
      return this.$store.state.list.items[itemId]
    }
  },
  created () {
    this.$store.dispatch('list/FETCH_ITEMS', {
      ids: [itemId]
    })
  },
  watch: {
    item: 'fetchComments'
  },

  methods: {
    fetchComments () {
      if (!this.item || !this.item.kids) {
        return
      }
      fetchComments(this.$store, this.item)
    },
    addComments () {
      if (!this.userId) {
        alert('please loginIn then add comments')
        this.$router.push('/login')
        return
      }
      console.log('signIn')
      // 调用评论接口
      // this.$store.commit('list/')
    },
    ifLogin () {
      if (!this.userId) {
        alert('please loginIn')
        this.$router.push('/login')
      }
    }
  }
}

function fetchComments (store, item) {
  if (item && item.kids) {
    return store.dispatch('list/FETCH_ITEMS', {
      ids: item.kids
    }).then(() => Promise.all(item.kids.map(id => {
      return fetchComments(store, store.state.list.items[id])
    })))
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  background-color: #f9f9f9;

  .main {
    width: 1414px;
    margin: 0 auto;
    padding: 24px;
    background-color: #f6f6f0;
    box-sizing: border-box;

    &-title {
      font-size: 10pt;
      color: #828282;
    }
  }

  .sub-text {
    margin: 10px 0;
    font-size: 10pt;
    color: #828282;

    span, a {
      margin: 0 2px;
    }
  }
}
</style>
