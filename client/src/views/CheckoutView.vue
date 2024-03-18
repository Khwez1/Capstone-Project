<template>
    <div id="checkout">
        <h1>This is an checkout page</h1>
            <table class="mb-5">
              <tr class="thead">
                <th>pic</th>
                <th>name</th>
                <th>quantity</th>
                <th>price</th>
                <th>Total Price</th>
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
        <button @click="checkout">checkout</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    computed:{
        getUserCart(){
            this.$store.dispatch('getUserCart')
        },
        checkout(){
            this.$store.dispatch('checkout')
        }
    },
    methods: {
        deleteCartItem(prodID){
            let del = {
                prodID:prodID
            }
        this.$store.dispatch('deleteCartItem',del)
        }
    },
    mounted(){
        this.getUserCart
    }
}
</script>
<style scoped>
    
</style>