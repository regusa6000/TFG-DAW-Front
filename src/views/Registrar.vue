<template>
    
    <div class="w-full flex flex-col mt-24 lg:items-center lg:flex-row">
        <!-- Register Section -->
        <div class="w-2/1 flex flex-col m-auto">

            <div class="flex bg-white p-14 flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32 ">
                <div class="mt-9 rounded-md">
                    <p class=" text-3xl">Registrarte</p>
                    <p>Es rápido y fácil.</p>
                </div>
                
                <form class="flex flex-col pt-1 md:pt-8" onsubmit="event.preventDefault();">
                    <div class="flex flex-col pt-4">
                        <input v-model="name" type="text" id="name" placeholder="Nombre" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        <small class="mt-5" style="color:red;" v-if="errorName">Este campo es obligatorio, debe llenarlo.</small>
                    </div>

                    <div class="flex flex-col pt-4">
                        <input v-model="apellidos" type="text" id="apellido" placeholder="Apellidos" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        <small class="mt-5" style="color:red;" v-if="errorApellidos">Este campo es obligatorio, debe llenarlo.</small>
                    </div>

                    <div class="flex flex-col pt-4">
                        <input v-model="email" type="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        <small class="mt-5" style="color:red;" v-if="errorEmail">Este campo es obligatorio, debe llenarlo.</small>
                        <small class="mt-5" style="color:red;" v-if="verify">Este cuenta ya esta registrado, registrece con otra cuenta.</small>
                    </div>

                    <div class="flex flex-col pt-4">
                        <input v-model="telefono" type="number" id="telefono" placeholder="Telefono" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        <small class="mt-5" style="color:red;" v-if="errorTelefono">Este campo es obligatorio, debe llenarlo.</small>
                    </div>
    
                    <div class="flex flex-col pt-4">
                        <input v-model="password" type="password" id="password" placeholder="Contraseña" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                        <small class="mt-5" style="color:red;" v-if="errorPassword">Este campo es obligatorio, debe llenarlo.</small>
                    </div>
    
                    <!-- <input type="submit" value="Registrarse" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" v-on:click="registro()"/> -->
                    <button class="bg-black text-white font-bold uppercase text-sm px-6 p-4 mt-6 rounded shadow hover:bg-gray-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="registro()">
                        Registrar
                    </button>
                    <button class="bg-black text-white font-bold uppercase text-sm px-6 p-4 mt-6 rounded shadow hover:bg-gray-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="cancelar()">
                        Cancelar
                    </button>
                </form>
            </div>

        </div>

        <div class="w-2/3 mt-10 m-auto md:w-1/3">
            <img class=" rounded-md" src="../images/imagenRegister.jpg" alt="">
        </div> 
    
        <div>

    <!--Modal-->
        <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-auto my-6 mx-auto max-w-3xl">
                <!--content-->
                <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <!--header-->
                    <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 class="text-3xl font-semibold">Registro</h3>
                        <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
                        <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                        </span>
                        </button>
                    </div>
                    <!--body-->
                    <div class="relative p-6 flex-auto">
                        <img src="../images/comprobado.png" alt="" class="m-auto p-5">
                        <p class="my-4 text-blueGray-500 text-lg leading-relaxed">
                            Se ha registrado correctamente, Inicie Sesión y complete los pasos a seguir.
                        </p>
                    </div>
                    <!--footer-->
                    <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal(); registro();">
                        Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

    </div>

    </div>

</template>


<script>

    // import { mapActions, mapGetters } from 'vuex';
    import {register} from '../services/login'
    import {verifyEmail} from '../services/login'

export default {
    name: "regular-modal",
    data() {
        return {
            name: this.value,
            apellidos: this.value,
            email: this.value,
            telefono: this.value,
            password: this.value,
            rol:"usuario",
            showModal: false,
            errorName: false,
            errorApellidos: false,
            errorEmail:false,
            errorTelefono: false,
            errorPassword: false,
            verify: false
    };
  },
  methods: {
    // ...mapActions(['saveUser']),
    registro: function () {
        if(this.name == null){
            this.errorName = true
        }else{
            this.errorName = false
            if(this.apellidos == null){
                this.errorApellidos = true
            }else{
                this.errorApellidos = false
                if(this.email == null){
                    this.errorEmail = true
                }else{
                    this.errorEmail = false
                    if(this.telefono == null){
                        this.errorTelefono = true
                    }else{
                        this.errorTelefono = false
                        if(this.password == null){
                            this.errorPassword = true
                        }else{
                            this.errorPassword = false
                            verifyEmail(this.email).then((response)=>{
                                if(response.data.email == this.email){
                                    this.verify = true
                                    
                                }else{
                                    this.verify = false
                                    this.toggleModal()
                                }
                                
                            })
                        }
                    }
                }
            }
        }
      register(this.name,this.apellidos,this.email,this.password,this.telefono,this.rol).then((response)=>{
        console.log(response)
        /*Esto sirve para redireccionar a otra pagina, name es la ruta a la cual apuntamos*/
        this.$router.push({name:"Home"})
      })
    },
    toggleModal: function(){
      this.showModal = !this.showModal;
    },
    cancelar:function(){
        this.$router.push({name:"Home"})
    }
  },
  computed: {
    // ...mapGetters(['user'])
  }

};
</script>