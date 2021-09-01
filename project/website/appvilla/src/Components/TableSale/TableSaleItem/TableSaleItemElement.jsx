import '../../../assets/css/rest.css'
import '../../../assets/css/grid.css'
import '../../../assets/css/base.css'
import styled from 'styled-components';
export const TableSaleItemWrap = styled.div`
    border: 1px solid #eee;
    border-radius: 10px;
    margin-top: 30px;
    background-color: var(--white-color);
    -webkit-transition: all .5s cubic-bezier(.68,-.55,.27,1.55) 0s;
    transition: all .5s cubic-bezier(.68,-.55,.27,1.55) 0s;
    &:hover{
        box-shadow: 0 3px 5px #00000017;
        transform: translateY(-5px);
    }
    
`
export const TableHead = styled.div`
    padding: 25px;
    border-bottom: 1px solid #eee;
`
export const Title = styled.h4`
    font-size: 1.6rem;
    font-weight: 600;
    margin:0;
    margin-bottom: 20px;
`
export const Subtitle = styled.p`
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 22px;
    margin:0;
`
export const Price = styled.div`
    padding: 30px 0;
`
export const Amount = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    display: inline-block;
    margin:0;
`
export const Duration = styled.span`
    display: inline-block;
    font-size: 1.4rem;
    color: #888;
    font-weight: 400;
    margin-left: 3px;
`
export const TableContent = styled.div`
    padding: 25px;
`
export const TableContentTitle = styled.h4`
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 25px;
`
export const TableContentList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;  
`
export const TableContentListItem = styled.li`
    position: relative;
    padding-left: 25px;
    font-size: 1.4rem;
    margin-bottom: 13px;
    color:#929292;
`