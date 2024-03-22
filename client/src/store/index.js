import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
import Swal from 'sweetalert2'
axios.defaults.withCredentials = true
const baseUrl = 'https://capstone-project-fl4x.onrender.com'
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
        console.log(data);
        Swal.fire({
          title: 'Product Added Successfully',
          text: 'The product has been added successfully.',
          icon: 'success',
          timer: 3000,
          showConfirmButton: true
        }).then((result) => {
          if (result.isConfirmed) {
          commit ('setProducts', data)
          setTimeout(() => {
            window.location.reload()
          },4)
          }
        });
      }catch (error) {
        console.error('Error adding Product:', error)
      }
    },
    async deleteProd({commit},id){
      const {data} = await axios.delete(baseUrl+'/products/'+id)
      Swal.fire({
        title: 'Product Deleted Successfully',
        text: 'The product has been deleted successfully.',
        icon: 'success',
        timer: 3000,
        showConfirmButton: true
      }).then((result) => {
        if (result.isConfirmed) {
      commit("setProducts", data);
      setTimeout(() =>{
        window.location.reload()
      },4)
      }
      })
    },
    async editProd({commit},update){
    try{ const {data} = await axios.patch(baseUrl+'/products/'+update.id,update)
      Swal.fire({
        title: 'Product Edited Successfully',
        text: 'The product has been edited successfully.',
        icon: 'success',
        timer: 3000,
        showConfirmButton: true
      }).then((result) => {
        if (result.isConfirmed) {
      commit("setProducts", data);
      setTimeout(() =>{
        window.location.reload()
      },4)
      }
      })
    } catch (error) {
      // Display error message using SweetAlert if user addition fails
      if (error.response) {
          // Handling error response from backend
          Swal.fire({
              title: 'Error editing product',
              text: error.response.data.error || 'An error occurred while editing product',
              icon: 'error',
              timer: 3000,
              showConfirmButton: true
          });
      } else {
          // Handling other types of errors
          console.error('Error adding user:', error);
        }
    }
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
    try{ const {data} = await axios.patch(baseUrl+'/products/'+update.id,update)
      Swal.fire({
        title: 'User Edited Successfully',
        text: 'The product has been Edited successfully.',
        icon: 'success',
        timer: 3000,
        showConfirmButton: true
      }).then((result) => {
        if (result.isConfirmed) {
      commit("setUsers", data);
      setTimeout(() =>{
        window.location.reload()
      },4)
        }
      })
    } catch (error) {
      // Display error message using SweetAlert if user addition fails
      if (error.response) {
          // Handling error response from backend
          Swal.fire({
              title: 'Error editing User',
              text: error.response.data.error || 'An error occurred while editing user',
              icon: 'error',
              timer: 3000,
              showConfirmButton: true
          });
      } else {
          // Handling other types of errors
          console.error('Error adding user:', error);
      }
    }
    },
    async addUser({ commit }, newUser) {
      try {
          let { data } = await axios.post(baseUrl + '/users', newUser);
          console.log(data);
          Swal.fire({
              title: 'User Added Successfully',
              text: 'The user has been added successfully.',
              icon: 'success',
              timer: 3000,
              showConfirmButton: true
          }).then((result) => {
            if (result.isConfirmed) {
              commit('setUsers', data);
              setTimeout(() => {
                window.location.reload();
              },4)
            }
          });
      } catch (error) {
          // Display error message using SweetAlert if user addition fails
          if (error.response) {
              // Handling error response from backend
              Swal.fire({
                  title: 'Error Adding User',
                  text: error.response.data.error || 'An error occurred while adding user',
                  icon: 'error',
                  timer: 3000,
                  showConfirmButton: true
              });
          } else {
              // Handling other types of errors
              console.error('Error adding user:', error);
          }
      }
    },
    async editUser({commit},update){
      const {data} = await axios.patch(baseUrl+'/users/'+update.id,update)
      Swal.fire({
        title: 'User edited Successfully',
        text: 'The user has been edited successfully.',
        icon: 'success',
        timer: 3000,
        showConfirmButton: true
      }).then((result) => {
        if (result.isConfirmed) {
        commit("setUsers", data);
        setTimeout(()=>{
          window.location.reload()
        },4)
        }
      })
    },
    async deleteUser({commit},userID){
      const {data} = await axios.delete(baseUrl+'/users/'+userID)
      Swal.fire({
        title: 'User Deleted Successfully',
        text: 'The user has been deleted successfully.',
        icon: 'success',
        timer: 3000,
        showConfirmButton: true
      }).then((result) => {
        if (result.isConfirmed) {
      commit("setUsers", data);
      setTimeout(()=>{
        window.location.reload()
      },4)
      }
    })
    },
    //Sign Up and Log In
    async loginUser({ commit }, currentUser) {
      try {
          let { data } = await axios.post(baseUrl + '/login', currentUser);
          $cookies.set('jwt', data.token);
          Swal.fire({
              title: 'Login Successful',
              text: data.msg,
              icon: 'success',
              timer: 3000,
              showConfirmButton: true
          }).then((result) => {
              if (result.isConfirmed) {
                  router.push('/');
                  commit('setLogged', true);
                  setTimeout(() => {
                      window.location.reload();
                  }, 4);
              }
          });
        }catch (error) {
          // Checking error.response for error details
          if (error.response) {
              // Handling error response with status code 401
              Swal.fire({
                  title: 'Login Failed',
                  text: error.response.data.msg,
                  icon: 'error',
                  timer: 3000,
                  showConfirmButton: true
              });
          } else {
              // Handling other types of errors
              console.error('Error occurred:', error.message);
          }
      }
    },
    async signup({ commit }, newUser) {
      try {
          let { data } = await axios.post(baseUrl + '/signup', newUser);
          commit('setUsers', data);
          console.log(data);
          // Display success message using SweetAlert
          Swal.fire({
              title: 'Signup Successful',
              text: data.msg,
              icon: 'success',
              timer: 3000,
              showConfirmButton: true
          });
      } catch (error) {
          // Display error message using SweetAlert if signup fails
          if (error.response) {
              // Handling error response from backend
              Swal.fire({
                  title: 'Signup Failed',
                  text: error.response.data.error || 'An error occurred while adding user',
                  icon: 'error',
                  timer: 3000,
                  showConfirmButton: true
              });
          } else {
              // Handling other types of errors
              console.error('Error adding user:', error);
          }
      }
    },  
    async editUserProfile({commit},edit){
      const {data} = await axios.patch(baseUrl+'/users/user',edit)
      Swal.fire({
        title: 'Update Successful',
        text: 'your details have been updated',
        icon: 'success',
        timer: 3000,
        showConfirmButton: true
    }).then((result) => {
        if (result.isConfirmed) {
          commit("setUser", data);
          setTimeout(()=>{
            window.location.reload()
          },4)
        }
      })
    },
    //cart
    async addCart({ commit }, newProduct) {
      try {
          const { data } = await axios.post(baseUrl + '/cart/user', newProduct);
          commit("setCart", data.msg);
          // Display success message using SweetAlert
          Swal.fire({
              title: 'Product Added to Cart',
              text: data.msg,
              icon: 'success',
              timer: 3000,
              showConfirmButton: true
          }).then(() => {
              // Reload the page after displaying the SweetAlert
              window.location.reload();
          });
      } catch (error) {
          // Display error message using SweetAlert if adding product to cart fails
          if (error.response) {
              // Handling error response from backend
              Swal.fire({
                  title: 'Error Adding Product to Cart',
                  text: error.response.data.error || 'An error occurred while adding product to cart',
                  icon: 'error',
                  timer: 3000,
                  showConfirmButton: true
              });
          } else {
              // Handling other types of errors
              console.error('Error adding product to cart:', error);
          }
      }
    },  
    async addCartByAdmin({ commit }, newProduct) {
      try {
          const { data } = await axios.post(baseUrl + '/cart/admin', newProduct);
          commit("setCart", data.msg);
          // Display success message using SweetAlert
          Swal.fire({
              title: 'Product Added to Cart',
              text: data.msg,
              icon: 'success',
              timer: 3000,
              showConfirmButton: true
          }).then(() => {
              // Reload the page after displaying the SweetAlert
              window.location.reload();
          });
      } catch (error) {
          // Display error message using SweetAlert if adding product to cart fails
          if (error.response) {
              // Handling error response from backend
              Swal.fire({
                  title: 'Error Adding Product to Cart',
                  text: error.response.data.error || 'An error occurred while adding product to cart',
                  icon: 'error',
                  timer: 3000,
                  showConfirmButton: true
              });
          } else {
              // Handling other types of errors
              console.error('Error adding product to cart:', error);
          }
      }
    },
     async getUserCart({commit}){
      try{
        const {data} =  await axios.get(baseUrl+'/cart/user')
        commit("setCart",data);
      }catch(error){
        commit("setCart", [])
      }
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
      Swal.fire({
        title: 'Cart Edited Successfully',
        text: 'The cart has been edited successfully.',
        icon: 'success',
        timer: 3000,
        showConfirmButton: true
      }).then((result) => {
        if (result.isConfirmed) {
        commit("setCart", data);
        setTimeout(()=>{
          window.location.reload()
        },4)
      }
    })
    },
    async deleteCart({commit},userID){
      const {data} = await axios.delete(baseUrl+'/cart/'+userID)
      Swal.fire({
        title: 'Checkout Successful',
        text: data.msg,
        icon: 'success',
        timer: 3000,
        showConfirmButton: true
      }).then((result) => {
        if (result.isConfirmed) {
        commit("setCart", data);
        setTimeout(()=>{
          window.location.reload()
        },4)
      }
    })
    },
    async deleteCartItem({commit},prodID){
      const {data} = await axios.delete(baseUrl+'/cart/user/'+prodID)
      Swal.fire({
        title: 'Are you sure?',
        text: 'This Item will be removed from cart',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgb(71, 98, 218)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, removed from cart',
        position: 'top',
      }).then((result) => {
          if (result.isConfirmed) {
        commit("setCart", data);
        setTimeout(()=>{
          window.location.reload()
        },4)
      }
    })
    },
    async checkout({commit}){
      const {data} = await axios.delete(baseUrl+'/cart')
      Swal.fire({
        title: 'Cart Deleted Successfully',
        text: data.msg,
        icon: 'success',
        timer: 3000,
        showConfirmButton: true
      }).then((result) => {
        if (result.isConfirmed) {
      commit("setCart", data)
      router.push('/products');
      setTimeout(()=>{
        window.location.reload()
      },4)
    }
  })
  },
},
  modules: {
  }
})