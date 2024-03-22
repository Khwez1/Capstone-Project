<template>
  <div class="card-container">
    <div class="card left-card">
      <div class="card-body">
        <div class="mb-3">
          <label for="firstName" class="form-label">First Name</label>
          <input v-model="firstName" type="text" class="form-control" id="firstName" placeholder="First Name">
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name</label>
          <input v-model="lastName" type="text" class="form-control" id="lastName" placeholder="Last Name">
        </div>
        <!-- <div class="mb-3">
          <label for="userRole" class="form-label">User Role</label>
          <input v-model="userRole" type="text" class="form-control" id="userRole" placeholder="User Role">
        </div> -->
        <div class="mb-3">
          <label for="emailAdd" class="form-label">Email Address</label>
          <input v-model="emailAdd" type="email" class="form-control" id="emailAdd" placeholder="Email Address">
        </div>
        <div class="mb-3">
          <label for="Password" class="form-label">Password</label>
          <input v-model="Password" type="password" class="form-control" id="Password" placeholder="Password">
        </div>
        <div class="d-flex justify-content-center"><button @click="editUserProfile">Edit</button></div>
      </div>
    </div>

    <div class="card right-card">
      <h2 class="head">This is your Current Details</h2>
      <div v-for="user in $store.state.user" :key="user.userID" class="card-body">
        <h5 class="card-title">Name: {{ user.firstName }}</h5>
        <p class="card-text">Surname: {{ user.lastName }}</p>
        <p class="card-text">Your Role: {{ user.userRole }}</p>
        <p class="card-text">Your Email: {{ user.emailAdd }}</p>
        <p class="quantity">Your Current Password:{{ user.Password }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      userRole: null,
      emailAdd: null,
      Password: null
    }
  },
  computed: {
    getUser() {
      this.$store.dispatch('getUser');
    },
    editUserProfile() {
      let edit = {
        firstName: this.firstName,
        lastName: this.lastName,
        userRole: this.userRole,
        emailAdd: this.emailAdd,
        Password: this.Password
      }
      console.log(this.$data);
      this.$store.dispatch('editUserProfile', edit);
    }
  },
  mounted() {
    this.getUser;
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.card {
  width: 45%;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.left-card {
  padding: 20px;
  margin-right: 20px;
}

.right-card {
  padding: 20px;
  margin-left: 20px;
}

.card-body {
  color: white;
  text-align: left;
}

.head {
  color: white;
  margin-bottom: 20px;
}

.form-label {
  color: white;
  margin-bottom: 0.5rem;
}

.form-control {
  width: 100%;
}

.d-flex {
  display: flex;
}

.justify-content-center {
  justify-content: center;
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
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: red;
  color: white;
}
</style>
