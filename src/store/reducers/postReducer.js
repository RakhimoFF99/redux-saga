

const posts = []
export const   postReducer = (state = posts , action) => {
    switch(action.type) {
        case "FETCH_POST" : return [...state,{...action.payload}]
        default: return state
    }

}   