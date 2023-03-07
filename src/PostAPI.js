import React,{useState} from 'react'
import axios from 'axios';
function PostAPI() {
  const[data,setData] = useState({
    userId:"",
    title:"",
    body:"" 
  })
  
  function submit(e){
    e.preventDefault();

    //making a post request using axios
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      userId:data.userId,
      title:data.title,
      body:data.body
    
    })
    .then(res=>{
      console.log(res.data)
    })
  }

  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  return (
    <div>
      <form onSubmit={(e)=> submit(e)}>
        <div>
        <input onChange={(e)=>handle(e)} id="userId" value={data.userId} type="text" placeholder='userId' /></div>
        <div>
        <input onChange={(e)=>handle(e)} id="title" value={data.title}  type="text" placeholder='title' /></div>
        <div>
        <input onChange={(e)=>handle(e)} id="body" value={data.body}  type="text" placeholder='body' /></div>
        <button>Submit</button>          
      </form>
    </div>
  )
}

export default PostAPI