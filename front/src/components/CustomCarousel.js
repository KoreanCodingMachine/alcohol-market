import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import src from '../asset/beer.jpeg'
import styled from 'styled-components'

const CustomCarousel = () => {
  return (
    <Carousel
    showArrows={true}
    centerMode={true}
    centerSlidePercentage={30}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    infiniteLoop={true}
  >
    <STCarouselCard>
      <img src={src} width={'214px'} height={'300px'}></img>
      <p>hi</p>
    </STCarouselCard>
    <STCarouselCard>
      <img src={src} width={'214px'} height={'300px'}></img>
      <p>hi</p>
    </STCarouselCard>
    <STCarouselCard>
      <img src={src} width={'214px'} height={'300px'}></img>
      <p>hi</p>
    </STCarouselCard>
    <STCarouselCard>
      <img src={src} width={'214px'} height={'300px'}></img>
      <p>hi</p>
    </STCarouselCard>
  </Carousel>
  )
}

const STCarouselCard = styled.div`
  width:214px;
  height: 406px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default CustomCarousel