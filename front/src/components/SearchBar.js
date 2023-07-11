import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {
  return (
    <STSearchContainer>
        <STSearchBar />
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
`

const STSearchContainer = styled.div`
   position: relative;

   svg {
        width: 32px;
        height: 32px;
        position:absolute;
        left: 0;
   }

   display: flex;
   justify-content: center;
   align-items: center;
`

export default SearchBar