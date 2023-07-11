import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner';
import '../styles/Main.css'
import Best from '../components/Best';
import Category from '../components/Category';
import BeerMenu from '../components/BeerMenu';


function Main() {
    return (  
        <div>
            <Banner />
            <Best />
            <Category />
            <BeerMenu />
        </div>
    );
}


const StGlobalLayout = styled.div`
   
`

export default Main;