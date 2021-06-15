<template>
    <footer class="footer p-12" v-if="user">
        <div class="text-center m-auto">
            <p>Renato Andree Gutierrez Santi - DAW</p>
        </div>
    </footer>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: "Footer"
        ,computed: {
            ...mapGetters(["user"]),         
        },
        methods:{
            ...mapActions(['saveUser'])
        }
    }
</script>

<style scoped>
    .footer{
        background-color: #1F2937;
        color: white;
    }
</style>