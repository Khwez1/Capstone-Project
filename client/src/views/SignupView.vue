<template>
    <div class="signup">
        <h1>This is an signup page</h1>
        <main>
            <div class="card mt-5" style="width: 18rem;">
                <h5 class="card-title mt-2">Sign Up</h5>
                <div class="card-body">
                    <input v-model="firstName" name="firstName" placeholder="firstName" type="text"></input>
                    <input v-model="lastName" name="lastName" placeholder="lastName" type="text"></input>
                    <input v-model="userRole" name="userRole" placeholder="userRole" type="text"></input>
                    <input v-modal="emailAdd" name="emailAdd" placeholder="emailAdd" type="text"></input>
                    <input v-model="Password" name="Password" placeholder="Password" type="text"></input>
                    <button href="#" class="btn btn-primary mt-3" style="width: min-content;">submit</button>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            firstName:'',
            lastName:'',
            userRole:'',
            emailAdd:'',
            Password:''
        }
    },
    computed: {
        registerUser(){
            this.$store.dispatch('registerUser',this.$data)
        },
    },
    methods: {
        submitData(){
           console.log(this.$data.email)
           //this is the only place because that can handle asycronous functions
           //the data is only being saved when it is being used
           this.$store.dispatch('login',this.$data)
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
.signup{
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