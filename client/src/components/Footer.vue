<template>
    <div class="container" id="footer">
        <div class="row justify-content-center fixed-bottom">
            <p>Khwezi.All Rights Reserved.{{ currentYear }}</p>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
    currentYear() {
      return this.$store.getters.currentYear;
    },
  },
}
</script>
<style scoped>
p{
margin-top: 10px;
   text-align: center;
   color: white;
   font-weight: bold;
}
#footer {
    color: black;
    background-color: black;
}
.container {
    background-color: #000;
    color:black
}
div {
    background-color: #000;
}

</style>