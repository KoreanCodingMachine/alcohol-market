import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Filter } from './Filter'
import SearchBar from './SearchBar'
import BeerCard from './BeerCard'
import Pagination from './Pagination'
import axios from 'axios'


const BeerMenu = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [hasMore, setHasMore] = useState(true)
   
    const getData = async () => {
        setIsLoading(prev => !prev)
        const a = await axios.get(`http://192.168.10.19:3000/api/beer/main?page=${page}`)
        // console.log(a.data.hasMore)
        setHasMore(prev => a.data.hasMore)
        setIsLoading(prev => !prev)
        setData(prevData =>[...prevData, ...a.data.items])
       
    }
    
    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement

        if (scrollTop + clientHeight >= scrollHeight && !isLoading ) {
            setPage(prevPage => prevPage + 1)
        }
    }

    useEffect(() => {
        if (!isLoading && hasMore) {
            getData()
        }
        console.log('loading', isLoading)
        console.log('page', page)
    }, [page])


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

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
           {
            data.length > 0 && data.map((v,i) => {
                    return <BeerCard 
                        key={v._id}
                        id={v.beerId}
                        title={v.title} 
                        image={v.image} 
                        rating={v.rating} 
                        country={v.country} 
                        alcohol={v.alcohol} 
                        type={v.type}
                        />
                })
            }
           
            {isLoading && <p>Loading...</p>}
        </div>
        <div>
            <Pagination/>
        </div>
    </STBeerMenuContainer>
  )
}

const STBeerMenuContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 2rem;
    display:flex;
    padding-top: 5rem;
    flex-direction: column;
    align-items: center;

    .beer_card-container {
        width: 832px;
        /* height: 1946px; */
        margin-top: 5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
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