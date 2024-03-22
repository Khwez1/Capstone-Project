<template>
  <div id="admin">
    <div class="container">
      <h1>This is an admin page</h1>
      <br>
      <!-- Product Form -->
      <div class="mb-5">
        <h2>Add Product</h2>
        <div class="form-container">
          <div class="mb-3">
            <label for="prodName" class="form-label">Product Name</label>
            <input v-model="prodName" type="text" class="form-control" id="prodName" placeholder="Product Name">
          </div>
          <div class="mb-3">
            <label for="quantity" class="form-label">Quantity</label>
            <input v-model="quantity" type="number" class="form-control" id="quantity" placeholder="Quantity">
          </div>
          <div class="mb-3">
            <label for="amount" class="form-label">Amount</label>
            <input v-model="amount" type="number" class="form-control" id="amount" placeholder="Amount">
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <input v-model="description" type="text" class="form-control" id="description" placeholder="Description">
          </div>
          <div class="mb-3">
            <label for="date" class="form-label">Date</label>
            <input v-model="date" type="date" class="form-control" id="date">
          </div>
          <div class="mb-3">
            <label for="category" class="form-label">Category</label>
            <input v-model="category" type="text" class="form-control" id="category" placeholder="Category">
          </div>
          <div class="mb-3">
            <label for="prodUrl" class="form-label">Product URL</label>
            <input v-model="prodUrl" type="url" class="form-control" id="prodUrl" placeholder="Product URL">
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button @click="addProduct">Add Product</button>
        </div>
      </div>

      <!-- Product Table -->
      <h2>Products</h2>
      <table class="table products">
        <tr class="thead">
          <th>id</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Description</th>
          <th>Date</th>
          <th>Category</th>
          <th>Product URL</th>
          <th>Actions</th>
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
          <td>
            <button @click="editProd(item.prodID)">Edit</button>
            <button @click="deleteProd(item.prodID)">Delete</button>
          </td>
        </tbody>
      </table>

      <!-- User Form -->
      <div class="mb-5">
        <h2>Add User</h2>
        <div class="form-container">
          <div class="mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <input v-model="firstName" type="text" class="form-control" id="firstName" placeholder="First Name">
          </div>
          <div class="mb-3">
            <label for="lastName" class="form-label">Last Name</label>
            <input v-model="lastName" type="text" class="form-control" id="lastName" placeholder="Last Name">
          </div>
          <div class="mb-3">
            <label for="userRole" class="form-label">User Role</label>
            <input v-model="userRole" type="text" class="form-control" id="userRole" placeholder="User Role">
          </div>
          <div class="mb-3">
            <label for="emailAdd" class="form-label">Email Address</label>
            <input v-model="emailAdd" type="email" class="form-control" id="emailAdd" placeholder="Email Address">
          </div>
          <div class="mb-3">
            <label for="Password" class="form-label">Password</label>
            <input v-model="Password" type="password" class="form-control" id="Password" placeholder="Password">
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button @click="addUser">Add User</button>
        </div>
      </div>

      <!-- User Table -->
      <h2>Users</h2>
      <table class="table mb-5">
        <tr class="thead">
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>User Role</th>
          <th>Email Address</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
        <tbody v-for="user in $store.state.users" :key="user.userID">
          <td>{{user.userID}}</td>
          <td>{{user.firstName}}</td>
          <td>{{user.lastName}}</td>
          <td>{{user.userRole}}</td>
          <td>{{user.emailAdd}}</td>
          <td>{{user.Password}}</td>
          <td>
            <button @click="editUser(user.userID)">Edit</button>
            <button @click="deleteUser(user.userID)">Delete</button>
          </td>
        </tbody>
      </table>

      <!-- Cart Form -->
      <div class="mb-5">
        <h2>Add Cart</h2>
        <div class="form-container">
          <div class="mb-3">
            <label for="userID" class="form-label">User ID</label>
            <input v-model="userID" type="number" class="form-control" id="userID" placeholder="User ID">
          </div>
          <div class="mb-3">
            <label for="quantity" class="form-label">Quantity</label>
            <input v-model="quantity" type="number" class="form-control" id="quantity" placeholder="Quantity">
          </div>
          <div class="mb-3">
            <label for="prodID" class="form-label">Product ID</label>
            <input v-model="prodID" type="number" class="form-control" id="prodID" placeholder="Product ID">
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button @click="addCartByAdmin">Add Cart</button>
        </div>
      </div>

      <!-- Cart Table -->
      <h2>Carts</h2>
      <table class="tableCart">
        <tr class="thead">
          <th>Order ID</th>
          <th>Quantity</th>
          <th>Product ID</th>
          <th>User ID</th>
          <th>Actions</th>
        </tr>
        <tbody v-for="cart in $store.state.cart" :key="cart.orderID">
          <td>{{cart.orderID}}</td>
          <td>{{cart.quantity}}</td>
          <td>{{cart.prodID}}</td>
          <td>{{cart.userID}}</td>
          <td>
            <button @click="editCart(cart.orderID)">Edit</button>
            <button @click="deleteCart(cart.orderID)">Delete</button>
          </td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prodName: null,
      quantity: null,
      amount: null,
      description: null,
      date: null,
      category: null,
      prodUrl: null,
      firstName: null,
      lastName: null,
      userRole: null,
      emailAdd: null,
      Password: null,
      userID: null,
      prodID: null,
    };
  },
  methods: {
    deleteProd(prodID) {
      this.$store.dispatch('deleteProd', prodID);
    },
    deleteUser(userID) {
      this.$store.dispatch('deleteUser', userID);
    },
    deleteCart(orderID) {
      this.$store.dispatch('deleteCart', orderID);
    },
    editProd(prodID) {
      let edit = {
        id: prodID,
        prodName: this.prodName,
        quantity: this.quantity,
        amount: this.amount,
        description: this.description,
        date: this.date,
        category: this.category,
        prodUrl: this.prodUrl,
      };
      this.$store.dispatch('editUser', edit);
    },
    editUser(userID) {
      let edit = {
        id: userID,
        firstName: this.firstName,
        lastName: this.lastName,
        userRole: this.userRole,
        emailAdd: this.emailAdd,
        Password: this.Password,
      };
      this.$store.dispatch('editUser', edit);
    },
    editCart(orderID) {
      let edit = {
        id: orderID,
        userID: this.userID,
        quantity: this.quantity,
        prodID: this.prodID,
      };
      this.$store.dispatch('editCart', edit);
    },
  },
  computed: {
    getProducts() {
      this.$store.dispatch('getProducts');
    },
    addProduct() {
      console.log(this.$data);
      this.$store.dispatch('addProduct', this.$data);
    },
    getUsers() {
      this.$store.dispatch('getUsers');
    },
    addUser() {
      console.log(this.$data);
      this.$store.dispatch('addUser', this.$data);
    },
    getCarts() {
      this.$store.dispatch('getCarts');
    },
    addCartByAdmin() {
      console.log(this.$data);
      this.$store.dispatch('addCartByAdmin', this.$data);
    },
  },
  mounted() {
    this.getProducts;
    this.getUsers;
    this.getCarts;
  },
};
</script>

<style scoped>
#admin {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container {
  text-align: center;
}

h1, h2 {
  color: white;
  margin-bottom: 1rem;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mb-3 {
  margin-bottom: 1rem;
}

.form-label {
  color: white;
}

.form-control {
  width: 300px;
}

.d-flex {
  display: flex;
}

.justify-content-center {
  justify-content: center;
}

.table {
  color: white;
  border-collapse: collapse;
  width: 100%;
}
.tableCart{
  color: white;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 100px;
}

.table th, .table td {
  padding: 8px;
  text-align: left;
}

.thead {
  background-color: red;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
  margin: 10px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: red;
  color: white;
}
</style>

