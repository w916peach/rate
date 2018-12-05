<template>
  <div id="app">
    <!-- <h1 @click="setName({name:'123'})">{{testName}}</h1>
    <div>{{showTitle}}</div>
    <h1 @click="getTitle">{{rootTitle}}</h1> -->
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions,createNamespacedHelpers} from 'vuex'
const {mapState:mapTestState} = createNamespacedHelpers('test');
window.ms = mapState;
export default {
  name: 'App',
  mounted(){
    window.app = this;
  },
  data(){
    return {
      
    }
  },
  computed:{
    ...mapState({'rootTitle':'title'}),
    ...mapTestState({'testName':'name'}),
    ...mapGetters(['showTitle'])
  },
  methods:{
    ...mapMutations('test',['setName']),
    ...mapActions(['getTitle'])
  }
}
</script>

<style>
body{margin:0;}
</style>
