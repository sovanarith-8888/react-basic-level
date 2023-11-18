import React from 'react'

const PropsComponents = (props) => {
  console.log(props)
  return (
    <section className='w-[50%] rounded-lg mt-4 bg-sky-400 mx-[auto] text-center'>
      <p>{props.name}</p>
      <p>{props.profile}</p>
    </section>
  )
}

const DestructuringProps1 = ({name,age,address}) => {
  return(
    <>
      {name}
      {age}
      {address}
    </>
  )
}
const DestructuringProps2 = (props) => {
  const {name,age,address} = props;
  return(
    <>
      {name},
      {age},
      {address}
    </>
  )
}

export default PropsComponents
