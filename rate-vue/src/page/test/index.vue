<template>
    <div>test

        <h1>路由信息</h1>
        <div>params:{{userid}}</div>
        <div>query:{{a}}</div>
    </div>
</template>
<script>
export default {
    mounted(){
        window.test = this;
    },
    props:['userid','a']
}
</script>
