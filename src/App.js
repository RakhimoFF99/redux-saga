
import './App.css';
import { useDispatch ,useSelector} from 'react-redux';
import { INCREMENT ,DECREMENT} from './store/actions/actionTypes/increment';


function App() {
  const dispatch = useDispatch()
  const counter = useSelector(counter => counter.counterReducer )

  const addCounter = () => {
    dispatch({type:INCREMENT})
  }
 const  subtractCounter = () => {
    dispatch({type:DECREMENT})
  }
  return (
    <div className="App">
    {counter}
    <button onClick={() => subtractCounter()}>-</button>
    <button onClick={() => {
      addCounter()
    }}>+</button>
    <br/>
    </div>
  );
}

export default App;
