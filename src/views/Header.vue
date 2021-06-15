<template>
<div>
<nav class="bg-gray-800" v-if="user" >
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class=" flex flex-col items-center sm:flex-row sm:justify-between">
      <div class="inset-y-0 left-0 flex items-center sm:hidden">
      </div>
      <div class="flex-1 p-5 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img v-if="!logo" class="block lg:hidden h-10 w-auto" src="../images/logo.png" >
          <img v-if="!logo" class="hidden lg:block h-10 w-auto" src="../images/logo.png" >
        </div>
        <div class="hidden sm:block sm:ml-6">
          <router-link to="/tareas">
            <div class="flex space-x-4"> 
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a v-if="user" href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Tareas</a>
            </div>
          </router-link>
        </div>
      </div>
      <div v-if="user" class="flex inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <router-link to="/notifications">
          <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
          </button>
        </router-link>

        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <div>
            <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
            </button>
          </div>
          <div class="group inline-block">
            <button class="outline-none focus:outline-none   rounded-sm flex items-center sm:min-w-32">
              <img class="h-8 w-8 rounded-full " src="../images/anciano.png" alt="" style="background-color: white; border: 3px solid black;">
              <span>
                <svg  class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </span>
            </button>
            <ul class="bg-white rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
              <li class="rounded-sm px-7 py-2 hover:bg-gray-100" style="color:white;background-color:#1F2937;">Bienvenido {{user.name}}</li>
              <li class="rounded-sm px-7 py-2 hover:bg-gray-100"><router-link to="/settings"> Configuración</router-link></li>
              <li class="rounded-sm px-7 py-2 hover:bg-gray-100 cursor-pointer" v-on:click="cerrrarLogin()">Cerrar Sesión</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

    

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <router-link to="/tareas">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a v-if="user" href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Tareas</a>

      </div>
    </router-link>
  </div>
    

</nav>
<router-view/>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "Header",
    data() {
      return {
        logo:false
      }
    },
    comments: {},
    computed: {
      ...mapGetters(["user"]),         
    },
    methods: {
      ...mapActions(['saveUser']),
      cerrrarLogin: function(){
        /*Preguntar si esto esta bien*/
        this.saveUser(null)
        this.$router.push({name:"Home"})
      }
    },
};
</script>

<style>
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}
.scale-0 {
  transform: scale(0);
}
.min-w-32 {
  min-width: 8rem;
}
</style>