import React from 'react'
import './Articles.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function Articles({images,text}) {
  return (

    <div className='article-card'>
        <div className='cardArt'>    
          <div className='article-content'>  <img src={images} alt="" />
            <p>{text}</p>
            <Link href='#'>Read More {" "}
            <FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>
        </div>
    </div>
  )
}

export default Articles