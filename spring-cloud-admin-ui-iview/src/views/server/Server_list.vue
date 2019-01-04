<template>
    <div class="server_list_warp">
        <div class="server_item" v-for="app in this.applications">
            <header class="server_header">
                <div class="image">
                    <img src="http://spring.io/img/homepage/icon-spring-framework.svg">
                </div>
                <div class="header-info">
                    <p class="title">{{app.name}}</p>
                    <p class="other">owner:某某事业部</p>
                    <p class="other">project:某某事业部渠道平台</p>
                </div>
            </header>
            <div class="server_body">
                <div class="body-info">
                    <div class="server-status">
                        <span>status</span>
                        <span :class="{'up': (app.status === 'UP')}">{{app.status}}</span>
                    </div>
                    <div class="server-group">
                        <span>group</span>
                        <span>分组</span>
                    </div>
                    <div class="server-version">
                        <span>version</span>
                        <span>1.5.7.RELEASE</span>
                    </div>
                </div>
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
    @import "../../style/server.less";
</style>