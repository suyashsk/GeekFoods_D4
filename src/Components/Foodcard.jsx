import React from 'react'
import {Link} from 'react-router-dom'
import pizza from '../assets/pizza.jfif'
const Foodcard = ({food,key,id}) => {
  return (
    <div className='foodcard'>
        <Link className='knowMOre' to={`${id}`}>
        <div className='food_hold'>
        <div className='food_image'>
            {food.linkImagen !== null ? <img src={food.linkImagen} alt='pizza image' /> : <img src={pizza} />}
            
        </div>
        <div className='food_desc'>
            <p>{food.nombre}</p>
            <p>Rs.{food.precio}</p>
            {/* <p className='description'>{food.description}</p> */}
            
        </div>
        </div>
        </Link>
    </div>
  )
}

export default Foodcard