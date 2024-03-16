import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'

axios.defaults.withCredentials = true

const baseUrl = 'http://localhost:3376'

export default createStore({
  state: {
    product:[],
    products: [],
    cart:[],
    user:[],
    users:[],
    loggedIn: false
  },
  getters: {
    currentYear: () => {
      return new Date().getFullYear();
    },
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    setProduct(state, data) {
      state.product = data;
    },
    setCart(state, data) {
      state.cart = data;
    },
    setLogged(state,payload){
      state.loggedIn = payload
    },
    setUsers(state,data){
      state.users = data;
    },
    setUser(state,data){
      state.user = data;
    }
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const {data} = await axios.get(baseUrl+'/products');
        console.log(data);
        commit("setProducts", data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async getProduct({commit},prodID){
      const {data} =  await axios.get(baseUrl+'/products/'+prodID)
      console.log(data);
      commit("setProduct", data);
    },
    async addProduct({ commit }, newProduct) {
      try {
        let {data} = await axios.post(baseUrl + '/products', newProduct)
        commit ('setProducts', data)
        console.log(data);
      }catch (error) {
        console.error('Error adding Product:', error)
      }
      // window.location.reload()
    },
    async deleteProd({commit},id){
      const {data} = await axios.delete(baseUrl+'/products/'+id)
      commit("setProducts", data);
    },
    async editProd({commit},update){
      const {data} = await axios.patch(baseUrl+'/products/'+update.id,update)
      commit("setProducts", data);
    },
    //users 
    async getUsers({commit}){
      const {data} =  await axios.get(baseUrl+'/users')
      console.log(data);
      commit("setUsers", data);
    },
    async getUser({commit},email){
      const {data} =  await axios.get(baseUrl+'/users/'+email)
      console.log(data);
      commit("setUser", data);
    },
    async editUser({commit},update){
      const {data} = await axios.patch(baseUrl+'/products/'+update.id,update)
      commit("setUsers", data);
    },
    async addUser({ commit }, newUser) {
      try {
        let {data} = await axios.post(baseUrl + '/users', newUser)
        commit ('setUsers', data)
        console.log(data);
      }catch (error) {
        console.error('Error adding Product:', error)
      }
    },
    async editUser({commit},update){
      const {data} = await axios.patch(baseUrl+'/users/'+update.id,update)
      commit("setUsers", data);
    },
    async deleteUser({commit},userID){
      const {data} = await axios.delete(baseUrl+'/users/'+userID)
      commit("setUsers", data);
    },
    //Sign Up and Log In
    async loginUser({commit}, currentUser){
      let {data} = await axios.post(baseUrl + '/login', currentUser)
      $cookies.set('jwt', data.token)
      alert(data.msg)
      router.push('/')
      // window.location.reload()
      commit('setLogged', true)
    },
    async logOut(context){
      let cookies = cookies.keys()
      console.log(cookies)
      cookies.remove('jwt')
      window.location.reload()
      let { data } = await axios.delete(baseUrl + '/logout')
      alert(data.msg)
    },
    //cart
    async addCart({commit},newProduct){
      const {data} = await axios.post(baseUrl+'/cart',newProduct)
      commit("setCart",alert(data.msg));
     },
    //  async getCart({commit}){
    //   const {data} =  await axios.get(baseUrl+'/cart')
    //   commit("setCart",data);
    //  },
     async getCarts({commit}){
      const {data} =  await axios.get(baseUrl+'/cart')
      commit("setCart",data);
     },
     async editCart({commit},update){
      const {data} = await axios.patch(baseUrl+'/cart/'+update.id,update)
      commit("setCart", data);
    },
    async deleteCart({commit},userID){
      const {data} = await axios.delete(baseUrl+'/cart/'+userID)
      commit("setCart", data);
    }
  },
  modules: {
  }
})
