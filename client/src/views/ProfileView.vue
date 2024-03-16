<template>
  <div v-for="user in $store.state.user" :key="user.userID" class="justify-content-center" id="profile">
    <div class="card-body">
      <h5 class="card-title">{{ user.firstName }}</h5>
      <p class="card-text">{{ user.lastName }}</p>
      <p class="quantity">{{user.quantity}}</p>
    </div>
  </div>
</template>
<script>
export default {
    computed: {
    getUser(){
      this.$store.dispatch('getUser')
    },
  },
  mounted() {
    this.getUser
  },
}
</script>
<style>
    
</style>