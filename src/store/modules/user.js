const state = {
  id: '',
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_ID: (state, id) => {
    state.id = id
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
