<template>
  <div id="home">
    <div class="container">
      <h1>Welcome to Events Spotter</h1>
      <p>Discover and book tickets for exciting events near you!</p>
     <router-link to="/products">
      <button >Explore Events</button>
    </router-link>
    </div>

    <h2>Check out our Newly Added Events !</h2>
    <!-- New div with three images -->
    <div class="image-container">
      <img src="https://cdn-images.imagevenue.com/ea/71/de/ME17RRL1_o.jpg" alt="Image 1">
      <img src="https://cdn-images.imagevenue.com/08/1d/72/ME17RRUJ_o.jpg" alt="Image 2">
      <img src="https://cdn-images.imagevenue.com/db/25/26/ME17RRB5_o.jpg" alt="Image 3">
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container {
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: red;
  animation-name: welcome;
  animation-duration: 5s;
  animation-delay: 0s;
  position: relative;
  animation-direction: alternate;
}
h2{
  color: red;
  margin-top: 50px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: white;
}

button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: red;
  color: white;
}

.image-container {
  display: flex;
  justify-content: space-between;
  margin-top: -40px; /* Adjust spacing */
  padding: 100px;
  margin-bottom: 100px;
}

.image-container img {
  width: 400px; /* Adjust image width as per your design */
  height: auto; /* Maintain aspect ratio */
  margin-left: 40px;
}

@keyframes welcome{
  0%{
      left: 0px;
      top: -800px;
  }
  25%{
      left: 0px;
      top: 0px;
  }
  50%{
      left: 0px;
     top:0px;
  }
  75%{
      top: 0px;
      left: 0px
   }
   100%{
      left: 0px;
      top: 0px;
  }
}

</style>