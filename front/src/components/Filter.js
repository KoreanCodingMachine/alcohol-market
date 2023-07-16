import React from 'react'
import styled from 'styled-components'

export const Filter = ({content, onClick, filteredName, doubleClicked}) => {
  

  console.log(filteredName)
  console.log('-----', doubleClicked)
  return (
        <STFilter 
        onClick={() => {onClick(content)}} 
        content={content} 
        filteredName={filteredName}
        >
          {content}
        </STFilter> 
  )
}

const STFilter = styled.div`
    width: ${props => props.content === '도수순'? '128px' : '82px'};
    height: 36px;
    border: 1px solid white;
    border-radius: 30px;
    text-align:center;
    line-height: 36px;
    background: ${props => props.content === props.filteredName ? "red" : "#b6b6b6"};
    color: #f2f2f2;
    cursor: pointer;
`

