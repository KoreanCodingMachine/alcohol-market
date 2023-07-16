import React, { useState ,useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { Avatar, forwardRef } from "@chakra-ui/react";
import DropDown from "./DropDown";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
  } from '@chakra-ui/react'



function Navbar() {
    
    const [email, setEmail] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()
    const [dropDownOpen , setDropDownOpen] = useState(false)

    const best = document.querySelector('.best_container')
    const category = document.querySelector('.category_container')
    const menu = document.querySelector('.menu_container')
    
    useEffect(() => {    
        const storedEmail = localStorage.getItem('email')
        if (storedEmail) {
            setEmail(storedEmail)
            console.log(email)
        }
    }, [email, location])

    const onScrollIntoView = (val) => {
       if (val === 'Best') {
        return best.scrollIntoView({behavior: 'smooth', block: 'start'})
       }

       if (val === 'Category') {
        return category.scrollIntoView({behavior: 'smooth', block: 'start'})
       }

       if (val === 'Menu') {
        return menu.scrollIntoView({behavior: 'smooth', block: 'start'})
       }
    }

    console.log(document.querySelector('.best_container'))


    const customMenuButton = forwardRef((props, ref) => {
        return (
            <Avatar className="user" src='https://bit.ly/broken-link' ref={ref} {...props} style={{marginLeft: 'auto', marginRight:'2rem'}}>
                {props.children}
            </Avatar>
        )
    })

    return ( 
        <StyledNavbar>
            <li className="navbar_title">BeerU</li>
            <ul>
                <li onClick={() => {onScrollIntoView('Best')}}>Best</li>
                <li onClick={() => {onScrollIntoView('Category')}}>Category</li>
                <li onClick={() => {onScrollIntoView('Menu')}}>Menu</li>
            </ul>
                {
                    email  !== null 
                     ? 
                     <Menu>
                        <MenuButton isActive={dropDownOpen} as={customMenuButton}></MenuButton>
                        <MenuList>
                            <MenuItem>프로필</MenuItem>
                            <MenuItem>로그아웃</MenuItem>
                        </MenuList>
                    </Menu>
                     :
                     <p className='user' onClick={() => {navigate('/login')}}>로그인</p>
                }
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
        li {
            cursor: pointer;
        }
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
        cursor: pointer;
    }

    .navbar_title {
        font-weight: bold;
        font-size: 1.5rem;
    }

    .dropdown_wrapper {
      transform: translateY(20%);
      margin-left: auto;
      margin-right: 2rem;
      text-align: center;
      display: flex;
      flex-direction: column;   
       .user {
        margin: 0 auto;
       }
    }

`

const STMenu = styled(Menu)` 
   margin-left: auto;

`

export default Navbar;