<template>
    <div>
        hello world!
    </div>
</template>

<script>
    import {applications} from '@/api/server'

    export default {
        name: "Test",
        mounted(){
            applications().then(()=>{

            },error => {
                /* eslint-disable */
                console.log(error);
            })
        }
    }
</script>

<style scoped>

</style>