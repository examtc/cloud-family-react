import { CHANGE } from './action-types'

const defaultState = {
    selectedT:"home"
}

const reducer = (state=defaultState,action) => {
    console.log(action)
    switch(action.type){
        case CHANGE: return { selectedT: action.payload }
        default: return state
    }
    
}

export default reducer