<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
<style>
#app{
  font-family: monospace;
}
body{
  background-color: black;
}

Footer{
  margin-top: 10px;
}
</style>
