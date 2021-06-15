<template>
  <div>
    <div class="mt-5 bg-white s sm:p-12">
      <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
        <h1 class="text-2xl font-bold mb-8">Crear Nueva Tarea</h1>
        <form id="form" novalidate>
          <div class="relative z-0 w-full mb-5">
            <input type="text" v-model="name_task" name="name" placeholder=" " required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"/>
            <label for="name" class="absolute duration-300 top-3 left-4 text-gray-500">Nombre de Tarea</label>
            <small class="mt-5" style="color:red;" v-if="errorTask_name">Este campo es obligatorio, debe llenarlo.</small>
          </div>

          <div class="relative z-0 w-full mb-5">
            <input type="text" v-model="description" name="descrpccion"
              placeholder=" " required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"/>
            <label class="absolute duration-300 top-3 left-4 text-gray-500">Descripción de la Tarea</label>
            <small class="mt-5" style="color:red;" v-if="errorDescription">Este campo es obligatorio, debe llenarlo.</small>
          </div>

          <div class="flex flex-row space-x-4">
            <div class="relative z-0 w-full mb-5">
              <datetime format="yyyy-MM-dd HH:mm:ss" value-zone="Europe/Madrid" zone="Europe/Madrid"  type="datetime" v-model="taskDate"  placeholder="Seleccione la fecha"
                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" required></datetime>
              <label for="date" class="absolute duration-300 top-3 left-4 text-gray-500">Fecha:</label>
              <small class="mt-5" style="color:red;" v-if="errorTask_date">Este campo es obligatorio, debe llenarlo.</small>
            </div>
          </div>
        
        <div class="flex justify-around">
            <button id="button" type="button"
            class=" px-7 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none colorBoton hover:bg-gray-700 hover:shadow-lg focus:outline-none"  v-on:click="cancelarTask()">
            Cancelar
          </button>

          <button id="button" type="button"
            class=" px-7 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none colorBoton hover:bg-gray-700 hover:shadow-lg focus:outline-none" v-on:click="registrarTask()">
            Crear
          </button>

        </div>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
    // import Vue from 'vue'
    import {mapGetters} from 'vuex'
    import {registerTask} from '../services/login'
    import { Datetime } from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

// Vue.use(Datetime)

    export default {
        name: "CreateTask",
        data() {
            return {
                name_task:'',
                description:'',
                taskDate: '',
                errorTask_name: false,
                errorDescription: false,
                errorTask_date: false

            };
        },
        components: {
          datetime: Datetime
        },
        computed : {
            ...mapGetters(['user'])
        },
        methods:{
            cancelarTask: function(){
                this.$router.push({name:"Calendar"})
            },
            registrarTask: function(){

              if(this.name_task == ''){
                this.errorTask_name = true
              }else{
                this.errorTask_name = false
                if(this.description == ''){
                  this.errorDescription =true
                }else{
                  this.errorDescription = false
                  if(this.taskDate == ''){
                    this.errorTask_date = true
                  }else{
                    this.errorTask_date = false
                    registerTask(this.user.id,this.name_task,this.description,this.taskDate).then((response)=>{
                     this.$router.push({name:"Calendar"})
                    })

                  }
                }
              }

                
            }
        }
    };

</script>


<style>
.-z-1 {
  z-index: -1;
}

.origin-0 {
  transform-origin: 0%;
}

input:focus ~ label,
input:not(:placeholder-shown) ~ label,
textarea:focus ~ label,
textarea:not(:placeholder-shown) ~ label,
select:focus ~ label,
select:not([value=""]):valid ~ label {
  /* @apply transform; scale-75; -translate-y-6; */
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-scale-x: 0.75;
  --tw-scale-y: 0.75;
  --tw-translate-y: -1.5rem;
}

input:focus ~ label,
select:focus ~ label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(0, 0, 0, var(--tw-text-opacity));
  left: 0px;
}
.colorBoton{
  background-color: #1F2937;
}
</style>