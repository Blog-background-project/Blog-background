let state = {
    userInfo: (JSON.parse(localStorage.getItem("OPENUSERINFO_KEY") || sessionStorage.getItem("OPENUSERINFO_KEY"))) || {}
}

let mutations = {
    SETUSERINFO(state, data) {
        state.userInfo = data
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
