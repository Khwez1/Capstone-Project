<template>
  <div id="products">
    <h1>This is an products page</h1>
    <div class="container">
      <div class="row justify-content-center text-center p-4">
        <div v-for="item in $store.state.products" :key="item" class="card" style="border-color: red; width: 18rem;  margin-bottom: 10px;margin-right: 10px;margin-left: 10px; border-radius: 20px; background-color: black;">
          <div class="card-head">
            <img :src="item.prodUrl" class="card-img-top" style="height: 150px; padding: 1rem; border-radius: 25px;" >
          </div>
            <hr style="color: red;">
          <div class="card-body">
            <h5 class="card-title">{{ item.prodName }}</h5>
            <p class="card-text">{{ item.category }}</p>
            <p class="quantity">{{item.quantity}}</p>
            <router-link @click="getProduct(item.prodID)" :to="{name: 'product', params: {prodID:item.prodID }}">
              <button class="btn btn-primary mx-1 w-100 text-black">View Product</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>
<script>
export default {
    computed: {
    getProducts(){
      this.$store.dispatch('getProducts')
    },
  },
  methods: {
    getProduct(prodID){
      this.$store.dispatch('getProduct',prodID);
    }
  },
  mounted(){
    this.getProducts
  },
}
</script>
<style scoped>

</style>