import React, {useReducer} from 'react'
import { initalState } from './context/PostReducer';
import PostReducer from './context/PostReducer';
import useTimeHook from './customHooks/useTimeHook';

function DataFetch() {

  const [state, dispatch] = useReducer(PostReducer, initalState)
  const [currentTime, setCurrentTime] = useTimeHook();

    
      const handleFetch = () => {

        console.log(currentTime);
      dispatch({type:"FETCH_START"})
        fetch('https://dummyjson.com/products')
        .then((res)=> {  
          return res.json() ;
        })
        .then((data)=>{
        dispatch({type:"FETCH_SUCCESS", payload:data.product}) 
        })
        .catch((err) => {
          dispatch({type: "FETCH_ERROR"})
          setCurrentTime('12 march, 2030');
        })
      };

      
    
  return (
    <div>
      <button onClick={handleFetch}>
        {state.loading ? "Wait..." : "Fetch the post"}
      </button>
      <p>
        {state.post?.title}
      </p>
      <span>{state.error && "Something went wrong!"}</span>
    </div>
  )
}

export default DataFetch