import React from 'react'
import Gallery from "./Gallery"
const Home = (props) => {
 return (
  <div>
   <Gallery allPosts={props.allPosts}/>
  </div>
 )
}

export default Home