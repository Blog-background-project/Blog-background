let state = {
    username: (localStorage.getItem("OPENTUSERNAME_KEY") || sessionStorage.getItem("OPENTUSERNAME_KEY")) || "",
    token: (localStorage.getItem("OPENTOKEN_KEY") || sessionStorage.getItem("OPENTOKEN_KEY")) || "",
    userInfo: (JSON.parse(localStorage.getItem("OPENUSERINFO_KEY") || sessionStorage.getItem("OPENUSERINFO_KEY"))) || {}
}

let mutations = {
    SETUSERNAME(state, data) {
        state.username = data
    },
    SETTOKEN(state, data) {
        state.token = data
    },
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
