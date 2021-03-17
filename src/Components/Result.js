import React,{useState} from 'react';

const Result =(props)=>{
    const [clone,cloneData] = useState([{}])
console.log("result all Data", props.allData)
console.log("result all Data", props.allData.Meal)
console.log("clonesAllData",clone);

console.log("Props llllllllllll ",props);
    return(
        <>
           
                <div id="Meal3" className="container">
                <label id ="b">Meal</label> ---
                <span id="mail">{props.allData.Meal}</span><br></br>
                <label>No.of people</label> ---
                <span id="mail1">{props.allData.number}</span><br></br>
                <label>Restaurant</label> ---
                <span id="mail2">{props.allData.RestaurantName}</span><br></br>
                {props.cloneAllData.map((finalData)=>{
                    console.log("final data",finalData)
                   

                    return(
                        <>

                            <label>Dishes</label>---
                            <span id="mail3">{finalData.Dish}</span><br></br>
                            <label>Servings</label>----
                            <span id="mail4">{finalData.noofSever}</span><br></br>
                        </>
                    )
                })}
              


                </div>

        
        </>
    )
}
export default Result;
