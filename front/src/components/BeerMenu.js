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
    const [filteredName, setFilteredName] = useState(null) // 도수순, 평점순, 국가순
    const [originData, setOriginData] = useState([])
    const [brewType, setBrewType] = useState(null) // all , lager , ale , others
    const [brewTypeData, setBrewTypeData] = useState([])
    const [filterData, setFilterData] = useState([])
   
    const countryFiltered = originData.map((v,i) => {
        return v.country.split(' ')[0]
    })

    const uniqeCountry = [...new Set(countryFiltered)]

    const brew = ['All','Lager', 'Ale', 'Others']

    const onChangeCountry = (e) => {
        setFilteredName(prev => e.target.value)
        let countries = originData.map((v,i) => {
            if (v.country.includes(e.target.value)) {
                return v
            }
        }).filter((v) => v !==undefined )

        setFilterData([...countries])
        setData([...countries])
    }


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
        if (filteredName === null && brewType === null) {
            setData(prevData =>[...prevData, ...a.data.items])
            setOriginData(prevData => [...prevData, ...a.data.items])
        } else {
            setData(prevData =>[...prevData, ...a.data.items])
            setOriginData(prevData => [...prevData, ...a.data.items])
        }
       
    }

    const onSearchEvent = (val) => {
        let filtered = data.filter((v,i) => {
            let title = v.title.slice(0,8)
            if (title.toLowerCase().includes(val.toLowerCase())) {
                return v
            }
        })

        if (val.length) {
            setData(prev => [...filtered])
        }

        if (val.length <=1) {
            setData(originData)
        }
    }
    
    const brewTypeFilter = (val) => {
        setBrewType(val)

        if (val === 'All') {
            setData([...originData])
            setBrewTypeData([...originData])
            return
        }

        if (val === 'Others') {
            let filtered = originData.filter((v,i) => {
                if (v.type.includes(` `+'Ale') || v.type.includes('Lager')) {
                    return 0
                } else {
                    return v
                }
            }).filter((v,i) => {
                return v !== 0
            })
           setBrewTypeData([...filtered])
           setData([...filtered])
          
        }

        if (val === 'Ale') {
            let filtered = originData.filter((v,i) => {
                if (v.type.includes(` `+val) ) {
                    return v
                }
            })
            setBrewTypeData([...filtered])
            setData([...filtered])
        }

        if (val === 'Lager') {
            let filtered = originData.filter((v,i) => {
                if (v.type.includes(val)) {
                    return v
                }
            })
            setBrewTypeData([...filtered])
            setData([...filtered])
        }
       
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
            setFilterData([...filtered])
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
            setFilterData([...filtered])
            setData(prev => {
                    return [...filtered]
            })
        }

        // if (content === filteredName) {
        //     setFilteredName(null)
        // }

    }

    useEffect(() => {
        if (!isLoading && hasMore) {
            getData()
        }
        
    }, [page, hasMore])


    useEffect(() => {
        const brewTypeFilter = (val) => {
        setBrewType(val)
        
        if (val === 'All') {
            setData([...originData])
            setBrewTypeData([...originData])
            return
        }

        if (val === 'Others') {
            let filtered = originData.filter((v,i) => {
                if (v.type.includes(` `+'Ale') || v.type.includes('Lager')) {
                    return 0
                } else {
                    return v
                }
            }).filter((v,i) => {
                return v !== 0
            })
           setBrewTypeData([...filtered])
           setData([...filtered])
          
        }

        if (val === 'Ale') {
            let filtered = originData.filter((v,i) => {
                if (v.type.includes(` `+val) ) {
                    return v
                }
            })
            setBrewTypeData([...filtered])
            setData([...filtered])
        }

        if (val === 'Lager') {
            let filtered = originData.filter((v,i) => {
                if (v.type.includes(val)) {
                    return v
                }
            })
            setBrewTypeData([...filtered])
            setData([...filtered])
        }
       
    }
    } ,[])


    useEffect(() => {
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

        if (filteredName === null) {
           setData(originData)
        }

    },[filtered, filteredName, hasNewData])

    useEffect(() => {
        // 도수순 , 평점순 , 국가순 선택 후 스크롤 시 
        if (filteredName !== null && brewType === null) {
            let scrollWithFilterData = [...originData]
            if (filteredName === '도수순') {
                console.log('scroll')
                scrollWithFilterData.sort((a,b) => {
                    if (a.alcohol > b.alcohol) {
                        return 1
                    }

                    if (a.alcohol < b.alcohol) {
                        return -1
                    }

                    return 0
                })
                setData([... scrollWithFilterData])
            }
            if (filteredName === '평점순') {
                console.log('scroll')
                scrollWithFilterData.sort((a,b) => {
                    if (a.rating > b.rating) {
                        return 1
                    }

                    if (a.rating < b.rating) {
                        return -1
                    }

                    return 0
                })
                setData([... scrollWithFilterData])
            }
            if (filteredName !== '도수순' && filteredName !== '평점순') {
                console.log('scroll')
                console.log('data', scrollWithFilterData)
                console.log(filteredName)
                let newData = scrollWithFilterData.map((v,i) => {
                    if (v.country.includes(filteredName)) {
                        return v
                    }
                }).filter((v) => v !==undefined )

                setData([...newData])
            }
        }
        // beer Menu만 선택하고 스크롤 시 
        if (filteredName === null && brewType !== null) {
            if (brewType === 'All') {
                brewTypeFilter('All')
            }

            if (brewType === 'Lager') {
                brewTypeFilter('Lager')
            }

            if (brewType === 'Ale') {
                brewTypeFilter('Ale')
            }

            if (brewType === 'Others') {
                brewTypeFilter('Others')
            }
        }       
    } ,[originData, filteredName])


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);


    useEffect(() => {
        if (filteredName !== null && brewType !== null && !isLoading) {
            if (filteredName === '도수순'){
                let doubleFilterData = [...brewTypeData]
                doubleFilterData.sort((a,b) => {
                    if(a.alcohol > b.alcohol) {
                        return 1
                    }
                    if(a.alcohol < b.alcohol) {
                        return -1
                    }
                    return 0
                })
                setData([...doubleFilterData])
            }
            
            if (filteredName === '평점순'){
                let doubleFilterData = [...brewTypeData]
                doubleFilterData.sort((a,b) => {
                    if(a.rating > b.rating) {
                        return 1
                    }
                    if(a.rating < b.rating) {
                        return -1
                    }
                    return 0
                })
                console.log(doubleFilterData)
                setData([...doubleFilterData])
            }
            if (filteredName === '국가순') {
                let doubleFilterData = [...brewTypeData]
                let doubleFilterWithCountryData = doubleFilterData.map((v,i) => {
                    if (v.country.includes(filteredName)) {
                        return v
                    }
                }).filter((v) => v !==undefined )

                setData([...doubleFilterWithCountryData])
            }
        } 
    }, [filteredName, brewType, filterData])

  return (
    <STBeerMenuContainer>
        <h1>BeerMenu</h1>
        <div className='beer_menu'>
           {brew.map((v,i) => {
            return <h2 key={i} onClick={() => {brewTypeFilter(v)}}>{v}</h2>
           })}
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
                <select onChange={onChangeCountry}>
                {
                    uniqeCountry.map((v,i) => {
                        return <option value={v} key={v._id}>{v}</option>
                    })
                }
                </select>
            </div>
            <div className='search'>
                <SearchBar data={data} onSearch={onSearchEvent}/>
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

    h2 {
        cursor: pointer;
    }

    h2:hover {
        color:yellowgreen;
    }

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


