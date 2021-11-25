import './assets/css/rest.css';
import './assets/css/grid.css';
import './assets/css/base.css';
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
export const Button = styled(LinkS)`
    display:flex;
    align-items:center;
    border-radius:50px;
    background:${({primary}) =>(primary) ? 'var(--primary-color)':'transparent'};
    white-space:nowrap;
    padding:${({big}) =>(big)? '12px 30px':'11px 30px'};
    color:var(--white-color);
    border: 2px solid var(--white-color);
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: 600;
    transition:all .2s ease;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    &:hover{
        transition:all .2s ease;
        background:${({primary}) =>(primary)?'black':'var(--white-color)'};
        color:${({primary}) =>(primary)?'var(--white-color)':'var(--primary-color)'};
    }

`