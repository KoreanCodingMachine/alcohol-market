import React from 'react'
import styled from 'styled-components'

export const Filter = ({content, big, onClick}) => {


  return (
    
       big 
       ? 
        <STFilter onClick={() => {onClick(content)}}>{content}</STFilter> 
       : 
        <STFilterSmall onClick={() => {onClick(content)}}>{content}</STFilterSmall>
    
  )
}

const STFilter = styled.div`
    width: 126px;
    height: 36px;
    border: 1px solid white;
    border-radius: 30px;
    text-align:center;
    line-height: 36px;
    background: #b6b6b6;
    color: #f2f2f2;
`

const STFilterSmall = styled.div`
    width: 82px;
    height: 36px;
    border: 1px solid white;
    border-radius: 30px;
    text-align:center;
    line-height: 36px;
    background: #b6b6b6;
    color: #f2f2f2;
`