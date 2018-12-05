import {getAllScoreApi,getDetailScoreApi} from '../../services'

let state = {
    allScoreData:null,
    detailScoreData:null
}

let getters = {
    showAllScore(state){
        if(!state.allScoreData){
            return null;
        }else{
            return state.allScoreData.rate.toFixed(2);
        }
    },
    showResultData(state){
        return state.allScoreData === null ? null : state.allScoreData.resultData;
    }
}
let mutations = {
    setAllScore(state,payload){
        state.allScoreData = payload.allScoreData;
    },
    setDetailScore(state,payload){
        state.detailScoreData = payload.detailScoreData;
    }
}
let actions = {
    getAllScore({commit}){
        getAllScoreApi('郝楠+1606B').then(data=>{
            if(data.code === 1){
                let allScoreData = data.allScore;
                commit('setAllScore',{allScoreData});
            }
        });     
    },
    async getDetailScore({commit}){
        let data = await getDetailScoreApi('郝楠+1606B');
        if(data.code === 1){
            let detailScoreData = data.detailScore;
            commit('setDetailScore',{detailScoreData});

        }
    }
}

export default {
    namespaced:true,
    state,getters,mutations,actions
}