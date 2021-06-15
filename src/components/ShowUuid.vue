<template>
    <div class="text-left w-2/3 m-auto">
        <h1 class="underline text-3xl mt-5 mb-10">Pasos A seguir </h1>
        <p class=" underline">Paso 1:  </p>
        <p class="p-6">Descargarse Telegram</p>
        <p class="text-left underline">Paso 2:</p>
        <p class="p-6">Buscar el chat "TFG Renato"</p>
        <p class="text-left underline">Paso 3:</p>
        <p class="p-6">Introducir el siguiente codigo en el chat:</p>
        <p class="p-6">{{user.uuid}}</p>
        <p class="text-left underline">Paso 4:</p>
        <p class="p-6">Cerrar Sesión, y volver a Loguearse</p>
    </div>
    
</template>
<script>
    import {mapGetters} from 'vuex' 

    export default {
        name: 'ShowUuid',
        computed:{
            ...mapGetters(['user'])
        }
    }
</script>