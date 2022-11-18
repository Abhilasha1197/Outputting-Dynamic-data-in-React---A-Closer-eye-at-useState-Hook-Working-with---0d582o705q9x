import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
 const[data,setData] = useState(null);
 const [print,setprint] = useState(true);
  function getData(val){
    setData(val.target.value)
  }
return (
    <div id="main">
      <input id='input' onChange={getData}></input>
      <button id='button' onClick={()=>setprint(print)}>Click</button>
      <p id='text'> Hello my name is {data} and I study at Newton School</p>
    </div>
  )
}


export default App;
