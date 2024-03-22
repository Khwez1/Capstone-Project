<template>
    <div id="checkout">
        <h1>This is a checkout page</h1>
        <div v-if="cart.length !== 0" class="container">
            <table class="mb-5">
                <tr class="thead">
                    <th>pic</th>
                    <th>name</th>
                    <th>quantity</th>
                    <th>price</th>
                    <th>Total Price</th>
                    <th>Action</th>
                </tr>
                <tbody v-for="cart in $store.state.cart" :key="cart.orderID" >
                    <td><img :src="cart.prodUrl" style="height: 150px;width: 200px;"></td>
                    <td>{{cart.prodName}}</td>
                    <td>{{cart.sold_quantity}}</td>
                    <td>{{cart.price_per_unit}}</td>
                    <td>{{cart.total_price}}</td>
                    <td><button @click="deleteCartItem(cart.prodID)">Delete</button></td>
                </tbody>
            </table>
        </div>
        <div v-else>

        </div>
        <div class="buttonLast">
            <button @click="checkout">Checkout</button>
        </div>
    </div>
</template>
<script>
import Spinner from '@/components/Spinner.vue'
export default {
    components :{
        Spinner
    },
    computed:{
        getUserCart(){
            this.$store.dispatch('getUserCart')
        },
        checkout(){
            this.$store.dispatch('checkout')
        },
        cart(){
            return this.$store.state.cart
        }
    },
    methods: {
        deleteCartItem(prodID){
            console.log(prodID);
            this.$store.dispatch('deleteCartItem',prodID)
        }
    },
    mounted(){
        this.getUserCart
    }
}
</script>
<style scoped>
#checkout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white; /* Set text color to white */
  
}

.container {
  text-align: center;
  margin-left: 220px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white; /* Set text color to white */
}

table {
  width: 80%;
  border-collapse: collapse;
  color: white; /* Set text color to white */
}

thead {
  background-color: #f4f4f4;
}

th, td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: red;
  color: white;
}

.buttonLast{
    margin-bottom: 100px;
}
</style>
