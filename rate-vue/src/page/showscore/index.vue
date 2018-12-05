<template>
    <div>
        <h1>郝楠+1606B</h1>
        <h2>总分：{{showAllScore}}</h2>
        <ul>
            <li v-for="(item,key) in showResultData" :key="key">
                <span>{{item.rate}}</span>
                <span>{{dealSingleRate(item.singleRate)}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState('showscore',['allScoreData','detailScoreData']),
        ...mapGetters('showscore',['showAllScore','showResultData'])

    },
    methods:{
        ...mapActions('showscore',['getAllScore','getDetailScore']),
        dealSingleRate(single){
            return single.toFixed(2);
        }
    },
    mounted(){
        window.ss = this;
        this.getAllScore(); //获取总分数据
    }
}
</script>

<style>

</style>

