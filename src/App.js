
import './App.css';
import { useDispatch ,useSelector} from 'react-redux';
import fetchPost from './store/actions/fetchPostCreator';
import asyncIncrementCreator from './store/actions/asyncIncrementCreator';
import asyncDecrementCreator from './store/actions/asyncDecrementCreator';


function App() {
  const dispatch = useDispatch()
  const counter = useSelector(counter => counter.counterReducer )
  const posts = useSelector(posts => posts.postReducer)


  const addCounter = () => {
    dispatch(asyncIncrementCreator())
  }
 const  subtractCounter = () => {
    dispatch(asyncDecrementCreator())
  }
  return (
    <div>
    <div style={{height:"100vh"}} className="App d-flex justify-content-center align-items-center flex-column">
      <h2>{counter}</h2>
    <div>

    <button className="btn btn-secondary" onClick={() => subtractCounter()}>DEC</button>
    <button className="btn btn-primary" onClick={() => {
      addCounter()
    }}>INC</button>
    
    <button onClick={() => dispatch(fetchPost())} className="btn btn-primary">Fetch data</button>
   

      
    </div>
 
 
    </div>
    {posts.length > 0 ? JSON.stringify(posts):""}
    </div>
  );
}

export default App;
