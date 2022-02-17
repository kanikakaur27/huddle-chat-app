import React from 'react';
import styled from 'styled-components';
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Logo from '../Assets/chat-logo.png'
import {signOut} from "firebase/auth"
import { auth } from '../firebase';
import { Button } from '@material-ui/core';

function Navbar() {
  return (
      <NavContainer>
          <NavLeft>
              <img src={Logo} alt="" />
            <h3>Huddle</h3>
          </NavLeft>

          <NavRight>
              
            <ul>
                <li>
                    HOME
                </li>
                <li>
                    CHAT
                </li>
                <li>
                    CONTACTS
                </li>
                <li>
                    SETTINGS
                </li>
                <li>
                    FAQS
                </li>
                <li>
                    TERMS OF USE
                </li>
                <li>
                    <SearchIcon />
                </li>
                <li>
                    <NotificationsIcon />
                </li>
                <Button onClick={()=>{console.log("first");signOut(auth)}}>
                    LOGOUT
                </Button>
            </ul>
          </NavRight>
      </NavContainer>
  )
}

export default Navbar;

const NavContainer = styled.div`
    display: flex;
    background-color: #F2F5F9;
    border: 1px solid black;
    width: 100%;
    align-items: center;
    position: fixed;
    
`

const NavLeft = styled.div`
    padding: 10px 20px;
    height: 100%;
    width: 20%;
    border: 1px solid red;
    display: flex;
    align-items: center;
    > img {
        object-fit: contain;
        height: 40px;
    }

    > h3 {
        padding: 0px 10px;
    }
`

const NavRight = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;

    > ul {
        height: 100%;
        width: 100%;
        display: flex;
        list-style: none;
        text-decoration: none;
        justify-content: flex-end;
        padding: 0px 20px;
        border: 1px solid blue;
        align-items: center;

        > li {
            margin: 0px 10px;
            border: 1px solid blue;
        }
    }

`