<template>
    <div id="signup">
        <h1>This is an signup page</h1>
        <main>
            <div class="card mb-5 mt-5" style="width: 18rem;">
                <h5 class="card-title mt-2">Sign Up</h5>
                <div class="card-body">
                    <input required v-model="firstName" name="firstName" placeholder="firstName" type="text"></input>
                    <input required v-model="lastName" name="lastName" placeholder="lastName" type="text"></input>
                    <input required v-model="userRole" name="userRole" placeholder="userRole" type="text"></input>
                    <input required v-model="emailAdd" name="emailAdd" placeholder="emailAdd" type="text"></input>
                    <input required v-model="Password" name="Password" placeholder="Password" type="text"></input>
                    <button @click="registerUser" href="#" class="btn btn-primary mt-3" style="width: min-content;">submit</button>
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
#signup{
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