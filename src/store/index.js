import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        loading: false,
        pickerOptions: {
            shortcuts: [{
                text: '今天', onClick(picker) {
                    picker.$emit('pick', new Date());
                }
            }, {
                text: '昨天', onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                }
            }, {
                text: '一周前', onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                }
            }]
        },
        paginationPageSizes: [15, 30, 50, 100],
        paginationLayout: 'total, sizes, prev, pager, next, jumper'
    },
    mutations: {
        LOADING: (state, loading) => {
            state.loading = loading;
        }
    },
    actions: {
        Loading({commit}, loading) {
            commit('LOADING', loading);
        },
    }
});

export default store
