import React, { Component } from 'react'
import Gallery from "./Gallery"
import { Helmet } from 'react-helmet'
const Home = (props) => {
    
    
 return (
  <div>
        <Helmet>
          <title>{ "WhichBG? - Home" }</title>
        </Helmet>
   <Gallery allPosts={props.allPosts}/>
  </div>
 )
}

export default Home