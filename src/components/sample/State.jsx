import React from 'react'

const CounterOne = (props) => {
  function increment(){
    props.handleClick();
  }
  return (
    <div className=''>
      <button className='btn-primary' onClick={increment}>+ Increment</button>
    </div>
  )
}

export {CounterOne}


// State is manage within the component Variable declared in the function body
// Props get passed to the component