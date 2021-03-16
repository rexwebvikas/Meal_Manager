import React,{useState,useEffect} from 'react';
import './Meal.css';
import Page2 from './Page2';
import data1 from './data.json';


const Page1 =()=>{
    const [show,setShow] = useState(true);

     const [data, setData] = useState([]);
    const [data2, setData2] = useState([])
    const[allData, setAllData] =useState([]);
    console.log(data2)





    const handleInput =(e)=>{
        const {id,value} = e.target;
    
         setData({...data,[id]: value})

         setAllData({...allData,
            [id]: value
         })

    }
    console.log("vvvvvvvvvvvvvvvvv",data)

    useEffect(

        function fetch(){
            setData2(data1.dishes)
        }
        
     
    , [])
   



    const Click=()=>{
        setShow(false)
      

    }

  const Datass= data2.filter((FilterData) =>{return FilterData.availableMeals.includes(data.Meal)
  })
  console.log(Datass,"vikas")

    return(
        <>
        {show ?
           <div>
      
         <div id ="0" className="container" >
        <lebal id="a">Please Select a Meal</lebal><br></br>
        <select onChange={handleInput} width= "200px" id="Meal">
        <option value="">Select....</option>
        <option value="breakfast">BreakFast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        </select><br></br>
        <lebal id="inputNumber"> Enter Input Number</lebal><br></br>
        <select onChange={handleInput} width="200px" id= "number">
            <option value="Select" >Select.....</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
       
       
        <button id="button1" onClick={data.Meal && data.number && Click}>Next</button>

        </div>
        <div>{data.Meal}</div>
        <div>{data.number}</div>
        
        </div> :<Page2 
            Values ={Datass}
            allData= {allData} 
            setAllData = {setAllData}
       
        />}  
        </>

    )
        }
         export default Page1;