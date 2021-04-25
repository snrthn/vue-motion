import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
    // 数据持久化
    plugins: [createPersistedState()],
    state: {
        token: '',
        userName: ''
    },
    mutations: {
        // 更新token
        updateToken(state, payload) {
            state.token = payload;
        },
        // 更新用户名
        updateUserName(state, payload) {
            state.userName = payload;
        }
    },
    actions: {},
    getters: {},
    modules: {}
})