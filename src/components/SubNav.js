import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";

function SubNav() {
  return (
      <>
        <SubNavContainer>
            <SubNavLeft>
                <form>
                    <SearchIcon style = {{ position:'relative', zIndex:2, left: 35, alignSelf: 'center', color:'gray'}}/>
                    <input type="text" placeholder='SEARCH' />
                    <Button hidden type='submit'> SEND </Button>
                </form>
            </SubNavLeft>
            <SubNavRight>

                <Button>Clear Chat</Button>
                <Button>More</Button>
            </SubNavRight>

        </SubNavContainer>
      </>
  )
}

export default SubNav;

const SubNavContainer = styled.div`
    display: flex;
    border: 2px solid red;
    position: fixed;
    margin-top:85px;
    width: 100%;
    background-color: #F2F5F9;
`

const SubNavLeft = styled.div`
    flex: 0.25;
    display: flex;
    align-items:center;
    justify-content: center;
    > form {
        display: flex;
        justify-content: center;
        width: 100%;
        
    }

    > form > input {
        padding: 10px 10px 10px 40px;
        outline: none;
        width: 70%;
        border-radius: 2rem;
        border: none;
        color: black;
        font-weight: 540;
    }

    > form > button {
        display: none !important;
    }

`

const SubNavRight = styled.div`
    flex: 0.75;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: 1px solid green;
    padding-right: 10px;
    > button {
        background-color: white;
        margin: 10px;
        border-radius: 2rem;
        font-weight: 550;
        padding: 10px 15px;
    }
`