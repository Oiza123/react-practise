import { createContext, useReducer } from "react";
import axios from "axios";
import PostReducer, { initalState } from "../PostReducer";

const PostsContext = createContext()

export function PostProvider ({children}){
  const [posts, dispatch] = useReducer(PostReducer, initalState)

  /*
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then(res => {
        console.log(res)
        setPosts(res.data.products)
    })
    .catch(err => {
        console.log(err)
    })
},[]);
*/
    const callPost = async function(){
        try {
            const reponse = await  axios.get('https://dummyjson.com/products');
            const data = await reponse.data;
            return data;      
        } catch (error) {
           console.error(error.message);
           return [];
        }
    }

    const fetchStart = function(){
    
        const posts = callPost();
        dispatch({type:'FETCH_START',payload:posts})

    }

    return <PostsContext.Provider value={{posts,fetchStart}}>
        {children}
    </PostsContext.Provider>
}

export default PostsContext