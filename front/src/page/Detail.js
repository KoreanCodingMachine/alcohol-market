import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import BeerCard from '../components/BeerCard'
import { ImStarFull } from "react-icons/im";
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios'

const Detail = () => {

  const location = useLocation()

  const beerInfo = {...location.state}

  const { alcohol, country, id, image, rating, title, type } = beerInfo

  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [scoreValue, setScoreValue] = useState(0)
  const [toggle, setToggle] = useState(true)
  const [content, setContent] = useState(null)
  const [t, setTrue] = useState(true)
  const array = [0,1,2,3,4]

  console.log('scorevalue', scoreValue)

  const onHandleStarClick = (index) => {
   
    let clickedArr = [...clicked]

    for (let i=0; i < 5; i++) {
      clickedArr[i] = i <= index ? true : false;  
    }

    let score = clickedArr.filter((v) => v === true).length
   
    if (scoreValue === score && toggle) {
      // setClicked([false,false,false,false,false])
      setToggle(prev => !prev) //  false
      return;
    }
    
    setScoreValue(prev => score)
    setClicked(clickedArr);
  }

  const onChangeReview = (e) => {
      console.log(e.target.value)
  }

  useEffect(() => {
   
    if (!toggle) {
      onHandleStarClick(-1) // 별 초기화 
      setToggle(prev => !prev) // true 
      setTrue(true)
    }
    
  }, [toggle])


  const onSubmitPost = async () => {

    if (scoreValue <= 0) {
      return
    }

    if (content === '') {
      return
    }

    console.log('submit')
    const { data, status } = await axios.post(`http://localhost:3333/api/beer/review}`, {content, rating:scoreValue })
    console.log(data, status)
  }


  return (
    <STDetailWrapper>
      <STBeerImageSection className='beer_image'>
        <STDetailBeerImageWrapper>
          <img src={image}></img>
        </STDetailBeerImageWrapper>
      </STBeerImageSection>
      <STBeerInfoSection className='beer_info'>
        <div className='info_wrapper'>
          <h1>{title}</h1>
          <p>{type} / rating : {rating}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed tempus neque non tristique vehicula.</p>
        </div>
        <div className='alcohol_img_wrapper'>
          <div className='alcohol_img'>
              <div className='img'></div>
              <h3>alc {alcohol}%</h3>
          </div>
          <STVerticalLine />
          <div className='taste_wrapper'>
              <div className='taste_wrapper-child'>
                <div className='taste_img'></div>
                <p>taste</p>
                <p>....</p>
              </div>
              <div className='taste_wrapper-child'>
                <div className='taste_img'></div>
                <p>taste</p>
                <p>....</p>
              </div>
              <div className='taste_wrapper-child'>
                <div className='taste_img'></div>
                <p>taste</p>
                <p>....</p>
              </div>
          </div>
        </div>
      </STBeerInfoSection>
      <STRecommendSection>
        <div className='sectionInfo'>
          <h2>Recommend</h2>
          <p>당신을 위한 비슷한 맥주를 추천합니다</p>
        </div>
        <div className='beercard'>
        <BeerCard
          title={title}
          image={image}
          rating={rating}
          country={country}
          alcohol={alcohol}
          type={type}
          id={id}
        />
         <BeerCard
          title={title}
          image={image}
          rating={rating}
          country={country}
          alcohol={alcohol}
          type={type}
          id={id}
        />
         <BeerCard
          title={title}
          image={image}
          rating={rating}
          country={country}
          alcohol={alcohol}
          type={type}
          id={id}
        />
         <BeerCard
          title={title}
          image={image}
          rating={rating}
          country={country}
          alcohol={alcohol}
          type={type}
          id={id}
        />
        </div>
      </STRecommendSection>
      <STReviewSection >
        <div className='review_info'>
          <h2>Review</h2>
          <div className='review_rating'>
            <p>star</p>
            <p>4.5</p>
          </div>
          <p className='review_rating-total'>(총 123건)</p>
        </div>
        <div className='review_star'>
            {
              array && array.map((v) => (
                <ImStarFull 
                  key={v}
                  onClick={() => onHandleStarClick(v)}
                  className={clicked[v] && 'yellow'}
                  size="35"
                  style={{cursor:'pointer'}}
                />
              ))
            }
        </div>
        <div>
          <textarea placeholder='로그인 후 이용해주세요' onChange={onChangeReview}>
          </textarea>
        </div>
        <div className='button-wrapper'>
          <Button onClick={onSubmitPost} colorScheme='blue'>리뷰 전송하기</Button>
        </div>
      </STReviewSection>
    </STDetailWrapper>
  )
}


const STDetailWrapper = styled.div` 
  padding: 0 50px;
  margin: 50px 50px;
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  flex-direction: column;
`
const STDetailBeerImageWrapper = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid gray;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const STBeerImageSection = styled.section` 
  width: 1116px;
  height: 680px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
`

const STBeerInfoSection = styled.section`
  width: 1116px;
  height: 680px;
  display: flex;
  text-align: center;
  margin: 30px 0;
  flex-direction: column; 
  .info_wrapper {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h1 {
    font-size: 40px;
  }

  h3 {
    font-size: 30px;
  }

  .alcohol_img_wrapper {
    display: flex;
    margin: 50px 0;
    width: calc(100% - 150px);
    height: calc(100% - 25px);
    margin: 0 auto;
    padding: 0 80px;
    justify-content: space-between;
    align-items: center;
    position: relative;
   
    .img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background: #d9d9d9;
      margin: 50px 0;
    }

    .taste_wrapper {
      width: calc(50% - 10%);

      .taste_img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #d9d9d9;
        margin: 20px 0;
     }
      .taste_wrapper-child {
        display: flex;
        align-items: center;
        gap: 30px;
      }
    }

  }
`

const STVerticalLine = styled.div`
  width: 2px;
  height: calc(100%);
  background-color: #f5f5f5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const STRecommendSection = styled.section`

  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  
  .sectionInfo {
    h2 {
      font-size: 30px;
      font-weight: bold;
    }

    p {
      font-size: 20px;
      font-weight: normal;
      margin-top: 20px;
    }
  }
  
  .beercard {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    gap: 20px;
  }


`

const STReviewSection = styled.section`
  width: 100%;
  margin: 200px;
  text-align: center;
  height: 1320px;
  border: 1px solid gray;
  padding-top: 50px;
  h2 {
    font-size: 40px;
  }

  .review_rating {
    display:flex;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    gap: 5px;
  }

  .review_rating-total {
    font-size: 20px;
  }

  .review_star {
    margin-top: 150px;
    margin: 0 auto;
    width: 100%; 
    display: flex;
    justify-content: center;
    padding-top: 20px;
    
    & svg {
      color: #C4C4C4;
    }

    svg :hover {
    color: yellow;
    }

    .yellow {
      color: yellow;
    }
  }

  textarea {
    width: 820px;
    height: 160px;
    border: 1px #d9d9d9 solid;
    border-radius: 5px;
    margin-top: 150px;
  }

  .button-wrapper {
    display: flex;
    width: 820px;
    margin: 0 auto;
    justify-content: flex-end;
    margin-top: 1.5rem;
}
`

export default Detail