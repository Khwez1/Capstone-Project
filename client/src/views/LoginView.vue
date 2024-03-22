<template>
    <div id="login">
            <main>
                <div class="card mt-5" style="width: 18rem;">
                    <h3 class="card-title mt-2">Login</h3>
                    <div class="card-body">
                        <!-- <input name="userRole" placeholder="userRole" type="text"></input> -->
                        <input v-model="emailAdd" name="emailAdd" placeholder="Email..." type="text"></input>
                        <input v-model="Password" name="Password" placeholder="Password..." type="text"></input>
                        <button @click="loginUser" href="#" class="btn btn-primary mt-3" style="width: min-content;">Submit</button>
                    </div>
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
    border: 3px solid red;
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
h3{
    color: red;
    text-align: center;
}
.btn-primary{
    background-color: red !important;
    color: white !important;
    font-weight: bold;
    border-color: red;
}
.btn-primary:hover{
    color: red !important;
    background-color: black !important;
}
</style>