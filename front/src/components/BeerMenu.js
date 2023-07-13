import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Filter } from './Filter'
import SearchBar from './SearchBar'
import BeerCard from './BeerCard'
import axios from 'axios'


const BeerMenu = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [hasNewData, setHasNewData] = useState([])
    const [filtered, setFiltered] = useState(false)
    const [filteredName, setFilteredName] = useState(null)

    const getData = async () => {
        setIsLoading(prev => {
            return !prev
        })
       
        const a = await axios.get(`http://localhost:3333/api/beer/main?page=${page}`)
        setHasMore(prev => {
            if (!a.data.hasMore) {
                return !prev
            } else {
                return prev
            }
         })
        setIsLoading(prev => !prev)

        setHasNewData((prev) => [...prev]) // 새로운 값 최신화 
        setData(prevData =>[...prevData, ...a.data.items])

    }
    
    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement

        if (scrollTop + clientHeight >= scrollHeight && !isLoading && hasMore) {
            setPage(prevPage => prevPage + 1)
        }
    }

    const onFilterClick = (content) => {
        setFiltered(prev => {
            return true
        })

        if (content === '도수순') {
            setFilteredName(prevName => '도수순')
            let filtered = [...data]
            filtered.sort((a,b) => {
                if (a.alcohol > b.alcohol) {
                    return 1
                } 

                if (a.alcohol < b.alcohol) {
                    return -1
                }

                return 0
            })   
        
            setData(prev => {
                if (prev.length) {
                    return filtered
                }
            })
        }

        if (content === '평점순') {
            setFilteredName(prev => '평점순')
            let filtered = [...data]
            filtered.sort((a,b) => {
                if (a.rating > b.rating) {
                    return 1
                }

                if (a.rating < b.rating) {
                    return -1
                }

                return 0
            })

            setData(prev => {
                    return [...filtered]
            })
            console.log('filtered', filtered)
            console.log('data', data)
        }

        if (content === '국가순') {
            console.log('국가순')
        }

    }

    useEffect(() => {
        if (!isLoading && hasMore) {
            getData()
        }
        
    }, [page, hasMore])


    useEffect(() => {
        console.log('filterName', filteredName)
        if (filteredName === '도수순') {
            let newData = [...data]
                newData = data.sort((a,b) => {
                if (a.alcohol > b.alcohol) {
                    return 1
                } 

                if (a.alcohol < b.alcohol) {
                    return -1
                }

                return 0
            })   
        
            setData(prev => {
                if (prev.length) {
                    return [...newData]
                }
            })
        }

        if (filteredName === '평점순') {
            let newData = [...data]
                newData = data.sort((a,b) => {
                if (a.rating > b.rating) {
                    return 1
                } 

                if (a.rating < b.rating) {
                    return -1
                }

                return 0
            })   
        
            setData(prev => {
                if (prev.length) {
                    return [...newData]
                }
            })
        }



    },[filtered, filteredName, hasNewData])

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
                <Filter  
                    content={'도수순'} 
                    data={data}
                    onClick={(content) => onFilterClick(content)}
                    filteredName={filteredName}
                    />
                <Filter  
                    content={'평점순'} 
                    data={data}
                    onClick={(content) => onFilterClick(content)}
                    filteredName={filteredName}
                    />
                <Filter  
                    content={'국가순'} 
                    data={data}
                    onClick={(content) => onFilterClick(content)}
                    filteredName={filteredName}
                    />
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