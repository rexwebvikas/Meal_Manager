import React,{useState} from 'react';
import Header from './Components/Header';
import './App.css';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Result from './Components/Result';
import data1 from './Components/data.json';


function App() {
  const [show,setShow] = useState(0);

  const [data, setData] = useState([]);
  console.log("data")
  // const [data2, setData2] = useState([])
  const[allData, setAllData] =useState([]);
  console.log("allData!!!!!!!!!!!!!!!!!!!!!!!!1",allData)
  const [clone,cloneData] = useState([{}]);
  console.log("clonedata<<<<<<<<<<<<<<<<<<<<<<<",clone)
//  const  hideComponent=(show)=>{

console.log("^^^",data1)

// debugger
    // switch(show){
    //   case true:
    //     return <Page1 setShow={setShow} setData={setData} show={show} allData= {allData} 
    //     setAllData = {setAllData}/>
    //   case false:
    //     console.log("&&&")
    //     return<Page2 setShow ={setShow} Values ={data} show={show}
    //     allData= {allData} 
    //     setAllData = {setAllData}/>

    //     case 2:
    //       return<Page3 setShow ={setShow}/>

    //       case 3:
    //          return<Result setShow= {setShow}/>
        
       
    // }
  console.log("vikassssssssnnnsnsnsns",allData);
  
  return (
    <>{
      show == 0 &&
    <Page1 setShow={setShow} setData={setData} allData= {allData} 
        setAllData = {setAllData} data ={data} />}

   { show == 1 &&
     <Page2 setShow ={setShow} Values ={data1.dishes} show={show} allData= {allData} 
        setAllData = {setAllData} cloneAllData={clone} cloneData={cloneData}/>}
{

 show == 2 &&
     <Page3 setShow ={setShow} Valuess ={data1.dishes} show={show} allData= {allData} 
        setAllData = {setAllData} cloneAllData={clone} cloneData={cloneData}/>} 

{

show == 3 &&
    <Result setShow ={setShow} Valuess ={data1.dishes} show={show} allData= {allData} 
       setAllData = {setAllData} cloneAllData={clone} cloneData={cloneData}/>} 
         
    
</>
  );
}

export default App;
