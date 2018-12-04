<template>
  <div id="app">
    <h1 @click="$store.commit('setTitle',{title:'908'})">{{$store.state.title}}</h1>
    <h1 @click="$store.commit('test/setName',{name:'test hello'})">{{$store.state.test.name}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    window.app = this;
  }
}
</script>

<style>
body{margin:0;}
</style>
