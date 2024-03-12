<template>
  <div class="products">
    <h1>This is an products page</h1>
    <br>
    <div v-for="item in $store.state.products" :key="item" class="card" style="width: 18rem;">
    <img :src="item.prodUrl" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ item.prodName }}</h5>
        <p class="card-text">{{ item.category }}</p>
        <p class="quantity">{{item.quantity}}</p>
        <button @click="" class="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    computed: {
    getProducts(){
      this.$store.dispatch('getProducts')
    },
  },
  
  mounted(){
    this.getProducts
  },
}
</script>
<style scoped>
    
</style>