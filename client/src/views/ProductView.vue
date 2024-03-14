<template>
  <div v-for="item in $store.state.product" :key="item.prodID" class="justify-content-center" id="product" >
    <img
      class="card-img-top"
      :src="item.prodUrl"
      alt="Product Image"
    />
    <h1 class="text-white">{{ item.prodName }}</h1>
    <div>
      <p>Amount: R{{ item.amount }}</p>
      <button
        class="btn btn-danger mx-5 w-50 text-black bg-white-subtle p-1"
        @click="goBack"
      >
        Back
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductView",
  computed: {
      getproduct() {
        this.$store.dispatch("getProduct", this.$route.params.prodID);
      },
    },
    mounted() {
      this.getproduct; // Corrected the function invocation
    }
};
</script>

<style scoped>
img {
  max-width: 20%;
  height: auto;
  border-radius: 50%;
  display: block;
  margin: 1rem auto;
}

@media (max-width: 768px) {
  .card-text {
    padding: 2rem 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  .btn {
    padding: 0.1rem;
    width: auto;
    font-size: 0.1rem;
  }
}

.justify-content-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
