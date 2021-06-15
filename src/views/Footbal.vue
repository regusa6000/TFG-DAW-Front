<template>
    <div class="w-5/6 m-auto bg-gray">

        <h1 class="bg-white p-8 text-3xl underline">La Liga</h1>

        <div v-for="(allRss,index) in rss" :key="index" class="flex bg-white flex-col sm:flex-row sm:justify-between sm:items-center">
            <div class="p-4">
                <p>{{allRss.titulo}}</p>
            </div>
            <div class="p-4">
                <div :id="'suscribirse' + (index+1)">
                    <button id="button1" type="button"
                        class=" px-7 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none colorBoton hover:bg-gray-700 hover:shadow-lg focus:outline-none" v-on:click="suscribirse(allRss.id)">
                        Suscribirse
                    </button>
                </div>
                
                <div :id="'cancelarSubscripcion' + (index+1)">
                    <button id="button" type="button"
                        class=" px-7 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none colorBoton hover:bg-gray-700 hover:shadow-lg focus:outline-none" v-on:click="dejarSuscripcion(allRss.id)">
                        Cancelar Subscripción
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex' 
    import {allRss} from '../services/login'
    import {subscripcion} from '../services/login'
    import {verificarSubscription} from '../services/login'

    export default {
        data (){
            return{
                rss:[],
                subscritos:[]
            }
        },
        computed : {
            ...mapGetters(['user'])
        },
        mounted(){
            this.cargarRss()
            this.verificarSubscripcion()
        },
        methods:{
            cargarRss: function(){
                allRss().then((response) => {
                    this.rss = response.data
                    console.log(this.rss);
                })
            },
            verificarSubscripcion: function(){
                verificarSubscription(this.user.id).then((response)=>{

                    this.subscritos = response.data

                    for(let a = 0 ; a < this.subscritos.length ; a++){
                        if(this.subscritos[a].isSubscribed == false){
                             $("#suscribirse"+(a+1)).css("display","block");
                             $("#cancelarSubscripcion"+(a+1)).css("display","none");
                        }else{
                            $("#suscribirse"+(a+1)).css("display","none");
                            $("#cancelarSubscripcion"+(a+1)).css("display","block");
                        }
                    }
                   console.log(this.subscritos)
                })
            },
            suscribirse: function(idRss){
                
                subscripcion(idRss,this.user.id,true).then((response)=>{
                    console.log("Subscrito")
                })
                $("#suscribirse"+idRss).css("display","none");
                $("#cancelarSubscripcion"+idRss).css("display","block");
                
            },
            dejarSuscripcion: function(idRss){
                subscripcion(idRss,this.user.id,false).then((response)=>{
                    console.log("Subscripción Cancelada")
                })
                $("#cancelarSubscripcion"+idRss).css("display","none");
                $("#suscribirse"+idRss).css("display","block");
            },
        }
    }
</script>
<style >
    .colorBoton{
        background-color: #1F2937;
    }
</style>