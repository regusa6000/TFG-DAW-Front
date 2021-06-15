<template>
    <div class="w-full flex flex-wrap">

        <!-- Register Section -->
        <div class="w-full md:w-1/2 flex flex-col m-auto bg-white p-16">

            <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                <p class="text-center text-3xl">Actualizar Datos</p>
                <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                    <div class="flex flex-col pt-4">
                        <label for="name" class="text-lg">Nombre</label>
                        <input v-model="user.name" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div class="flex flex-col pt-4">
                        <label for="name" class="text-lg">Apellidos</label>
                        <input v-model="user.lastname" type="text" id="apellido" placeholder="Smith" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <input type="hidden"  id="id" v-model="user.id">
                    <input type="hidden"  id="rol" v-model="user.rol">

                    <div class="flex flex-col pt-4">
                        <label for="email" class="text-lg">Email</label>
                        <input v-model="user.email" type="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div class="flex flex-col pt-4">
                        <label for="email" class="text-lg">Telefono</label>
                        <input v-model="user.telephone" type="number" id="telefono" placeholder="611612038" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    
                    <div class="flex justify-around p-5 mt-5">
                        <div class="mt-1">
                            <p>Actualizar Contraseña</p>
                        </div>
                        <div>
                            <label class="switch">
                                <input type="checkbox" value="0" v-model="valorEntrada" v-on:click="cambio()">
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>

                    <div v-if="verficarContraseña">
                        <div class="flex flex-col pt-4">
                            <label for="password" class="text-lg">Contraseña</label>
                            <input v-model="user.password" type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div class="flex flex-col pt-4">
                            <label for="confirm-password" class="text-lg">Confirma Contraseña</label>
                            <input  type="password" id="confirm-password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                    </div>
                    
                    <input type="submit" value="Register" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" v-on:click="actualizar()"/>
                </form>
            </div>

        </div>
    
    </div>
</template>

<script>
  import {mapGetters} from 'vuex' 
  import {update} from '../services/login'

  export default {
      data (){
          return{
              verficarContraseña:false,
              valorEntrada:''
          }
            
      },
        components: {},
        computed : {
            ...mapGetters(['user'])
        },
        methods:{
            actualizar: function() {
                console.log(this.user)
                update(this.user.id,this.user.name,this.user.lastname,this.user.email,this.user.password,this.user.telephone,this.user.rol).then((response)=>{
                    console.log(response)
                })
            },
            cambio: function(){
                console.log(this.valorEntrada)
                if(this.valorEntrada == false){
                    this.verficarContraseña = true
                }else{
                    this.verficarContraseña = false
                }
            }
        }
    };
</script>
<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>