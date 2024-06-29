import React from 'react'
import './CardArrivals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function CardArrivals({imageSrc,imageAlt,title,price,promo}) {
  return (
    <div className='containerCards'>
     <div className="card-list">
        <div className='imageCard'>
               <div className='tag-container'>
                <div className="tag">NEW</div>
                <div className="tag tag-discount">-50%</div>
                </div> 
        <div style={{
        backgroundImage:`url(${imageSrc})`,
        width:'250px',
        height:'250px',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        }}></div>
        <div className='button'>
          Add to cart
        </div>
        </div>
        <hr></hr>
        <div className='contentCards'>
        <FontAwesomeIcon icon={faStar} />
        <span><FontAwesomeIcon icon={faStar} /></span>
        <span><FontAwesomeIcon icon={faStar} /></span>
        <span><FontAwesomeIcon icon={faStar} /></span>
        <span><FontAwesomeIcon icon={faStar} /></span>
         <h3 className='titleCard'>{title}</h3>
         <h3>${price}{" "}<span style={{display:'inline-flex' , fontWeight:'normal', textDecoration:"line-through", color:'#ccc'}}>${promo}</span></h3>
        </div>
      </div>
    </div>
  )
}

export default CardArrivals