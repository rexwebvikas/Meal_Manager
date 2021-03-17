import React,{useState} from 'react';
import Page3 from './Page3';



const Page2 =(props)=>{
    // const [Show1,setShow] = useState(true);
    const [page2 , setpageData] = useState([]);
    // const [data2, setData2] = useState([])


    console.log(props.data);

    const Click1 =()=>{

        props.setShow(2)
 }

 const handleInput =(e)=>{


    const {id,value} = e.target;
    
   setpageData({...props.page2, [id]: value})

   props.setAllData({...props.allData,
    [id]: value
})

 }
 console.log('allData',props.allData)


console.log("Datass",props.Values)



    return(
        <>
        { <div>

       
       <div id ="1" className="conatiner">
        <lebal id ="b">Please Select The Restaurant</lebal><br></br>
        <select onChange={handleInput}  width ="200px" id="RestaurantName">
       {props.Values.map((index)=>{

           return (
               
            <option value={index.restaurant}>{index.restaurant}</option>
             
           )
       })}  *

       {/* {props.Values.filter(data2 => data2.availableMeals == value).map(filterData=>{
           return<option value={filterData.availableMeals}>{filterData.availableMeals}</option>
       })} */}
          {/* {props.Values.filter((FilterData) =>{return FilterData.restaurant.includes(props.Values.restaurant)}).map((index)=>{
        return( <option>{index.restaurant}</option>
        
        )

       })} */}
        {/* {props.Values[0].restaurant.filter((FilterData) =>FilterData === props.selectedValue).map((index)=>{
            return( <option>{index.restaurant}</option>
    )

   })} */}


 {/* {props.Values[0].restaurant.data.filter((FilterData) =>FilterData === props.selectedValue).map((index)=>{
    return( <option>{index.restaurant}</option>
     )

  })} */}


              
          
       
        </select><br></br>
        <div>{page2.Meal1}</div>
        <button>Pre</button>
        <button id="button2" onClick={()=>Click1()}>Next</button>

        </div>
      

        </div> 
        }
        </>
    )

    }


export default Page2;