<template>
	<div class="calendar w-5/6 m-auto bg-white py-14">
		<div v-if="this.user.validated == true">
			<hr>
			<div class="flex flex-col py-4 md:flex-row md:justify-between">
				<div class="flex ml-4 flex-col text-center md:flex-row">
					<div class="cursor-pointer p-6 hover:underline" v-on:click="tareasAll()">
						<span class="" >Todas las tareas</span>
					</div>
					<div class="cursor-pointer p-6 hover:underline" v-on:click="tareasEjecucion()">
						<span class="" >Tareas en curso</span>
					</div>
					<div class="cursor-pointer p-6 hover:underline" v-on:click="tareasFin()">
						<span class="">Tareas Completadas</span>
					</div>

				</div>
				<div class="cursor-pointer mt-4 m-auto p-4 bg-gray-500 w-48 rounded-md colorBoton md:mr-4" v-on:click="createTask()">
					<span class="colorLetra">Crear Nueva Tarea</span>
				</div>
			</div>
			<hr>
			<div>
				<div v-if="allTask">
					<All-task/>
				</div>

				<div v-if="taskInProgress">
					<TaskInProgress/>
				</div>
				<div v-if="endTask">
					<EndTask/>
				</div>
			</div>
		</div>
		
		<div v-if="this.user.validated != true">
			<ShowUuid/>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex' 
import AllTask from '../components/AllTask'
import TaskInProgress from "../components/TaskInProgress"
import EndTask from "../components/EndTask"
import ShowUuid from '../components/ShowUuid.vue'
// import CreateTask from "../components/CreateTask"

export default {
	data(){
		return{
			// crearTask:false,
			allTask: true,
			taskInProgress:false,
			endTask:false,
			color:'red'
		}
		
	},
	components:{
		AllTask,
		TaskInProgress,
		EndTask,
		ShowUuid
		// CreateTask
	},
	computed:{
		...mapGetters(['user'])
	},
	methods:{
		createTask: function(){
			this.$router.push({name:"CreateTask"})			
		},
		tareasAll: function(){
			this.allTask=true
			this.taskInProgress=false
			this.endTask=false
			// this.crearTask = false
		},
		tareasEjecucion: function(){
			this.allTask=false
			this.taskInProgress=true
			this.endTask=false
			// this.crearTask = false
		},
		tareasFin: function(){
			this.allTask=false
			this.taskInProgress=false
			this.endTask=true
			// this.crearTask = false
		},
		cambiar: function(){
			this.allTask=true
			this.taskInProgress=false
			this.endTask=false
			// this.crearTask = false
		}
	}

	

}
</script>

<style scoped>

	.colorBoton{
		background-color: #1F2937;
	}
	.colorLetra{
		color: white;
	}

</style>