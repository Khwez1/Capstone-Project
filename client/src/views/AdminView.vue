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
              <label for="exampleFormControlInput1" class="form-label">description</label>
              <input v-model="description" type="email" class="form-control" id="exampleFormControlInput1" placeholder="userRole">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">date</label>
              <input v-model="date" type="email" class="form-control" id="exampleFormControlInput1" placeholder="userRole">
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
          <table class="table products">
              <tr class="thead">
                  <th>id</th>
                  <th>prod_name</th>
                  <th>quantity</th>
                  <th>amount</th>
                  <th>description</th>
                  <th>date</th>
                  <th>category</th>
                  <th>ProdURL</th>
              </tr>
              <tbody v-for="item in $store.state.products" :key="item.prodID" >
                  <td>{{item.prodID}}</td>
                  <td>{{item.prodName}}</td>
                  <td>{{item.quantity}}</td>
                  <td>{{item.amount}}</td>
                  <td>{{item.description}}</td>
                  <td>{{item.date}}</td>
                  <td>{{item.category}}</td>
                  <td><img :src="item.prodUrl" style="height: 150px;width: 200px;"></td>
                  <td><button @click="editProd(item.prodID)">Edit</button></td>
                  <td><button @click="deleteProd(item.prodID)">Delete</button></td>
              </tbody>
          </table>
          <div class="container ">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">firstName</label>
                <input v-model="firstName" type="email" class="form-control" id="exampleFormControlInput1" placeholder="firstName">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">lastName</label>
                <input v-model="lastName" type="email" class="form-control" id="exampleFormControlInput1" placeholder="lastName">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">userRole</label>
                <input v-model="userRole" type="email" class="form-control" id="exampleFormControlInput1" placeholder="userRole">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">emailAdd</label>
                <input v-model="emailAdd" type="email" class="form-control" id="exampleFormControlInput1" placeholder="emailAdd">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" placeholder="Password" class="form-label">Password</label>
                <input v-model="Password" class="form-control" id="exampleFormControlTextarea1" rows="1"></input>
            </div>
            <div class="d-flex justify-content-center" style="text-align: center;"><button @click="addUser">Add</button></div>
          </div>
          <table class="mb-5">
              <tr class="thead">
                <th>userID</th>
                <th>firstname</th>
                <th>lastName</th>
                <th>userRole</th>
                <th>emailAdd</th>
                <th>Password</th>
              </tr>
              <tbody v-for="user in $store.state.users" :key="user.userID" >
                <td>{{user.userID}}</td>
                <td>{{user.firstName}}</td>
                <td>{{user.lastName}}</td>
                <td>{{user.userRole}}</td>
                <td>{{user.emailAdd}}</td>
                <td>{{user.Password}}</td>
                <td><button @click="editUser(user.userID)">Edit</button></td>
                <td><button @click="deleteUser(user.userID)">Delete</button></td>
              </tbody>
          </table>
      </div>
</template>
<script>
export default {
    data(){
    return{
      prodName: null,
      quantity:null,
      amount:null,
      description:null,
      date:null,
      category:null,
      prodUrl:null
    }
  },
  data(){
    return{
      firstName:null,
      lastName:null,
      userRole:null,
      emailAdd:null,
      Password:null
    }
  },
  methods: {
    deleteProd(prodID){
      this.$store.dispatch('deleteProd',prodID)
    },
    deleteUser(userID){
      this.$store.dispatch('deleteUser',userID)
    },
    editProd(prodID){
      let edit = {
        id:prodID,
        prodName: this.prodName,
        quantity: this.quantity,
        amount:this.amount,
        description:this.description,
        date:this.date,
        category:this.category,
        ProdUrl:this.ProdUrl
      }
      this.$store.dispatch('editUser',edit)
    },
  editUser(userID){
      let edit = {
        id:userID,
        firstName: this.firstName,
        lastName: this.lastName,
        userRole: this,userRole,
        emailAdd: this.emailAdd,
        Password: this.Password
      }
      this.$store.dispatch('editUser',edit)
    }
  },
  computed: {
    getProducts(){
      this.$store.dispatch('getProducts')
    },
    addProduct(){
      console.log(this.$data);
      this.$store.dispatch('addProduct',this.$data)
    },
    getUsers(){
      this.$store.dispatch('getUsers')
    },
    addUser(){
      console.log(this.$data);
      this.$store.dispatch('addUser',this.$data)
    },
  },
  mounted() {
    this.getProducts
    this.getUsers
  }
}
</script>
<style scoped>
    
</style>