import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import '../styles/Main.css'
import Best from '../components/Best';
import Category from '../components/Category';
import BeerMenu from '../components/BeerMenu';
import Footer from '../components/Footer';

function Main() {
    return (  
        <div>
            <Navbar />
            <Banner />
            <StGlobalLayout>
                <Best />
                <Category />
                <BeerMenu />
                <Footer />
            </StGlobalLayout>
        </div>
    );
}


const StGlobalLayout = styled.div`
   
`

export default Main;