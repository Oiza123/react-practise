import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetch() {
    
  /*fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => console.log(data))*/
    
  //fetching data using axios and useEffect
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
  return (
    <div>
   <ul>
    {
        posts.map(posts => (<li key ={posts.id}>{posts.title}</li>))
    }
   </ul>
    </div>
  )
}

export default DataFetch