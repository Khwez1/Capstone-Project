<template>
  <div id="products">
    <h1 class="main-heading">Explore Our Products Below!</h1>
    <div class="container">
      <!-- Search, Sort, and Category Section -->
      <div class="search-sort-container">
        <input v-model="searchTerm" type="text" placeholder="Search Products" class="search-input">
        <button class="category-btn" @click="toggleCategory">{{ category }}</button>
        <button class="sort-btn" @click="sortProducts">Sort</button>
      </div>
      <div class="row justify-content-center text-center p-4">
        <div v-for="item in filteredProducts" :key="item.prodID" class="card" style="border-color: red; margin-bottom: 20px;">
          <div class="card-head">
            <img :src="item.prodUrl" class="card-img-top">
          </div>
          <hr style="color: red;">
          <div class="card-body">
            <h5 class="card-title">{{ item.prodName }}</h5>
            <p class="card-text">{{ item.category }}</p>
            <p class="card-text">R{{ item.amount }}</p>
            <p class="quantity">{{ item.quantity }}</p>
            <router-link :to="{ name: 'product', params: { prodID: item.prodID } }">
              <button class="btn btn-primary mx-1 w-100 text-white">View Product</button>
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
  data() {
    return {
      searchTerm: '',
      categories: ['All Products', 'Sport', 'Music'],
      currentCategoryIndex: 0,
      shouldSort: false
    };
  },
  computed: {
    products() {
      return this.$store.state.products; // Assuming you have products in your store state
    },
    filteredProducts() {
      let filtered = this.products;

      // Search filter
      if (this.searchTerm.trim() !== '') {
        const term = this.searchTerm.toLowerCase();
        filtered = filtered.filter(item => item.prodName.toLowerCase().includes(term));
      }

      // Category filter
      if (this.categories[this.currentCategoryIndex] !== 'All Products') {
        filtered = filtered.filter(item => item.category === this.categories[this.currentCategoryIndex]);
      }

      // Sort filter
      if (this.shouldSort) {
        filtered.sort((a, b) => a.amount - b.amount); // Assuming you want to sort by amount, adjust this if necessary
      }

      return filtered;
    },
    category() {
      return this.categories[this.currentCategoryIndex];
    }
  },
  methods: {
    toggleCategory() {
      this.currentCategoryIndex = (this.currentCategoryIndex + 1) % this.categories.length;
    },
    sortProducts() {
      this.shouldSort = !this.shouldSort;
    }
  },
  mounted() {
    this.$store.dispatch('getProducts'); // Assuming you need to fetch products when the component mounts
  }
};
</script>

<style>
/* Main Heading */
.main-heading {
  text-align: center;
  color: rgb(255, 255, 255); /* Make main heading white */
  margin-top: 20px;
  margin-bottom: 50px;
}

/* Search, Sort, and Category Buttons */
.search-sort-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 60px;
}

.container{
  margin-bottom: 50px;
}

.search-input {
  padding: 8px 12px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  margin-right: 10px;
}

.category-btn,
.sort-btn {
  padding: 8px 20px;
  border: 1px solid #ffffff; /* Make button borders black */
  border-radius: 5px;
  background-color: rgb(255, 255, 255); /* Make button background black */
  color: rgb(0, 0, 0); /* Make button text white */
  cursor: pointer;
  margin-right: 10px;
}

.category-btn:hover,
.sort-btn:hover {
  background-color: #333; /* Darken button background on hover */
}

/* Cards */
.card {
  border: 2px solid rgb(255, 255, 255) !important;
  width: 380px;
  margin: 0 10px 20px;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.card-head {
  padding: 1rem;
}

.card-title {
  color: rgb(0, 0, 0);
}

.card-text {
  color: rgb(0, 0, 0);
}

.quantity {
  color: rgb(0, 0, 0);
}
.btn-primary{
  background-color: black;
  color: white !important;
  font-size: 18px;
  width:50px;
  border: none;
  transition: background-color 0.5s ease;
}
.btn-primary:hover{
  background-color: red;
}

img{
  height: 230px; 
  width: 360px !important; 
  padding: 10px; 
  padding-right: 50px; 
  /* border-radius: 50px; */
}
</style>
