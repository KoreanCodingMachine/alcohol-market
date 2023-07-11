import styled from 'styled-components'
import { FaFacebookF } from 'react-icons/fa'
import CustomCarousel from './CustomCarousel';

function Category() {
    return (  
        <STCategoryContainer>
            <STCategoryIconContainer>
                <div>
                    <FaFacebookF/>
                    <span>for Male</span>
                </div>
                <div>
                    <FaFacebookF/>
                    <span>for Male</span>
                </div>
                <div>
                    <FaFacebookF/>
                    <span>for Male</span>
                </div>
                <div>
                    <FaFacebookF/>
                    <span>for Male</span>
                </div>
            </STCategoryIconContainer>
            <STCarouselContainer>
                <CustomCarousel/>
            </STCarouselContainer>
        </STCategoryContainer>
    );
}


const STCategoryContainer = styled.div`
    margin-top: 200px;
    width: 100%;
    height: 600px;
    background: #d9d9d9;
    display: flex;
    align-items:center;
    flex-direction: column;
`

const STCategoryIconContainer =styled.div`
    width: min-content;
    display: flex;
    padding-top: 3rem;
    gap: 150px;

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 20px;
        white-space: nowrap;
        cursor: pointer;
    }
`

const STCarouselContainer = styled.div`
    width: 1116px;
    height: 590px;
    margin-top: 3rem;
`


export default Category;

