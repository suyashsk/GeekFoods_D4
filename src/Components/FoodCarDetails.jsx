
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const FoodCarDetails = () => {
    const {id} = useParams();
    const[foodDetails,setFoodDetails] = useState([]);
    const[singleFood,setSingleFood] = useState([]);
    useEffect(()=>{
        async function fetchDataa(){
            const options = {
                method: 'GET',
                url: 'https://pizzaallapala.p.rapidapi.com/productos',
                headers: {
                  'x-rapidapi-key': '9b085f30c1msh85a0ab7c06ce69fp1b6e1ajsn33b112806180',
                  'x-rapidapi-host': 'pizzaallapala.p.rapidapi.com'
                }
              };

                const response = await axios.request(options);
	            console.log(response.data.productos);
                setFoodDetails(response.data.productos);
                
        }
        fetchDataa();
    },[ ])
    console.log(foodDetails);
    
    useEffect(()=>{
        if(foodDetails.length > 0){
        const numeric = parseInt(id)
        const item = foodDetails.find((item)=> item.id === numeric)
        setSingleFood(item);
        }
        
    },[foodDetails,id])
    console.log(singleFood);


  return (
    <div className='main_fodd_details_container'>
        <div className='left'>
        {singleFood.linkImagen !== null ? <img src={singleFood.linkImagen} alt='pizza image' /> : <img src={pizza} />}
        </div>
        <div className='right'>
            <h3 className='pizhead'>Pizza Details </h3>
           <p className='pizname'>Pizza Name : {singleFood.nombre}</p>
           <p className='pizname'>Description : {singleFood.descripcion}</p>
           <p className='pizname'>{singleFood.precio ? `Price : ${singleFood.precio} `: ' ' }</p>
        </div>
    </div>
  )
}

export default FoodCarDetails