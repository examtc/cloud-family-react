import { settingData } from './actionTypes'
import axios from 'axios'

const syncSettingData =list => ({
    type: settingData,
    list
})

const asyncSettingData = () => {
    return dispatch => {
        let data = JSON.parse(localStorage.getItem('userInfo'))
        axios.get(`http://39.106.73.167/setting/queryp?uuid=${data.uuid}`)
        .then(respones => ({ respones: respones.data }))
        .then(result => {
            dispatch(syncSettingData(result))
        })
    }
}

export {
    syncSettingData,
    asyncSettingData
}