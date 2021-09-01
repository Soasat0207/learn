import '../../../assets/css/rest.css'
import '../../../assets/css/grid.css'
import '../../../assets/css/base.css'
import styled from 'styled-components';
export const TeamItemWrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    margin-top: 30px;
    transition: all .5s cubic-bezier(.68,-.55,.27,1.55) 0s;

`
export const ImageWrap = styled.div`

`
export const Img = styled.img`
    width: 100%;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.1);
    }
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
    font-size:1.9rem;
    margin-top: 10px;

`
export const Job = styled.h5`
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--primary-color);
    display: block;
`
export const Description = styled.div`
    font-size: 1.5rem;
    display: block;
    margin-top: 20px;
    color:#929292;
`
