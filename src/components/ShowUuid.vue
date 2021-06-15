<template>
    <p>{{user.uuid}}</p>
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