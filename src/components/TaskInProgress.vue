<template>
    <div class="bg-white">
        <div v-for="tarea in task" class="rounded-lg py-5 ml-5 m-5"> 
            <div class="flex colorEmpresarial text-center py-4 rounded-t-lg flex-col md:flex-row md:justify-between">
                <p class="p-4 md:ml-5 ">{{tarea.nameTask}}</p>
                <p class="p-4 md:mr-5">Status: En Curso</p>
            </div>
            <div class="mt-10 m-auto text-center flex flex-col items-center content-center rounded-b-lg justify-center  sm:flex-row sm:justify-between">
                <div class=" text-left p-3" v-if="datosPrincipal">
                
                    <p class="p-3">Descripcion de Tarea: </p>
                    <p class="p-3">{{tarea.description}}</p>
                    <p class="p-3">Fecha de la Alerta: <datetime format="yyyy-MM-dd HH:mm:ss" type="datetime" v-model="tarea.taskDate" :readonly="true"></datetime></p>
                    <input type="hidden" v-model="tarea.id">
                </div>

                <div v-if="datosUpdate" class="w-3/5 m-auto">

                    <h1 class="p-5">Actualizar la Tarea</h1>

                    <div class="relative z-0 w-full mb-5">
                        <input type="text" v-model="tarea.nameTask" name="name" placeholder=" " required
                        class="pt-3 pb-2  block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"/>
                        <!-- <label for="name" class="absolute duration-300 top-3 left-4 text-gray-500 text-center">Nombre a Cambiar: {{tarea.name_task}}</label> -->
                        <small class="mt-5" style="color:red;" v-if="errorNameTask">Este campo es obligatorio, debe llenarlo.</small>
                    </div>

                    <div class="relative z-0 w-full mb-5">
                        <input type="text" v-model="tarea.description" name="descrpccion" placeholder=" "
                        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"/>
                        <!-- <label class="absolute duration-300 top-3 left-4 text-gray-500 text-center">Descripción a Cambiar: {{tarea.description}}</label> -->
                        <small class="mt-5" style="color:red;" v-if="errorDescription">Este campo es obligatorio, debe llenarlo.</small>
                    </div>

                    <div class="flex flex-row space-x-4">
                        <div class="relative z-0 w-full mb-5">
                            <datetime format="yyyy-MM-dd HH:mm:ss" type="datetime" v-model="tarea.taskDate" :readonly="true" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"></datetime>
                        <label for="date" class="absolute duration-300 top-3 left-4 text-gray-500"></label>
                        <small class="mt-5" style="color:red;" v-if="errorTaskDate">Este campo es obligatorio, debe llenarlo.</small>
                        </div>
                    </div>

                    <div class="flex mt-10 justify-center ">
                        <div class="cursor-pointer p-4 bg-gray-500 w-48 rounded-md colorBoton mr-4" v-on:click="cancelarUpdate()">
                            <span class="colorLetra">Cancelar</span>
                        </div>
                        <div class="cursor-pointer p-4 bg-gray-500 w-48 rounded-md colorBoton mr-4" v-on:click="updateTarea(tarea.id,tarea.nameTask,tarea.description,tarea.taskDate)">
                            <span class="colorLetra">Actualizar</span>
                        </div>
                    </div>

                </div>

                <div class="flex mt-10  text-center justify-around" v-if="datosPrincipal"> 
                    <img src="../images/lapiz.png" alt="" class="py-3 px-16 cursor-pointer" v-on:click="mostrarDatosUpdate()">
                    <img src="../images/eliminar.png" alt="" class="py-3 px-16  cursor-pointer" v-on:click="eliminarTask(tarea.id)">
                </div>
            
            </div>
        </div>
    </div>

</template>
<script>
import {mapGetters} from 'vuex' 
import {taskInProgress} from '../services/login'
import {deleteTask} from '../services/login'
import { Datetime } from 'vue-datetime'
import {updateTask} from '../services/login'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

export default {
    name: 'TaskInProgress',
    data (){
        return{
            task:[] ,
            activo:true,
            datosPrincipal:true,
            datosUpdate:false,
            nameTask:'',
            description:'',
            taskDate:'',
            errorNameTask: false,
            errorDescription: false,
            errorTaskDate: false
        }
         
      },
        components: {
            datetime: Datetime
        },
        computed : {
            ...mapGetters(['user'])
        },
        mounted(){
            this.visualizarTaskInProgress();
        },
        methods:{
            visualizarTaskInProgress: function() {
                console.log(this.user)
                taskInProgress(this.user.id,true).then((response)=>{
                    this.task = response.data
                    console.log(this.task)
                })
            },
            eliminarTask: function(id_task){
                deleteTask(id_task).then((response)=>{
                    this.visualizarTaskInProgress()
                })
            },
            mostrarDatosUpdate: function(){
                this.datosPrincipal=false
                this.datosUpdate=true
            },
            cancelarUpdate: function(){
                this.datosPrincipal=true
                this.datosUpdate=false
            },
            updateTarea: function(id_task,name_task,description,task_date){

                if(name_task ==''){
                    this.errorNameTask = true
                }else{
                    this.errorNameTask = false
                    if(description == ''){
                        this.errorDescription = true
                    }else{
                        this.errorDescription = false
                        if(task_date == ''){
                            this.errorTaskDate = true
                        }else{
                            this.errorTaskDate = false
                            updateTask(id_task,this.user.id,name_task,description,task_date).then((response)=>{
                                console.log(response)
                                this.datosPrincipal=true
                                this.datosUpdate=false
                            })
                        }
                    }
                }

                
            }
        }
}
</script>
<style scoped>
    .colorEmpresarial{
        background-color: #1F2937;
        color: white;
    }
	.colorBoton{
		background-color: #1F2937;
	}
	.colorLetra{
		color: white;
	}

</style>