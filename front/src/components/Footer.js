import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <STFooter>
        <div className='information'>
            <div className='information_detail'>
                <p>Dev.</p>
                <hr/>
                <p>JuHyeong Kim</p>
                <p>pon161405@gmail.com</p>
            </div>
            <div className='information_detail'>
                <p>Design.</p>
                <hr/>
                <p>SuJin Kim</p>
                <p>ulussujin043@gmail.com</p>
            </div>
        </div>
    </STFooter>
  )
}


const STFooter = styled.div`
    background: #d9d9d9;
    width: 100%;
    height: 200px;
    .information {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
        height: 100%;
    }

    .information_detail {
        width: 221px;
        height: 84px;
    }

`

export default Footer