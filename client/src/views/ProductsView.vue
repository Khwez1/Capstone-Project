<template>
    <div class="products">
        <h1>This is an products page</h1>
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