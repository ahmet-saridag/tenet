import axios from "axios"
import Vuex from "vuex"
import Cookie from "js-cookie"

function createStore() {
    return new Vuex.Store({
        state: {
            authKey: null,
            userData: [],
            firebaseName: null,
            messages: [],
            chatName: [],
        },
        mutations: {
            setAuthKey(state, AuthKey) {
                state.authKey = AuthKey
            },
            setUserData(state, userData) {
                state.userData = userData
            },
            addUser(state, newUser) {
                state.userData.push(newUser)
            },
            ubdateUser(state, user) {
                let user_index = state.userData.findIndex(c => c.firebaseId == state.userData.firebaseId)
                state.userData[user_index] = user
            },
            setfirebaseName(state, firebaseNames) {
                state.firebaseName = firebaseNames
            },
            setProfileFirebaseName(state, name) {
                state.firebaseName = name
            },
            clearAuthKey(state) {
                state.authKey = null,
                    Cookie.remove('authKey')
                if (process.client) {
                    localStorage.removeItem('authKey')
                }
            },
            setChatName(state, lastUser) {
                state.chatName = lastUser
            }
        },
        actions: {
            initAuth(vuexContext, req) {
                let token
                if (req) {
                    if (!req.headers.cookie) {
                        return
                    }
                    token = req.headers.cookie.split(';').find(c => c.trim().startsWith('authKey='))
                    if (token) {
                        token = token.split('=')[1]
                    }

                    // Serverı cookie set edicek
                }
                else {
                    token = localStorage.getItem('authKey')
                    if (!token) {
                        return
                    }
                    // Client'ı localStorage set edicek
                }
                vuexContext.commit('setAuthKey', token)
            },
            newUser(vuexContext, authData) {
                let authLink = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
                if (authData.isUser) {
                    authLink = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
                }
                let firebaseApi = 'AIzaSyA-ipp5U0-cHl5zgByEorP23Mt01nxDv3w'
                return axios.post(authLink + firebaseApi,
                    { email: authData.user.email, password: authData.user.password, returnSecureToken: true })
                    .then(res => {
                        vuexContext.commit('setAuthKey', res.data.localId)
                        Cookie.set('authKey', res.data.localId)
                        localStorage.setItem('authKey', res.data.localId)
                    })
            },
            sendMessage(vuexContext, message) {
                if (message == null) {
                    return;
                } else {
                    this.$fire.firestore.collection("chat").add({

                        message: message,
                        messageId: vuexContext.state.authKey,
                        createAt: new Date(),
                        ay: new Date().getMonth(),
                        dakika: new Date().getMinutes(),
                        gün: new Date().getDate(),
                        saat: new Date().getHours(),
                        yıl: new Date().getFullYear(),
                        userName: vuexContext.state.chatName.name
                    });
                }
            },
            nuxtServerInit(vuexContext) {
                return axios.get('https://tenet-ceb48-default-rtdb.firebaseio.com/user.json')
                    .then(res => {
                        let data = res.data
                        let userArray = []
                        for (let key in data) {
                            userArray.push({ firebaseId: key, ...data[key] })
                        }
                        vuexContext.commit('setUserData', userArray)
                    })
            },
            addUserProfile(vuexContext, profileData) {
                return axios.post('https://tenet-ceb48-default-rtdb.firebaseio.com/user.json', { ...profileData, id: vuexContext.state.authKey })
                    .then(res => {
                        vuexContext.commit('addUser', { ...profileData, id: vuexContext.state.authKey })
                    })
            },
            initFirebaseName(vuexContext, firebaseName) {
                vuexContext.commit('setfirebaseName', firebaseName)
            },
            ubdateUser(vuexContext, user) {
                return axios.put('https://tenet-ceb48-default-rtdb.firebaseio.com/user/' + user.firebaseId + '.json', { ...user, id: vuexContext.state.authKey })
                    .then(res => {
                        vuexContext.commit('ubdateUser', res.data)
                    })
            },
            logout(vuexContext) {
                vuexContext.commit('clearAuthKey')
            }
        },
        getters: {
            isAuthenticated(state) {
                return state.authKey != null
            },
            getUserData(state) {
                return state.userData
            },
        }
    })
}

export default createStore