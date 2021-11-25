import '../../assets/css/rest.css';
import '../../assets/css/grid.css';
import '../../assets/css/base.css';
import styled from 'styled-components';
export const SectionIntroduceWrap = styled.div`
    background-color:var(--primary-color);
    text-align: center;
    padding: 130px 0;
    font-size: 1.5rem;
    @media screen and (max-width:768px){
        padding: 60px 0;
    }
`
export const SectionIntroduceText = styled.div``
export const Title = styled.h2`
    color:var(--white-color);
    font-weight: 700;
    font-size: 3.5rem;
    margin-bottom: 10px;
    @media screen and (max-width:768px){
        font-size: 2.4rem;
        line-height: 32px;
    }
`
export const Description = styled.p`
    color: #fff;
`
export const StatisticalWrap = styled.div`
    display:${({download}) =>(download) ? 'none':'block'} ;

`
export const BtnWrap = styled.div`
    margin-top: 4rem;
    display:${({download}) =>(download) ? 'flex':'none'} ;
    justify-content: center;
`

