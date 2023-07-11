import React from 'react'
import styled from 'styled-components'

const Pagination = () => {

    const numbers = [1,2,3,4,5,6,7,8]

  return (
    <STPagination>
        <button className='arrow'>&lt;</button>
       {
        numbers.map((val,idx) => {
            return <button key={idx}>{val}</button>
        })
       }
        <button className='arrow'>&gt;</button>
    </STPagination>
  )
}


const STPagination = styled.div`
    width: 586px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 5rem;
    
    button {
        border: none;
        outline: none;
        background-color: inherit ;
        font-size: 15px;
        font-weight: medium;
        cursor: pointer;
        color: #8f8f8f;
    
       &:hover,
       &:active {
        color: #000000;
       }
    }

    
    
`
export default Pagination