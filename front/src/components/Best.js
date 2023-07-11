import React from 'react';
import styled from 'styled-components'

function Best() {
    return ( 
            <BestContainer>
                <h4>Best</h4>
                <p>가장 인기있는 맥주를 만나보세요</p>
                <StBoxContainer>
                    <StBox>
                        <div>1</div>
                    </StBox>
                    <StSecondContainer>
                        <StBoxSecond>
                            <div>2</div>
                        </StBoxSecond>
                        <StBoxSecond>
                            <div>3</div>
                        </StBoxSecond>
                        <StBoxSecond>
                            <div>4</div>
                        </StBoxSecond>
                        <StBoxSecond>
                            <div>5</div>
                        </StBoxSecond>
                    </StSecondContainer>
                </StBoxContainer>
            </BestContainer>
        
     );
}

const BestContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    h4 {
        padding-top: 2rem;
        font-size: 48px;
        font-weight: bold;
    }
`

const StBoxContainer = styled.div`
    display: flex;
    gap: 10px;
    max-width: 1196px;
    justify-content: center;
`

const StBox = styled.div`
    width: 356px;
    height: 460px;
    background-color: #d9d9d9;

    div {
        width: 52px;
        height: 52px;
        background: #f1f1f1;
        text-align: center;
        line-height: 52px;
        font-weight: bold;
    }
`

const StBoxSecond = styled.div`
    width: calc(50% - 5px);
    height: 225px;
    background-color: #d9d9d9;

    div {
        width: 52px;
        height: 52px;
        background: #f1f1f1;
        text-align: center;
        line-height: 52px;
        font-weight: bold;
    }
`

const StSecondContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 700px;
`

export default Best;