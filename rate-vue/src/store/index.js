import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import rootStore from './rootStore'
Vue.use(Vuex);
window.vuex = Vuex;
const store = new Vuex.Store({
    ...rootStore,
    modules
});
window.store = store;
export default store;