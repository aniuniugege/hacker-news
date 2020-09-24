<template>
    <li class="comments-list" v-if="comment">
    <div class="list-item">
        <span>by</span>
        <a href="javascript:void(0)">{{comment.by}}</a>
        <span>{{comment.time | timeFilter}} &nbsp;ago</span>
        <a href="javascript:void(0)" @click="exandItem(comment)">{{comment | textFilter}}</a>
        <div class="text" v-html="comment.text"></div>
        <a href="javascript:void(0)" @click="reply">reply</a>

        <div class="comment-child" v-show="comment.expand">
            <comment v-for="item in comment.kids" :key="item" :id="item"></comment>
        </div>
    </div>
   </li>
</template>

<script>
import { pluralize } from '@/util'
export default {
  name: 'comment',
  props: ['id'],
  computed: {
    userId () {
      return this.$store.state.user.id
    },
    userName () {
      return this.$store.state.user.name
    },
    comment () {
      return this.$store.state.list.items[this.id]
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
    },
    textFilter (item) {
      if (!item.expand) {
        if (item.kids) {
          return `[${item.kids.length}more]`
        }
        return ''
      }
      return '[...]'
    }
  },
  methods: {
    exandItem (item) {
      this.$set(item, 'expand', !item.expand)
    },
    reply () {
      if (!this.userId) {
        alert('please loginIn')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.comments-list {
   .list-item {
      margin-top: 20px;
    }

    .text {
      margin-top: 10px;
    }

    p {
      margin-top: 6px;
      margin-bottom: 0;
    }
  }

.comment-child {
  margin-left: 20px;
}
</style>
