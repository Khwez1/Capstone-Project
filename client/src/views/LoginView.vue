<template>
    <div id="login">
        <h1>
            This is an login page
        </h1>
            <main>
                <div class="card mt-5" style="width: 18rem;">
                    <h5 class="card-title mt-2">Log In</h5>
                    <div class="card-body">
                        <!-- <input name="userRole" placeholder="userRole" type="text"></input> -->
                        <input v-model="emailAdd" name="emailAdd" placeholder="emailAdd" type="text"></input>
                        <input v-model="Password" name="Password" placeholder="Password" type="text"></input>
                        <button @click="loginUser" href="#" class="btn btn-primary mt-3" style="width: min-content;">submit</button>
                    </div>
                    <h4>{{ $store.state.loggedIn }}</h4>
                </div>
            </main>
    </div>
</template>
<script>
export default {
    data() {
    return{
        emailAdd: null,
        Password: null
    }
    },
    computed: {
        loginUser(){
            console.log(this.$data)
            this.$store.dispatch('loginUser',this.$data)
        },
    },
}
</script>
<style scoped>
main{
    display: flex;
    justify-content: center;
}
.card {
    border: 1px solid red;
    background-color:black;
    text-align: center;
}
input{
    border-radius: 10px; 
    margin-bottom: 5px; 
    border: none;
}
.card-body{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.login{
    text-align: center;
}
h5{
    color: white;
    text-align: center;
}
.btn-primary{
    background-color: red;
    border: none;
}
.btn-primary:hover{
    color:black;
}
</style>