<template>
  <div>
    <!-- <Navbar></Navbar> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->

    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
// import Navbar from './views/Navbar.vue'
import Footer from './views/Footer.vue'

export default {
  name: 'App',
  components: {
    // Navbar,
    Footer
  }
}

</script>
<style>

</style>
