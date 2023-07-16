import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'   


function Best() {

    const [best, setBest] = useState([])

    const getData = async () => {
        const { data , status } = await axios.get(`http://localhost:3333/api/beer/top`)
       
        if (status === 200) {
            console.log(data)
            setBest([...data])
        }
       
    }


    useEffect(() => {
       getData()
       console.log(best)
    }, [])


    return ( 
            <BestContainer className='best_container'>
                <h4>Best</h4>
                <p>가장 인기있는 맥주를 만나보세요</p>
                {best.length > 0 && <StBoxContainer>
                    <StBox>
                        <div>1</div>
                        <img src={best[0].image}></img>
                    </StBox>
                    <StSecondContainer>
                        <StBoxSecond>
                            <div>2</div>
                            <img src={best[1].image}></img>
                        </StBoxSecond>
                        <StBoxSecond>
                            <div>3</div>
                            <img src={best[2].image}></img>
                        </StBoxSecond>
                        <StBoxSecond>
                            <div>4</div>
                            <img src={best[3].image}></img>
                        </StBoxSecond>
                        <StBoxSecond>
                            <div>5</div>
                            <img src={best[4].image}></img>
                        </StBoxSecond>
                    </StSecondContainer>
                </StBoxContainer>}
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
    background-color: white;

    div {
        width: 52px;
        height: 52px;
        background: #f1f1f1;
        text-align: center;
        line-height: 52px;
        font-weight: bold;
    }

    img {
        width: 100%;
        height: calc(100% - 52px);
        object-fit: contain;
    }
`

const StBoxSecond = styled.div`
    width: calc(50% - 5px);
    height: 225px;
    background-color: white;
    object-fit: contain;
    div {
        width: 52px;
        height: 52px;
        background: #f1f1f1;
        text-align: center;
        line-height: 52px;
        font-weight: bold;
    }

    img {
        width: 100%;
        height: calc(100% - 52px);
        object-fit: contain;
    }
`

const StSecondContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 700px;
`

export default Best;