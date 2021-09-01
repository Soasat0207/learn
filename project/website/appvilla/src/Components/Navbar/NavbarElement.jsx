import '../../assets/css/rest.css';
import '../../assets/css/grid.css';
import '../../assets/css/base.css';
import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
    background:${({scrollNav}) =>(scrollNav)?'var(--primary-color)':'var(--white-color)'};
    color:${({scrollNav}) =>(scrollNav)?'var(--white-color)':'var(--text-color)'};
    height:var(--height-nav);
    // margin-top:-80px;
    display:${({isOpen}) =>(isOpen)?'none':'flex'};
    justify-content:center;
    align-items:center;
    font-size:1.5rem;
    position:sticky;
    top:0;
    z-index:1000;
    @media screen and (max-width:960px){
        transition:0.8s all ease;
    }
`
export const NavContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    @media screen and (max-width:960px){
        transition:0.8s all ease;
        justify-content:space-around;

    }
`
export const NavLogo = styled.div`
    justify-self:flex-start;
    cursor:pointer;

`
export const MobileIcon = styled.div`
    display:none;
    @media screen and (max-width:768px){
        display:block;
        align-items:center;
        font-size:2.4rem;
        cursor:pointer;
        transition:0.8s all ease;
    }
`
export const ImgWrapLink = styled(LinkR)`

`
export const Img = styled.img`
    width: 160px;
`
export const NavMenu = styled.ul`
    display:flex;
    justify-content:center;
    align-items:center;
    list-style:none;
    text-align:center;
    // margin-right:-22px;
    @media screen and (max-width:768px){
        display:none;
    }
`
export const NavItems = styled.li`
    height:var(--height-nav);
`
export const NavLink = styled(LinkS)`
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1.8rem;
    height:100%;
    cursor:pointer;
    font-weight: 600;
    text-transform: capitalize;
    transition:all .3s ease-out 0s;
    &.active{
        color:var(--primary-color);
        border-bottom: 3px solid #01bf71;

    }
`
export const NavBtn = styled.div`
    display:flex;
    align-items:center;
    @media screen and (max-width:768px){
        display:none;
    }
`
