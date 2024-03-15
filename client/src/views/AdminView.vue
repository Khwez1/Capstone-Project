<template>
    <div id="admin">
        <h1>This is an admin page</h1>
          <br>
          <div class="container ">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">prodName</label>
              <input v-model="prodName" type="email" class="form-control" id="exampleFormControlInput1" placeholder="firstName">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">quantity</label>
              <input v-model="quantity" type="email" class="form-control" id="exampleFormControlInput1" placeholder="lastName">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">amount</label>
              <input v-model="amount" type="email" class="form-control" id="exampleFormControlInput1" placeholder="userRole">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">category</label>
              <input v-model="category" type="email" class="form-control" id="exampleFormControlInput1" placeholder="emailAdd">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" placeholder="Password" class="form-label">ProdUrl</label>
              <input v-model="prodUrl" placeholder="prodUrl" class="form-control" id="exampleFormControlTextarea1" rows="1"></input>
            </div>
          </div>
          <div class="d-flex justify-content-center" style="text-align: center;"><button @click="addProduct">Add</button></div>
          <table class="table">
              <tr class="thead">
                  <th>id</th>
                  <th>prod_name</th>
                  <th>quantity</th>
                  <th>amount</th>
                  <th>category</th>
                  <th>ProdURL</th>
              </tr>
              <tbody v-for="item in $store.state.products" :key="item.id" >
                  <td>{{item.prodID}}</td>
                  <td>{{item.prodName}}</td>
                  <td>{{item.quantity}}</td>
                  <td>{{item.amount}}</td>
                  <td>{{item.category}}</td>
                  <td><img :src="item.prodUrl" style="height: 150px;width: 200px;"></td>
                  <td><button @click="editProd(item.prodID)">Edit</button></td>
                  <td><button @click="deleteProd(item.prodID)">Delete</button></td>
              </tbody>
          </table>
          <div class="container ">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">firstName</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="firstName">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">lastName</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="lastName">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">userRole</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="userRole">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">emailAdd</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="emailAdd">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" placeholder="Password" class="form-label">Password</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>
          </div>
      </div>
</template>
<script>
export default {
    data(){
    return{
      prodName: null,
      quantity:null,
      amount:null,
      category:null,
      prodUrl:null
    }
  },
  methods: {
    deleteProd(id){
      this.$store.dispatch('deleteProd',id)
    },
    editProd(id){
      let edit = {
        id:id,
        prod_name: this.prod_name,
        quantity: this.quantity,
        amount:this.amount,
        category:this.category,
        ProdURL:this.ProdURL
      }
      this.$store.dispatch('editProd',edit)
    }
  },
  computed: {
    getProducts(){
      this.$store.dispatch('getProducts')
    },
    addProduct(){
      this.$store.dispatch('addProduct',this.$data)
    }
  },
  mounted() {
    this.getProducts
  },
}
</script>
<style scoped>
    
</style>