<template>
    <div class="admin">
        <h1>This is an admin page</h1>
        <br>
        <table class="table">
            <tr class="thead">
                <th>id</th>
                <th>prod_name</th>
                <th>quantity</th>
                <th>amount</th>
                <th>category</th>
                <th>ProdURL</th>
            </tr>
            <tbody v-for="item in $store.state.products" :key="item.id" >
                <td>{{item.id}}</td>
                <td>{{item.prod_name}}</td>
                <td>{{item.quantity}}</td>
                <td>{{item.amount}}</td>
                <td>{{item.category}}</td>
                <td><img :src="item.ProdURL"></td>
                <button @click="editProd(item.id)">Edit</button>
                <button @click="deleteProd(item.id)">Delete</button>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>