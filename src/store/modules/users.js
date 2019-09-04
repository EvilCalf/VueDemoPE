import axios from '../../plugins/axios'

const state = {
  login: false,
  phonenumber: '',
}

const mutations = {
  SET_LOGIN: (state, login) => {
        state.login = login
  },
  SET_PHONENUMBER: (state, phonenumber) => {
        state.avatar = phonenumber
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
  putLogin()
  {
    return state.login
  },
  login()
  {
    state.login = true
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
