import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = ({data, onSearch}) => {

  const [input, setInput] = useState(null)
  

  const onTextInput = (e) => {
    onSearch(e.target.value)
  }

  return (
    <STSearchContainer>
        <STSearchBar onChange={onTextInput}/>
        <AiOutlineSearch/>
    </STSearchContainer>
    
  )
}

const STSearchBar = styled.input`
    width: 300px;
    height: 48px;
    background: #d9d9d9;
    border: 1px solid white;
    border-radius: 30px;
    font-size: 24px;
    padding-left: 42px;
    line-height: 48px;

`

const STSearchContainer = styled.div`
   position: relative;

   svg {
        width: 32px;
        height: 32px;
        position:absolute;
        left: 7px;
   }

   

   display: flex;
   justify-content: center;
   align-items: center;
`

export default SearchBar