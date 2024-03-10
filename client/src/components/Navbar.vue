<template>
    <div id='navbar'>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="https://cdn-images.imagevenue.com/e3/5c/af/ME17RD1Q_o.png" style="height: 150px; width: 150px;"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
                        <path fill="red" d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                    </svg>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link  class="nav-link" to="/about">about</router-link>
                        </li>
                        <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="/signup" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </router-link>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <div class="d-flex mb-2" role="search">
                        <input class="form-control me-2" id='searcher' type="search" placeholder="Search" aria-label="Search" style="background-color: black; border-color: red; color: white;">
                        <button class="btn btn-outline" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
nav {
    height: fit-content;
    background-color: black
}

.navbar-toggler {
    border-color: red;
    color: red
}

.navbar .navbar-toggler .navbar-toggler-icon .custom-toggler-icon {
   color: red !important
}

.navbar-toggler-icon {
    color: red !important
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#searcher::placeholder {
    color: red
}

.btn-outline {
    color: red;
    border-color: red
}
</style>