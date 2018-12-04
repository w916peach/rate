let state = {
    name:'test'
}
let getters = {}
let mutations = {
    setName(state,payload){
        state.name = payload.name;
    }
}
let actions = {}

export default {
    namespaced:true,
    state,getters,mutations,actions
}