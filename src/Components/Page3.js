import React, { useState } from 'react';
import Result from './Result';

const Page3 =(props)=>{

    const [show2,setShow2]=useState(true);
    const [page3,pageData] = useState([]);


    const Click2 =()=>{
        setShow2(false)
    }

   const handleInput =(e)=>{
            
             const {id,value} = e.target;

             pageData({...page3,[id] : value})

             console.log("finalData3333", page3)
             props.setAllData({...props.allData,
                [id] : value
            })

   }
   console.log(props.allData,"vikkkkassssssssssssssssssssssssssssssssss")


    return(
        <>
        {show2 ?
        <div>


        <div id ="1" className="conatiner">
         <lebal id="a">Please Select a Dish</lebal>
         <select onChange={handleInput} width="200px" id="DishName">
         {props.Valuess.map((index)=>{

            return<option value={index.name}>{index.name}</option>
            })} 
         </select><br></br>
         <lebal id="inputNumber"> Enter Input Number</lebal><br></br>
         <select onChange={handleInput} width="200px" id= "Servings">
         <option value= "Select">Select.....</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option> 
            </select><br></br>

            <div>{page3.Meal2}</div>

            <div>{page3.numbers}</div>
            <button>Pre</button>
        <button id="button2" onClick={page3.DishName && page3.Servings && Click2}>Next</button>
        </div>



        

        </div>:<Result allData={props.allData} />}
        </>
    )
}
export default Page3;
