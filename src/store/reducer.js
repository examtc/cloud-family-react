import {
    combineReducers
} from 'redux'
import home from '../pages/home/reducer'
import setting from '../pages/home/setting/reducer/reducer'
import sigin from '../pages/home/signIn/reducer/reducer'
import colleague from '../pages/colleague/reducer'

const reducer = combineReducers({
    home,
    setting,
    sigin,
    colleague
})

export default reducer