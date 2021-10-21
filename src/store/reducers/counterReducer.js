
const initialCounter = 0
export default function  (state = initialCounter,action)  {
        switch(action.type) {
            case "INCREMENT" : return state + 1
            case "DECREMENT" : return state - 1
            default:return state
        }
        
}