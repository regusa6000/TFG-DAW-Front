<template>
    <div class="bg-white">
        <div v-for="tarea in task" class="rounded-lg py-5 ml-5 m-5"> 
            <div class="text-left colorEmpresarial py-4 rounded-t-lg">
                <p class="ml-5">{{tarea.nameTask}}</p>
            </div>
            <div  class="ml-6 py-6 rounded-b-lg">
                <div class="w-2/3 text-left">
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
import {alltask} from '../services/login'
import {deleteTask} from '../services/login'
import { Datetime } from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

export default {
    name: 'AllTask',
    data (){
        return{
            task:[] ,
        }
         
      },
        components: {
            datetime: Datetime
        },
        computed : {
            ...mapGetters(['user'])
        },
        mounted(){
            this.visualizarTask();
        },
        methods:{
            visualizarTask: function() {
                console.log(this.user)
                alltask(this.user.id).then((response)=>{
                    this.task = response.data
                    console.log(this.task)
                })
            },
            eliminarTask: function(id_task){
                deleteTask(id_task).then((response)=>{
                    this.visualizarTask()
                })
            }
        }
}
</script>
<style scoped>
    /* img:hover{
        background-color: orange;
    }
    img{
        background-color: red;
        max-width: 30px;
        width: 100%;
    } */
    .colorEmpresarial{
        background-color: #1F2937;
        color: white;
    }
</style>