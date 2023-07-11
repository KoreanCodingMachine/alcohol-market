import React from 'react'
import styled from 'styled-components'
import src from '../asset/beer.jpeg'

const BeerCard = () => {
  return (
    <STBeerCard>
        <div>
            <img src={src} width={260} height={312}>
            </img>
        </div>
        <div className='beercard_content'>
            <p>별</p>
            <p>평점</p>
            <p>(댓글 수)</p>
        </div>
        <h1 className='beercard_name'>
            맥주 이름
        </h1>
        <div className='beercard_info'>
            주종 / 용량
        </div>
        <div className='beercard_smell-wrapper'>
            <div className='beercard_smell'>
                사과향
            </div>
            <div className='beercard_smell'>
                사과향
            </div>
        </div>
    </STBeerCard>
  )
}

const STBeerCard = styled.div`
    width: 260px;
    height: 452px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow: auto;

    .beercard_content {
        display: flex;
        gap: 10px;
        margin-top: 5px;
        margin-left: 5px;
    }

    .beercard_name {
        font-size: 24px;
        margin-left: 5px;
    }

    .beercard_info {
        color: #929292;
        margin-left: 5px;
    }

    .beercard_smell-wrapper {
        display: flex;
    }

    .beercard_smell {
        border: 1px solid gray;
        width: calc(20%);
        text-align: center;
        margin-left: 5px;
    }

`

export default BeerCard