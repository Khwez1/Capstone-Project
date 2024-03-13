import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'

axios.defaults.withCredentials = true


const baseUrl = 'https://capstone-project-fl4x.onrender.com'

export default createStore({
  state: {
    product:[],
    products: [],
    cart:[],
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
    async addProduct({commit},newProduct){
      const {data} = await axios.post(baseUrl+'/products',newProduct)
      commit("setProducts", data);
     },
     async deleteProd({commit},id){
      const {data} = await axios.delete(baseUrl+'/products/'+id)
      commit("setProducts", data);
    },
    async editProd({commit},update){
      const {data} = await axios.patch(baseUrl+'/products/'+update.id,update)
      commit("setProducts", data);
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
      const {data} = await axios.post(baseUrl+'/products',newProduct)
      commit("setCart",alert(data.msg));
     },
     async getCart({commit}){
      const {data} =  await axios.get(baseUrl+'/products')
      commit("setCart",data);
     }
  },
  modules: {
  }
})
