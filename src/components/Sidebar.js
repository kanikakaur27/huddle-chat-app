import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";

function Sidebar() {
  return (
      <>
        <SidebarContainer>
            {/* <SidebarHeader>
                <form>
                    <SearchIcon style = {{ position:'relative', zIndex:2, left: 35, alignSelf: 'center', color:'gray'}}/>
                    <input type="text" placeholder='SEARCH' />
                    <Button hidden type='submit'> SEND </Button>
                </form>
            </SidebarHeader> */}


            {/* TODO: chats */}
        </SidebarContainer>
      </>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
    background-color: #F2F5F9;
    max-width: 350px;
    flex: 0.35;
    border: 2px solid blue;
    margin-top: 155px;
    /* height: 100vh; */
`
const SidebarHeader = styled.div`
    display: flex;
    padding: 10px;
    padding-top: 20px;
    > form {
        display: flex;
        justify-content: center;
        width: 100%;
        
    }

    > form > input {
        padding: 10px 10px 10px 40px;
        outline: none;
        width: 80%;
        border-radius: 2rem;
        border: none;
        color: black;
        font-weight: 540;
    }

    > form > button {
        display: none !important;
    }

  
`