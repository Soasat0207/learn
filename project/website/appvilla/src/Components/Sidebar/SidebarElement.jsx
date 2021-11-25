import '../../assets/css/rest.css';
import '../../assets/css/grid.css';
import '../../assets/css/base.css';
import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:2;
    width:100%;
    height:100%;
    background:var(--primary-color);
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition:0.3s ease-in-out;
    opacity:${({ isOpen }) => (isOpen ? '100%' : '0')};
    top:${({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    color:#fff;
    z-index:99;
    font-size:3rem;
    margin-right:2rem;
    margin-top:2rem;
`
export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`
export const SidebarWrapper = styled.div`
    color:#fff;
`
export const SidebarMenu = styled.ul`
    display:grid;
    padding:0;
    grid-template-columns:1fr;
    grid-template-rows:repeat(8,60px);
    text-align:center;
    @media screen and (max-width:480px){
        grid-template-rows:repeat(6,80px);
    }

`
export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    font-weight: 600;
    text-decoration:none;
    list-style:none;
    transition:all 0.2s ease-in-out;
    text-decoration:none;
    color:#fff;
    cursor:pointer;
    &:hover{
        color:#01bf71;
        transition:all 0.2s ease-in-out;
    }
`
export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`
export const SidebarRouter = styled(LinkR)`
    border-radius:50px;
    background:#01bf71;
    white-space:nowrap;
    padding:16px 64px;
    color:#010606;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;
    &:hover{
        transition:all 0.2s ease-in-out;
        background:#fff;
        color:#010606;
    }
`