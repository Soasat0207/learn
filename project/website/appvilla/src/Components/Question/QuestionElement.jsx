import '../../assets/css/rest.css'
import '../../assets/css/grid.css'
import '../../assets/css/base.css';
import styled from 'styled-components';
export const QuestionWrap = styled.div`

`
export const QuestionItem = styled.div`
    margin-bottom: ${({questionActive}) => (questionActive) ? '0px' :'20px'};
    position: relative;
    &:first-child{
        margin-top: 50px;
    }
`
export const QuestionHeader = styled.div`
    padding: 20px;
    padding-right: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
    font-weight: 500;
    width: 100%;
    overflow: hidden;
    border: none;
    border: 1px solid;
    color:${({questionActive}) => (questionActive) ? 'var(--white-color)' :'var(--text-color)'};
    background-color:${({questionActive}) => (questionActive) ? 'var(--primary-color)' :'var(--white-color)'} ;
    border-color:${({questionActive}) => (questionActive) ? 'transparent' :'#eee'}  ;
    border-radius:${({questionActive}) => (questionActive) ? '8px 8px 0 0' :'8px'} ;
    transition: all .4s ease;

`
export const Title = styled.span`
    font-size: 1.5rem;
    position: relative;
    font-weight: 600;
    padding-left: 45px;
    line-height: 25px;
`
export const Serial = styled.span`
    color: #081828;
    display: inline-block;
    height: 30px;
    width: 30px;
    line-height: 28px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #eee;
    font-size: 1.4rem;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({questionActive}) => (questionActive) ? 'var(--white-color)' :'transparent'};
    transition: all .4s ease;
`
export const Icon = styled.div`
    font-size: 2.4rem;
    transition: all .3s ease;
    transform: translateY(10%);
`
export const AccordionBody = styled.div`
    border-radius: 0 0 8px 8px;
    padding: 40px;
    background-color: #f9f9f9;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    color: #777;
    font-size:1.5rem;
    display:${({questionActive}) => (questionActive) ? 'block' :'none'};
`