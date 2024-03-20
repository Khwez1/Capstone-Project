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
    adminIs: null
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
    setLogged(state,data){
      state.adminIs = data
    },
    setUsers(state,data){
      state.users = data;
    },
    setUser(state,data){
      state.user = data;
    }
  },
  actions: {
    //admin
    async getUserRole({ commit }) {
      try {
        const response = await axios.get(baseUrl + '/users/admin');
        const {isAdmin} = response.data; // Assuming response.data directly represents admin status
        console.log(isAdmin);
        commit("setLogged", isAdmin); // Committing just the admin status
      } catch (error) {
        console.error('Error fetching user role:', error);
        // You can handle errors more gracefully, such as by setting adminIs to null or false
        commit("setLogged", false); // Setting adminIs to false in case of error
      }
    },
    //products
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
        // window.location.reload()
      }catch (error) {
        console.error('Error adding Product:', error)
      }
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
      const {data} =  await axios.get(baseUrl+'/users/user')
      console.log(data);
      commit("setUser", data);
    },
    async editUser({commit},update){
      const {data} = await axios.patch(baseUrl+'/products/'+update.id,update)
      commit("setUsers", data);
    },
    async addUser({ commit }, newUser){
      try {
        let {data} = await axios.post(baseUrl + '/users', newUser)
        commit ('setUsers', data)
        console.log(data);
      }catch (error) {
        console.error('Error adding user:', error)
      }
    },
    async signup({ commit }, newUser) {
      try {
        let {data} = await axios.post(baseUrl + '/signup', newUser)
        commit ('setUsers', alert(data.msg))
        console.log(data);
      }catch (error) {
        console.error('Error adding user:', error)
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
      setTimeout(()=> {
        window.location.reload()
      },10)
    },
    async editUserProfile({commit},edit){
      const {data} = await axios.patch(baseUrl+'/users/user',edit)
      commit("setUser", data);
    },
    //cart
    async addCart({commit},newProduct){
      const {data} = await axios.post(baseUrl+'/cart/user',newProduct)
      commit("setCart",alert(data.msg));
     },
    async addCartByAdmin({commit},newProduct){
      const {data} = await axios.post(baseUrl+'/cart',newProduct)
      commit("setCart",alert(data.msg));
     },
     async getUserCart({commit}){
      const {data} =  await axios.get(baseUrl+'/cart/user')
      commit("setCart",data);
     },async getCarts({ commit }) {
      try {
        const response = await axios.get(baseUrl + '/cart');
        const data = response.data;
        commit("setCart", data);
      } catch (error) {
        // Handle the error appropriately, for example, logging or displaying a message to the user.
        console.error('Error fetching carts:', error);
        // Optionally, you can commit an empty cart or handle the error in another way.
        commit("setCart", []);
      }
    },    
     async editCart({commit},update){
      const {data} = await axios.patch(baseUrl+'/cart/'+update.id,update)
      commit("setCart", data);
    },
    async deleteCart({commit},userID){
      const {data} = await axios.delete(baseUrl+'/cart/'+userID)
      commit("setCart", data);
    },
    async deleteCartItem({commit},prodID){
      const {data} = await axios.delete(baseUrl+'/cart/user/'+prodID)
      commit("setCart", data);
    },
    async checkout({commit}){
      const {data} = await axios.delete(baseUrl+'/cart')
      commit("setCart", alert(data.msg))
      router.push('/products');
    }
  },
  modules: {
  }
})