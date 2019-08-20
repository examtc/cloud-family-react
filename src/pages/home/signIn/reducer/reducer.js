import { siginData } from './actionTypes'

const defaultState = {
    list: []
}

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        case siginData: 
            return {
                list: action.list
            }
        default: 
            return {
                state
            }
    }
}

export default reducer