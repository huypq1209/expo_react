import {call,put,takeLatest} from 'redux-saga/effects'
import types from './types'
import actions from './actions'
import instance from '../../../utilities/axios'

const endpoint = '/users';
function* login(params){
    const data=yield call(instance.request,{
        url:'${endpoint}/signIn',
        method:'POST',
        data:params
    })
    yield put(actions.signIn(data))
}