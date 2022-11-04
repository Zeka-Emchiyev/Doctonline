<template>
  <div>
    <Navbar></Navbar>
    <nav>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </nav>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from './views/Navbar.vue'
import Footer from './views/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}

</script>
<style>

</style>
