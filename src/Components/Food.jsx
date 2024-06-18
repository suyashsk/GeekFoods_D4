import React, { useEffect, useState } from 'react'
import Foodcard from './Foodcard';
import axios from 'axios'
const Food = () => {
    
    let perPAGE=6;
    const[food,setFood] = useState([]);
    const[page,setPage] = useState(1);
    const[foodie,setFoodie] = useState([]);
    const[totalResults,setTotalResults] = useState();
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
                setFoodie(response.data.productos)
                setTotalResults(response.data.productos.length)
        }

        fetchDataa();
    },[])
    console.log(foodie);


    useEffect(()=>{
        let offSet = page === 1 ? 0 : (page-1)* perPAGE;
        setFood(foodie.slice(offSet,offSet+perPAGE))
    },[foodie,page])

  return (
    <div className='food'>
        
        {
            food.map((food,index)=>{
                return(
                    <Foodcard food={food} key={index} id={food.id} />
                )
            })
        }
        
        <div className='pagination'>
            <button className='buttons' onClick={()=>setPage(prev=>prev-1)} disabled={page===1}>Previous</button>
            <span className='pageno'>Page {page} of {Math.ceil(totalResults/perPAGE)}</span>
            <button className='buttons' onClick={()=>setPage(prev=>prev+1) } disabled={page >=Math.ceil(totalResults/perPAGE)}>Next</button>
        </div>
    </div>
  )
}

export default Food
