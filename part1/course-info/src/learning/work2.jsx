import { useState } from "react"

const Work2 = () => {
  const [value, setValue] = useState(10)
  

//   const setToValue = (newValue) => () => {
//     console.log('value now', newValue)  // print the new value to console
//     setValue(newValue)
//   }

const setTovalue =(val)=>()=>{
    console.log("new value: ",val);
    setValue(val)
}
  
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', height:'100vh'}}>
      {value}

      <button onClick={setTovalue(1000)}>thousand</button>
      <button onClick={setTovalue(0)}>reset</button>
      <button onClick={setTovalue(value + 1)}>increment</button>
    </div>
  )
}

export default Work2;