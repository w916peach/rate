<template>
    <el-form class="login" label-width="100px" :model="oUser">
        <el-form-item label="用户名">
            <el-input v-model="oUser.username" />
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="oUser.userpwd" />
        </el-form-item>
        <el-button class="login-btn" type="primary" @click="login({username:oUser.username,userpwd:oUser.userpwd})">登录</el-button>
    </el-form>    
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            oUser:{
                username:'',
                userpwd:''
            }
        }
    },
    computed:{
        ...mapState('login',['loginStatus'])
    },
    methods:{
        ...mapActions('login',['login'])
    },
    watch:{
        loginStatus(newVal,oldVal){
            console.log(newVal,oldVal);
            if(oldVal === 0 && newVal === 1){
                this.$router.push('main');
            }
        }
    }
}
</script>
<style scoped>
    .login{
        padding:20px; width:500px; margin:0 auto; text-align: right;
    }
    .login-btn{
        margin:0 auto;
    }
</style>


