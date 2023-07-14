import React from 'react'

const SelectBox = ({data, onClick}) => {
 
  return (
    <div onClick={() => {onClick()}}>SelectBox</div>
  )
}

export default SelectBox