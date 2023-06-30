import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
    // 数据持久化
    // plugins: [createPersistedState()],
    state: {
        token: '',
        userName: '',
        // 标题栏
        isHeader: true, // 是否设置标题栏
        title: '' // 标题栏名称
    },
    mutations: {
        // 更新token
        updateToken(state, payload) {
            state.token = payload;
        },
        // 更新用户名
        updateUserName(state, payload) {
            state.userName = payload;
        },
        // 更新标题栏状态
        setShowHeader (state, payload) {
            state.isHeader = payload;
        },
        // 更新标题栏
        updateTitle(state, payload) {
            state.title = payload;
        }
    },
    actions: {},
    getters: {},
    modules: {}
})