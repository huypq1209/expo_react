import types from "./types";

const initialState={
    id:null,
    username:null,
    displayName:null,
    favorite:[],
    mobile:null,
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case types.SIGN_IN:
            const {id, username,displayName,favorite,mobile}=action.payload
            return{
                ...state,
                id,username,displayName,mobile,favorite
            }
        default:
            return    
    }
}
export default reducer