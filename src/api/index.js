// import Firebase from 'firebase/app'
// import 'firebase/database'

// const createAPI = ({ config, version }) => {
//   Firebase.initializeApp(config)
//   return Firebase.database().ref(version)
// }

// const api = createAPI({
//    version: 'v0',
//    config: {
//       databaseURL: 'https://hacker-news.firebaseio.com'
//    }
// })

import axios from 'axios'

axios.defaults.baseURL = 'https://hacker-news.firebaseio.com/v0'


export const fetchItem = (id) => {
  return axios(`/item/${id}.json`).then((resp) => {
     if (resp.status ==  200) {
        return Promise.resolve(resp.data)
     }
     return Promise.reject({})
  }).catch(error => {
   return Promise.reject(error)
  })
}

export const fetchItems = (ids) => {
   return Promise.all(ids.map(id => fetchItem(id)))
}

export const fetchUser = (id) => {
   return axios(`user/${id}`).then((resp) => {
      if (resp.status ==  200) {
         return Promise.resolve(resp.data)
      }
      return Promise.reject({})
   }).catch(error => {
      return Promise.reject(error)
   })
 }


























