import {combineReducers} from 'redux'
import UserReducer from '../components/users/redux/reducers'

const rootReducer= combineReducers({
    UserReducer,
})
export default rootReducer;