export const state = () => ({
    data: {},
    index: false,
    status: 'more'
})

export const mutations = {
    data (state, data) {
        state.data = data
    },
    isIndex (state) {
        state.index = true
    },
    setStatus (state, data) {
        state.status = data
    }
}

export const actions = {
    async nuxtServerInit({ commit }, { app }) {
        const res = await app.$axios.get('/info')
        commit('data', res.data.body)
    },
}
