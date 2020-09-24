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
    }
}
  
const actions = {
    FETCH_ITEMS: ({ commit, state }, { ids }) => {
        // on the client, the store itself serves as a cache.
        // only fetch items that we do not already have, or has expired (3 minutes)
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
  