export const increament = ()=>{
    return (dispatch)=>{
        dispatch({
            type:"INC",
            payload:""
        })
    }
}


export const decrement = ()=>{
    return (dispatch)=>{
        dispatch({
            type:"DEC",
            payload:""
        })
    }
}

export const incByValue = (num)=>{
    return (dispatch)=>{
        dispatch({
            type:"INC_VAL",
            payload:num
        })
    }
}