// import { Action } from 'Directory';
import { GET_LIST,UPDATE_LIST, PRISE } from './actionType'
 
const INITIAL_STATE = {
    list:[]
}

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    if(action.type === GET_LIST){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list=action.data.data
        return newState
    }
    if(action.type === UPDATE_LIST){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list=[...state.list,...action.data.data]
        return newState
    }
    if(action.type === PRISE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list[action.data.index].uglike=newState.list[action.data.index].uglike.concat(action.data.value)
        return newState
    }
    return state
}
