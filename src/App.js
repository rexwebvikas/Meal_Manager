import React from 'react';
import Header from './Components/Header';
import './App.css';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';


function App() {
  // const [show,setShow] = setState(0);
  // hideComponent(show){
  //   switch(show){
  //     case 0:
  //       <Page1 setShow={setShow}/>
  //       break;
       
  //   }
  // }
  
  return (
    <div>
      <Header/>
      <Page1/>
      {/* <Page2/> */}
      {/* <Page3/> */}
    </div>
  );
}

export default App;
