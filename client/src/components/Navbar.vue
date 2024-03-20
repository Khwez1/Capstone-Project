<template>
    <div id='navbar'>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/signup">
                    <img src="https://cdn-images.imagevenue.com/e3/5c/af/ME17RD1Q_o.png" style="height: 150px; width: 150px;">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/products">Products</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/checkout">Checkout</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link v-if="$store.state.adminIs === true" class="nav-link" to="/admin">Admin</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contact">Contact</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link v-if="!hasJWT" class="nav-link" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/profile">Profile</router-link>
                        </li>
                        <li class="nav-item">
                            <button v-if="hasJWT" @click="logOut" class="btn btn-outline-light">Log out</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>


<script>
import Swal from 'sweetalert2'
export default {
    computed:{
        hasJWT(){
            return !!this.$cookies.get('jwt')
        },
    },
    created() {
        this.$store.dispatch('getUserRole');
    },
    methods: {
        logOut(){
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will be logged out',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgb(71, 98, 218)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log me out!',
        position: 'top',
      }).then((result) => {
        if (result.isConfirmed) {
        // Remove JWT token
        this.$cookies.remove('jwt');
        // this.$store.dispatch('logOutUser');
        this.$router.push('/'); // Redirect to home page
      setTimeout(() => {
        // Refresh the page after a short delay
        window.location.reload();
      }, 10);
        }
      });
        }
    }
}
</script>
<style scoped>
nav {
    height: fit-content;
    background-color: black;
}

.nav-link:hover{
color: red !important;
}
.navbar-toggler {
    border-color: red;
    color: red
}

.custom-navbar-nav{
  margin-left: auto;
}

.navbar .navbar-toggler .navbar-toggler-icon .custom-toggler-icon {
   color: red !important
}

.navbar-toggler-icon {
    color: red !important
}

nav a {
  font-weight: bold;
  color: white;
  text-align: center;
}

nav a.router-link-exact-active {
  color: red;
}

#searcher::placeholder {
    color: red
}

.btn-outline {
    color: red;
    border-color: red
}

</style>