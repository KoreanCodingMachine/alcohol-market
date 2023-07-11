import React from 'react'
import styled from 'styled-components'
import src from '../asset/beer.jpeg'

const BeerCard = ({title,image,rating,country,alcohol,type}) => {
  return (
    <STBeerCard>
        <div>
            <img src={image} width={260} height={312}>
            </img>
        </div>
        <div className='beercard_content'>
            <p className='rate'>평점</p>
            <p>{rating}</p>
            <p>{country}</p>
        </div>
        <h1 className='beercard_name'>
            {title}
        </h1>
        <div className='beercard_info'>
            {type} / {alcohol}
        </div>
        {/* <div className='beercard_smell-wrapper'>
            <div className='beercard_smell'>
                사과향
            </div>
            <div className='beercard_smell'>
                사과향
            </div>
        </div> */}
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

        .rate {
            white-space: nowrap;
        }
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