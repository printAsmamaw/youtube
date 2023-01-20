import React from 'react'
import {Posts} from './Posts'
import './Recommended.css'
import Videocard from './Videocard'
function Recommended(props) {
  return (
    <div className='recommended'>
  {Posts.map((value=>
        <Videocard key={value.id}
        id={value.id}
        themp={value.themp}
        peronal={value.peronal}
        title={value.title}
        description={value.description}
        video={value.video} 
        content={value.content} />    
        ))}
        </div>
  )
}

export default Recommended
