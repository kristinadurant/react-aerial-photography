import styled from "styled-components";

const Header = styled.header`
    position: absolute;
    width: 100%;
    color: white;
    z-index: 20;
    // header.white {
    //     background-color: #062b2d;
    // }
   .inner {
        height: 80px;
    }
    .logo {
        font-family: "Italiana", serif;
        font-size: 1.5em;
        text-transform: uppercase;
    }
    nav > ul > li > :first-child {
        font-weight: 200;
        letter-spacing: 0.2em;
        font-size: 0.8em;
    }
    nav > ul > li {
        margin: 0 0.5em;
    }
    .submenu ul {
        border-bottom: 1px solid #deddd9;
        list-style: armenian;
    }
    .button-container {
        position: relative;
    }
    .button-container .dropdown {
        right: 0;
    }
    .dropdown {
    background-color: #fff;
    color: #000;
    position: absolute;
    top: 40px;
    width: 250px;
  }
  .dropdown li {
    font-size: 0.875rem;
    border-bottom: 1px solid #deddd9;
    line-height: 44px;
    padding-left: 1em;
  }
  .dropdown p {
    font-size: 0.875rem;
    border-bottom: 1px solid #deddd9;
    padding-left: 1em;
  }
  .dropdown > :last-child {
    border-bottom: none;
  }
  .dropdown a.font2 {
    width: 100%;
    text-align: center;
    font-weight: bold;
    line-height: 44px;
  }
  #bookmarks li {
    display: flex;
  }
  #bookmarks li span {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;


Header.Menu = styled.nav`


`;


export default Header;