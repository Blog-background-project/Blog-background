let state = {
    username: localStorage.getItem("OPENTUSERNAME_KEY"),
    token: localStorage.getItem("OPENTOKEN_KEY"),
}

let mutations = {
    SETUSERNAME(state, data) {
        state.username = data
    },
    SETTOKEN(state, data) {
        state.token = data
    }
}

let actions = {}

let getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
