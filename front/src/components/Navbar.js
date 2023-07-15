import React, { useState ,useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components'

function Navbar() {
    
    const [email, setEmail] = useState(null)
    const location = useLocation()

    useEffect(() => {    
        console.log(location)
        const storedEmail = localStorage.getItem('email')
        console.log('stored', storedEmail)
        if (storedEmail) {
            setEmail(storedEmail)
            console.log(email)
        }
    }, [email, location])

    return ( 
        <StyledNavbar>
            <li className="navbar_title">BeerU</li>
            <ul>
                <li>Best</li>
                <li>Category</li>
                <li>Menu</li>
            </ul>
                {email  !== null ?  <div className="user">welcome {email}</div>  : <div className="icon"></div>}
        </StyledNavbar>
     );
}

const StyledNavbar = styled.ul`
    display:flex;
    list-style:none;
    max-width: 100%;
    height: 94px;
    background: #d9d9d9;
    align-items: center;
    padding: 0 0 0 20px;
    gap: 10rem;
    ul {
        list-style: none;
        display: flex;
        gap: 5rem;
    }

    .icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #f5f5f5;
        margin-left: auto;
        margin-right: 2rem;
    }

    .user {
        margin-left: auto;
        margin-right: 2rem;
    }

    .navbar_title {
        font-weight: bold;
        font-size: 1.5rem;
    }
`

export default Navbar;