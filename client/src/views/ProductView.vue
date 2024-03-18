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
      
    </div>
    <br>
    <div>
      <input type="number" v-model="quantity" min="1">
    </div>
    <br>
    <div class="buttons">
     
      
    <button class="btn btn-danger w-50 text-black bg-white-subtle p-1" @click="goBack">
        Back
      </button>
      <button class="btn btn-danger w-50 text-black bg-white-subtle p-1" @click="addCart(item.prodID)">Purchase</button>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quantity: 1, // makes quantiy start at 1
    };
  },
  computed: {
    getproduct() {
      this.$store.dispatch("getProduct", this.$route.params.prodID);
    },
    
  },
  methods: {
    goBack() {
      this.$router.go(-1); 
    },
    addCart(prodID){
      let add = {
        prodID:prodID,
        quantity:this.quantity
      }
      this.$store.dispatch("addCart", add)
    }
  },
  mounted() {
    this.getproduct; // Corrected the function invocation
  }
};
</script>

<style scoped>
img{
  height: 230px; 
  width: 360px !important; 
  padding: 10px; 
  padding-right: 50px; 
  margin-left: 50px;
  /* margin: 0 auto; */
  /* border-radius: 50px; */
}
h1{
  color: white;
  /* font-size: 20px; */
}
p{
  color: white;
  font-size: 20px;
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

.btn-danger{
  background-color: red;
  color: white !important;
  font-size: 20px;
  width: 120px !important;
  border: none;
  margin: 10px;
  padding: 15px !important;
  /* padding-right: 10px !important; */
  transition: background-color 0.5s ease;
}
.btn-danger:hover{
  background-color: rgb(147, 147, 147);
}
.buttons{
  margin-bottom: 150px;
}
</style>
