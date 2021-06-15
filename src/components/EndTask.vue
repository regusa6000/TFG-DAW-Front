<template>
    <div class="bg-white">
        <div v-for="tarea in task" class="rounded-lg py-5 ml-5 m-5"> 
            <div class="flex colorEmpresarial text-center py-4 rounded-t-lg flex-col md:flex-row md:justify-between">
                <p class="p-4 md:ml-5">{{tarea.nameTask}}</p>
                <p class="p-4 md:mr-5">Status: Finalizado</p>
            </div>
            <div class=" py-6 rounded-b-lg md:ml-6">
                <div class="text-left p-3">  
                    <p class="p-3">Descripcion de Tarea: </p>
                    <p class="p-3">{{tarea.description}}</p>
                    <p class="p-3">Fecha de la Alerta: <datetime format="yyyy-MM-dd HH:mm:ss" type="datetime" v-model="tarea.taskDate" :readonly="true"></datetime></p>
                <input type="hidden" v-model="tarea.id">    
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import {mapGetters} from 'vuex' 
import {endTask} from '../services/login'
import {deleteTask} from '../services/login'
import { Datetime } from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

export default {
    name: 'EndTask',
    data (){
        return{
            task:[] ,
            activo:false
        }
         
      },
        components: {
            datetime: Datetime
        },
        computed : {
            ...mapGetters(['user'])
        },
        mounted(){
            this.visualizarEndTask();
        },
        methods:{
            visualizarEndTask: function() {
                console.log(this.user)
                endTask(this.user.id,false).then((response)=>{
                    this.task = response.data
                    console.log(this.task)
                })
            },
            eliminarTask: function(id_task){
                deleteTask(id_task).then((response)=>{
                    this.visualizarEndTask()
                })
            }
        }
}
</script>
<style scoped>
    .colorEmpresarial{
        background-color: #1F2937;
        color: white;
    }
</style>