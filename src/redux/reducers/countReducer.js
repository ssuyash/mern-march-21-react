const initialState = 10

//{type:"", payload:""}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case "INC":
            return state+1
        case "DEC":
            return state-1
        case "INC_VAL":
            return state + action.payload
        default:
            return state
    }
}

export default reducer