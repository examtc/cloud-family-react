import { siginData } from './actionTypes'
import { get } from 'util/http'

const syncSiginData = list => ({
    type: siginData,
    list
})

const asyncSiginData = () => {
    return async (dispatch) => {
        let result = await get(`http://39.106.73.167/workpage`)
        dispatch(syncSiginData(result))
    }
}

export {
    syncSiginData,
    asyncSiginData
}