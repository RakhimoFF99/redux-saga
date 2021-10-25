
const initialCounter = 0
export default function  (state = initialCounter,action)  {
        switch(action.type) {
            case "ASYNC_INCREMENT" : return state + 1
            case "ASYNC_DECREMENT" : return state - 1
            default:return state
        }
        
}