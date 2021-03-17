import React, { useState } from 'react';
import Result from './Result';

const Page3 =(props)=>{

    //  const [show2,setShow2]=useState(true);
    const [page3,pageData] = useState([]);
    const [clone,cloneData] = useState([{}])
    console.log("v>>>>>>>>>>>>>>>>>>>>>>nnnnnnnnnnnnnnnnnnnnnnn>",clone)


    const Click2 =()=>{
       props.setShow(3)
    }

    const cloneAllData = [...clone];
    console.log("vikasssssssssssssssssssssssssssssssssssssss",cloneAllData)

   const handleInput =(e,i)=>{
            
             const {id, value} = i.target;

            pageData({...page3,[id] : value})

            cloneAllData[e].Dish = i.target.value;
            cloneData(cloneAllData);

             console.log("finalData3333", page3)
             props.setAllData({...props.allData,
                [id] : value
            })

   }

   const handleInput1 =(i,e)=>{

    cloneAllData[i].noofSever = e.target.value;
      cloneData(cloneAllData)


   }


   function handleAdd(){
    const values = [...cloneAllData];
    values.push({});
        cloneData(values) 

   }

   function handleRemove(i){
    const values = [...clone]
    values.splice(i,1);
    cloneData(values);
}
   console.log(props.allData,"vikkkkassssssssssssssssssssssssssssssssss")


    return(
        <>
        {
        <div>


        <div id ="1" className="conatiner">
         <lebal id="a">Please Select a Dish</lebal>

         {

             clone.map((filedData, index)=>{
                 return(
                     <div key ={`${filedData}-${index}`}>

                     <select onChange={e=>handleInput(index,e)} width="200px" id="DishName">
                         <option value={filedData.value || ""}>---</option>
                       {props.Valuess.map((index)=>{

                              return<option value={index.name}>{index.name}</option>
                                   })} 
                                       </select><br></br>
                                       <lebal id="inputNumber"> Enter Input Number</lebal><br></br>
                                       <select onChange={e=>handleInput1(index,e)} width="200px" id= "Servings">
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
                                        <button type ="button" onClick={e=>handleRemove(index,e)}>X</button> 
                                        

                     </div>




                 )

             })
         }
         {/* <select onChange={ e=>handleInput(index,e)} width="200px" id="DishName">
         {props.Valuess.map((index)=>{

            return<option value={index.name}>{index.name}</option>
            })} 
         </select><br></br>
         <lebal id="inputNumber"> Enter Input Number</lebal><br></br>
         <select onChange={handleInput1} width="200px" id= "Servings">
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
            </select><br></br> */}



            <button type="button" onClick={()=>handleAdd()}>+</button>
            

            <div>{page3.Meal2}</div>

            <div>{page3.numbers}</div>
            <button>Pre</button>
        <button id="button2" onClick={()=> Click2()}>Next</button>
        </div>



        

        </div>
        }
        </>
    )
}
export default Page3;
