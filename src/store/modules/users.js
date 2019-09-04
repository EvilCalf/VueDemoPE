import axios from '../../plugins/axios'

const state = {
  login: false,
  phonenumber: "15869185025",
}

const mutations = {
  SET_LOGIN: (state, login) => {
    state.login = login
  },
  SET_PHONENUMBER: (state, phonenumber) => {
    state.phonenumber = phonenumber
  },
}


const actions = {
  getShops() {
    return axios.get(`/data/shops.json`)
  },
  getPlayList() {
    return axios.get(`/data/playList.json`)
  },
  getCarList() {
    return axios.get(`/data/carList.json`)
  },
  getOrderList() {
    return axios.get(`/data/orders.json`)
  },
  getCouponList() {
    return axios.get(`/data/coupons.json`)
  },
  login({ commit }, phonenumber) {
    if(phonenumber=="") phonenumber="admin"
    commit('SET_LOGIN', true)
    commit('SET_PHONENUMBER', phonenumber)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
