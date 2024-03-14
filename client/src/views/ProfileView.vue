<template>
    <div v-for="item in $store.state.user" :key="item.userID" class="justify-content-center" id="profile">

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