import React from "react";
import styled from 'styled-components'

function Banner() {
    return ( 
        <StBannerContainer>
           <div className="content-container">
                <div>
                     <h1>What's <br/> Your Beer Type</h1>
                </div>
                <p>간단한 설문을 통해 당신의 맥주 유형을 알아보세요!</p>
                <button>
                    <p>Get Start</p><p>&rarr;</p>
                </button>
           </div>
        </StBannerContainer>
     );
}

const StBannerContainer = styled.div` 
    background: #d9d9d9;
    width: 100%;
    height: 20rem;

    .content-container {
        display: flex;
        flex-direction: column;
        padding-top: 1.5rem;
        padding-left: 3.5rem;
        gap: 2rem;
    }

    h1 {
        font-weight: Medium;
        font-size: 64px;
    }

    button {
        width: 192px;
        height: 30px;
        border-radius: 32px;
        background: #404040;
        p {
            color: white;
        }

        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }
`

export default Banner;