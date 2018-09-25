import React from 'react';

function Filters(props){
  return (
    <div>
      <label>Sort By: </label>
      <select onChange={(event) =>{
        props.onSortChange(event.target.value)
      }}>
        <option>TeamDefault</option>
        <option>Name</option>
        <option>PlayerPoints</option>
      </select>
    </div>)
}

export default Filters;
