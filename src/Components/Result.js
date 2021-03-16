import React from 'react';

const Result =(props)=>{

console.log("result all Data", props.allData)
console.log("result all Data", props.allData.Meal)

    return(
        <>
           
                <div id="Meal3" className="container">
                <label id ="b">Meal</label> ---
                <span id="mail">{props.allData.Meal}</span><br></br>
                <label>No.of people</label> ---
                <span id="mail1">{props.allData.number}</span><br></br>
                <label>Restaurant</label> ---
                <span id="mail2">{props.allData.RestaurantName}</span><br></br>
                <label>Dishes</label> ---
                <span id="mail3">{props.allData.DishName}</span><br></br>
                <label>Servings</label> ---
                <span id="mail4">{props.allData.Servings}</span><br></br>



                </div>

        
        </>
    )
}
export default Result;