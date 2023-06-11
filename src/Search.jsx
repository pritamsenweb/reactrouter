import React, { useState } from 'react'
import Sresult from './Sresult';

const Search = () => {

  const [usearch, SetUsearch] = useState("");
  const inputAny = (event) => {
    const data = event.target.value;
    SetUsearch(data);
  }
  return (
    <div className='searchbar'>
        <input type='text' placeholder='Search Image here' onChange={inputAny} value={usearch}/>
        {usearch ==="" ? null : <Sresult name={usearch}/>}
    </div>
  )
}

export default Search