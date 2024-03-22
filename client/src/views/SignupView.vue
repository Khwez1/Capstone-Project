<template>
    <div id="signup">
        <main>
            <div class="card mb-5 mt-5" style="width: 18rem;">
                <h2 class="card-title mt-2">Sign Up</h2>
                <div class="card-body">
                    <input required v-model="firstName" name="firstName" placeholder="FirstName..." type="text"></input>
                    <input required v-model="lastName" name="lastName" placeholder="LastName..." type="text"></input>
                    <input required v-model="userRole" name="userRole" placeholder="User Role..." type="text"></input>
                    <input required v-model="emailAdd" name="emailAdd" placeholder="Email..." type="text"></input>
                    <input required v-model="Password" name="Password" placeholder="Password..." type="text"></input>
                    <button @click="registerUser" href="#" class="btn btn-primary mt-3" style="width: min-content;">Submit</button>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            firstName:null,
            lastName:null,
            userRole:null,
            emailAdd:null,
            Password:null
        }
    },
    computed: {
        registerUser(){
            this.$store.dispatch('signup',this.$data)
            console.log(this.$data);
        },
    }
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
#signup{
    text-align: center;
}
h2{
    color: white;
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