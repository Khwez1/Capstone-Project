import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = 'https://capstone-project-fl4x.onrender.com'

export default createStore({
  state: {
    products: [],

  },
  getters: {
    currentYear: () => {
      return new Date().getFullYear();
    },
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
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
    async getProduct({commit}){
      const {data} =  await axios.get(baseUrl+'/products')
      commit("setProducts", data);
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
    }
  },
  modules: {
  }
})
