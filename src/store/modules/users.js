import axios from '../../plugins/axios'

const state = {
  login: false,
  phoneNumber: "15869185025",
}

const mutations = {
  SET_LOGIN: (state, login) => {
    state.login = login
  },
  SET_phoneNumber: (state, phoneNumber) => {
    state.phoneNumber = phoneNumber
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
  login({ commit }, phoneNumber) {
    if (phoneNumber == "") phoneNumber = "admin"
    commit('SET_LOGIN', true)
    commit('SET_phoneNumber', phoneNumber)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
