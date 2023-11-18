import { useState } from "react"
import PropsComponents from "./components/sample/PropsComponents"
import { CounterOne } from "./components/sample/State"

function App() {
  const [count, setCount] = useState(0);
  function onHandleClick(){
    setCount(count + 1)
  }
  return (
    <div className="box">
      <h1>{count}</h1>
      <CounterOne handleClick={onHandleClick}/>
    </div>
  )
}

export default App
