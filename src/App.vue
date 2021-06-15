<template>
  <div id="app">
     <Header/>
    <!-- <div id="nav"></div> -->

    <!--De esta manera podemos imprimir lo que recogemos de nuestra sesión iniciada-->
    <!-- <span v-if="user">{{ user.name }}</span>
    <span v-if="user">{{ user.id }}</span> -->
      <Footer/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex' 
  import Header from './views/Header.vue';
  import Footer from './components/Footer.vue'
  import Vue from 'vue'
  import { Datetime } from 'vue-datetime'
  // You need a specific loader for CSS files
  import 'vue-datetime/dist/vue-datetime.css'

  export default {
  components: { Header,Footer },
    computed : {
      ...mapGetters(['user'])
    },
  };
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

