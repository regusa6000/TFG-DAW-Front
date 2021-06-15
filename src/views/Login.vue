<template>
  <div class="hello flex-col m-auto mt-20 md:mt-28  md:flex lg:flex-row">
    <div class="pt-0 p-10 m-auto md:ml-60 lg:h-32 ">
       <img class="w-96 m-auto" src="../images/logo.png">
       <p>Hola</p>
    </div>
    <div class="w-3/4 flex flex-col m-auto border-4 border-light-blue-500 border-opacity-50 rounded-md bg-white lg:w-1/3">
      <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
        <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
          <div class="flex flex-col pt-4">
            <!-- <input type="email" id="email" @blur="verificar()" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" v-model="email" required /> -->
            <input type="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" v-model="email" required />
          </div>

          <div class="flex flex-col pt-4">
            <input type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" v-model="password" required />
            <small class="mt-5" style="color:red;" v-if="errorUser">El Usuario o Contraseña, es incorrecto.</small>
          </div>

          <input type="submit" value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" v-on:click="saluda()"/>
        </form>
        <div class="text-center pt-12 pb-12">
          <p>Aún no estas registrado?<router-link to="/registrar" class="underline font-semibold"> Registrarse</router-link></p>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

import {login} from '../services/login'
import {expresionRegular} from '../services/function'

export default {
  data() {
    return {
      email: this.value,
      password: this.value,
      errorUser: false
    };
  },
  methods: {
    ...mapActions(['saveUser']),

    saluda: function () {

      if(expresionRegular(this.email) != true){
        console.log("La dirección de email es incorrecta.");
      }else{
        console.log("La dirección de email " + this.email + " es correcta.");

        login(this.email,this.password).then((response)=>{
          if(response.data.password == null){
            this.errorUser=true
          }else{
            this.saveUser(response.data)
            console.log(response)
            // let d = new Date();
            // d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
            // let expires = "expires=" + d.toUTCString();
            // document.cookie = "Token=" + response.data.token + ";" + expires + ";path=/";
            /*Esto sirve para redireccionar a otra pagina, name es la ruta a la cual apuntamos*/
            this.$router.push({name:"Calendar"})
          }
        })
      }
    },
  },
  computed: {
    ...mapGetters(['user'])
  }
};
</script>