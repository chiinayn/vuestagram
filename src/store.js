import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            name : 'kim',
            age : 20,
            like : 30
        }
    },
    mutations : {
        changeName(state) {
            state.name = 'Suzuki'
        },
        increaseAge(state) {
            state.age++
        }
    }
})

export default store