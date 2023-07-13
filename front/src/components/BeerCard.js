import React from 'react'
import styled from 'styled-components'
import src from '../asset/beer.jpeg'

const BeerCard = ({title,image,rating,country,alcohol,type}) => {
  return (
    <STBeerCard>
        <div className='img_wrapper'>
            <img className='img' src={image}>
            </img>
        </div>
        <div className='beercard_content'>
            <p className='rate'>평점</p>
            <p>{rating}</p>
            <p>{country.slice(0,8)}</p>
        </div>
        <h1 className='beercard_name'>
            {title.slice(0,8)}
        </h1>
        <div className='beercard_info'>
            {type} / {alcohol}
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
    padding: 5px;
    
    .img_wrapper {
        width: 100%;
        height: calc(100% - 125px);
    }

    .img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

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