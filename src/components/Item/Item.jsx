import React from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'
const Item = (props) => {
  const info = props

  let sizes = info.sizes
  const goToTheTop = () => {
    sessionStorage.setItem('done', 'done')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className='item'>
      <Link to={`/womazing/product/${props.id}`} onClick={() => goToTheTop()} >
        <div className='item-img'>
          <img className='item-img_img' src={props.img} alt="" />

          <div className='item-img_hover'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none">
              <path d="M0 12H31M31 12L20.186 1M31 12L20.186 23" stroke="white" />
            </svg>
          </div>
        </div>
        <h4 className='item-name'>{props.name}</h4>
        <p>${props.price}</p>
      </Link>

    </div>
  )
}

export default Item