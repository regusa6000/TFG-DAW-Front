export const actions = {

    //Son las acciones a llamar dentro del store,que se puede usar donde sea
    //las que hacen las comunicaciones entre las mutaciones y entre las vistas

    saveUser : ({commit},user) =>{

        commit('setUser', user)

    },

    saveToken : ({commit},token) =>{

        commit('setToken', token)

    },

    logOut : ({commit}) =>{

        commit('setUser', null)
        commit('setToken', null)

    },

}
