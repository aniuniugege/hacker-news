import Vue from 'vue'
import { fetchItems } from '@/api'

const state = {
    items: {/* [id: number]: Item */},
}
  
const mutations = {
    SET_ITEMS: (state, { items }) => {
        items.forEach(item => {
          if (item) {
            Vue.set(state.items, item.id, item)
          }
        })
    },
    ADD_ITEMS: (state, { items }) => {
        items.forEach(item => {
            if (item) {
                if (!state.items[item.parent].kids) {
                    state.items[item.parent].kids = []
                }
                state.items[item.parent].kids.push(item.id)  
            }
          })  
    }
}
  
const actions = {
    FETCH_ITEMS: ({ commit, state }, { ids }) => {
        const now = Date.now()
        ids = ids.filter(id => {
          const item = state.items[id]
          if (!item) {
            return true
          }
          if (now - item.__lastUpdated > 1000 * 60 * 3) {
            return true
          }
          return false
        })
        if (ids.length) {
          return fetchItems(ids).then(items => {
              commit('SET_ITEMS', { items })
          })
        } else {
          return Promise.resolve()
        }
      }
}

export default {
namespaced: true,
state,
mutations,
actions
}
  