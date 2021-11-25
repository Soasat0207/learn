import '../../../assets/css/rest.css';
import '../../../assets/css/grid.css';
import '../../../assets/css/base.css';
import styled from 'styled-components';
export const FeaturesItemWrap = styled.div``
export const FeaturesItemWrapper = styled.div`
    text-align: left;
    padding: 35px;
    background-color: #fff;
    border-radius: 6px;
    position: relative;
    margin-top: 30px;
    border: 1px solid #eee;
    -webkit-transition: all .5s cubic-bezier(.68,-.55,.27,1.55) 0s;
    transition: all .5s cubic-bezier(.68,-.55,.27,1.55) 0s;
    font-size: 1.5rem;
    &:hover{
        box-shadow: 0 3px 5px #00000017;
        transform: translateY(-5px);
    }
`
export const Icon = styled.div`
    height: 60px;
    width: 60px;
    line-height: 60px;
    text-align: center;
    display: inline-block;
    background-color: #ff6b81;
    color: #fff;
    font-size: 20px;
    border-radius: 7px;
    -webkit-box-shadow: 0 4px 6px #0000002a;
    box-shadow: 0 4px 6px #0000002a;
    margin-bottom: 30px;
`
export const Heading = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
    margin-top:0;
`
export const Description = styled.p`
    line-height: 22px;
    margin:0;
    color:#929292;
`