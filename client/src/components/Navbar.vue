<template>
    <div id='navbar'>
        <nav class="navbar navbar-dark navbar-expand-lg ">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/signup"><img src="https://cdn-images.imagevenue.com/e3/5c/af/ME17RD1Q_o.png" style="height: 70px; width: 70px;"></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
                        <path fill="red" d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                    </svg>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav custom-navbar-nav">
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
                        <router-link class="nav-link" to="/checkout">checkout</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin">Admin</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profile">Profile</router-link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
                        <path fill="red" d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                    </svg> -->
                      <!--   -->
</template>
<script>
export default {
    
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