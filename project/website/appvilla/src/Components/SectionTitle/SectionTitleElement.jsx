import '../../assets/css/rest.css';
import '../../assets/css/grid.css';
import '../../assets/css/base.css';
import styled from 'styled-components';
export const SectionTitleContainer = styled.div`
    background-color: var(--white-color);
    padding-top: 10rem;
    color:var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:768px){
        padding-top: 5rem;
    }
`
export const TextWrap = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    text-align: center;
    max-width: 72rem;
    @media screen and (max-width:768px){
        padding:0 3rem;
    }
`
export const TopLine = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    display: block;
    margin-bottom: 0.8rem;
    color: var(--primary-color);
    text-transform: uppercase;
    @media screen and (max-width:768px){
        margin-bottom: 0.5rem;
    }
`
export const Heading = styled.h1`
    font-size: 3.4rem;
    margin:0;
    margin-bottom: 2.5rem;
    line-height: 4.2rem;
    text-transform: capitalize;
    position: relative;
    font-weight: 800;
    @media screen and (max-width:768px){
        font-size: 2.4rem;
        margin-bottom: 1.5rem;
        line-height: 3.2rem;
    }

`
export const Subtitle = styled.p`
    font-size: 1.5rem;
    margin: 0;
    color:#929292;
`