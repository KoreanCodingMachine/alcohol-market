import React from 'react'
import styled from 'styled-components'

const DropDown = () => {
  return (
    <STDropDown>
        <div>프로필 설정</div>
        <div>로그아웃</div>
    </STDropDown>
  )
}

const STDropDown = styled.div`
    display: inline-block;

    div {
        display: none;
    }

`

export default DropDown