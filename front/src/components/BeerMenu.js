import React from 'react'
import styled from 'styled-components'
import { Filter } from './Filter'
import SearchBar from './SearchBar'
import BeerCard from './BeerCard'
import Pagination from './Pagination'

const BeerMenu = () => {
  return (
    <STBeerMenuContainer>
        <h1>BeerMenu</h1>
        <div className='beer_menu'>
            <h2>All</h2>
            <h2>Lager</h2>
            <h2>Ale</h2>
        </div>
        <div className='filter_search'>
            <div className='filter'>
                <Filter content={'리뷰 많은 순'} big={true}/>
                <Filter content={'인기순'} big={false}/>
                <Filter content={'최신순'} big={false}/>
            </div>
            <div className='search'>
                <SearchBar/>
            </div>
        </div>
        <div className='beer_card-container'>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
        </div>
        <div>
            <Pagination/>
        </div>
    </STBeerMenuContainer>
  )
}

const STBeerMenuContainer = styled.div`
    width: 100%;
    height: 2512px;
    margin-top: 2rem;
    display:flex;
    padding-top: 5rem;
    flex-direction: column;
    align-items: center;

    .beer_card-container {
        width: 832px;
        height: 1946px;
        margin-top: 5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }

    .beer_menu {
        display: flex;
        gap: 50px;
        margin-top: 50px;
    }

    .filter_search {
        display: flex;
        margin-top: 5rem;
        width: 920px;
        justify-content: space-between;
        align-items: center;
    }
   

    .filter {
        display: flex;
        gap: 20px;
    }
`

export default BeerMenu