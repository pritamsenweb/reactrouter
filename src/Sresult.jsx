import React from 'react'

const Sresult = (props) => {
  const rimg = `https://source.unsplash.com/user/erondu/400x300/?${props.name}`;
  return (
    <div>
        <img src={rimg} alt='Search'/>
    </div>
  )
}

export default Sresult