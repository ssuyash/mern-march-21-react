const initialState = [
    {task:"Learn NLP", status:"In Progress"}
]


const reducer = (state=initialState, action)=>{
    switch(action.type){
        case "ADD_TASK":
            return state
        case "DELETE_TASK":
            return state
        case "CHANGE_STATUS":
            return state
        default:
            return state
    }
}

export default reducer