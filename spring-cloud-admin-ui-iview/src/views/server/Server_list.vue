<template>
    <div class="server_list_warp">
        <div class="server_list_item" v-for="app in this.applications">
            <header class="server_list_header">
                <img src="http://spring.io/img/homepage/icon-spring-framework.svg" class="server_list_image">
                <p class="title">{{app.name}}</p>
            </header>
            <div class="server_list_body">
                <div class="">状态:{{app.status}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getApplications } from '@/api/server'

    export default {
        name: "Server_list",
        data(){
            return {
                applications:[]
            }
        },
        mounted(){
            getApplications().then((res)=>{
                if(res.status === 200){
                    this.applications = res.data;
                }
            },error => {
                /* eslint-disable */
                console.log(error);
            })
        }
    }
</script>

<style lang="less">
    .server_list_warp{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        .server_list_item{
            cursor: pointer;
            width: calc(33.3% - 10px);
            padding: 15px 20px 5px;
            background: #fff;
            border: 1px solid #e4e7ed;
            border-top: 3px solid #18b566;
            border-radius: 4px;
            margin: 0 5px 15px;
            .server_list_header{
                display: flex;
                .server_list_image{
                    width: 32px;
                    height: 32px;
                }
                .title{
                    font-size: 12px;
                    line-height: 32px;
                    margin-left: 4px;
                }
            }
            .server_list_body{
                display: block;

            }
        }
    }
</style>