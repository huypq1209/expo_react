import {all, fork} from 'redux-saga/effects'
import UserSaga from '../components/users/redux/sagas'

function* rootSaga(){
    yield all([UserSaga,].map(fork));
}
export default rootSaga;
