import '../../../assets/css/rest.css'
import '../../../assets/css/grid.css'
import '../../../assets/css/base.css'
import styled from 'styled-components';
export const TeamItemWrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    margin-top: 30px;
    transition: all .5s cubic-bezier(.68,-.55,.27,1.55) 0s;
    &:hover{
        box-shadow: 0 3px 5px #00000017;
        transform: translateY(-5px);    
    }
`
export const ImageWrap = styled.div`

`
export const Img = styled.img`
    width: 100%;
`
export const Content = styled.div`
    padding: 25px 30px 30px;
    border: 1px solid #eee;
    border-radius: 0 0 10px 10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const Text = styled.div`

`
export const Name = styled.h3`
    font-size:2.4rem;
`
export const Job = styled.h5`
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--primary-color);
    display: block;
    margin-top: 4px;
`
export const Social = styled.div`
    font-size: 1.8rem;
`
