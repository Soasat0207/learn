import '../../assets/css/rest.css';
import '../../assets/css/grid.css';
import '../../assets/css/base.css';
import styled from 'styled-components';
export const InfoWrap =styled.div`
    background:${({lightBg}) =>(lightBg)?'var(--white-color)':'var(--primary-color)'};
    color:${({lightBg}) =>(lightBg)?'var(--text-color)':'var(--white-color)'};
    padding-top: ${({PdSection}) =>(PdSection)?'100px':'0'};
    padding-bottom: ${({PdSection}) =>(PdSection)?'100px':'0'};
    position: relative;
`
export const InfoContainer = styled.div``
export const InfoWrapper = styled.div`
    display:grid;
    z-index:1;
    /* height:660px; */
    justify-content:flex-start;
    @media screen and (max-width:768px){
        justify-content:center;
        text-align:center;
        /* min-height:800px; */

    }
`
export const InfoRow = styled.div`
    display:grid;
    grid-auto-columns:minmax(auto,1fr);
    align-items:center;
    grid-template-areas:${({ imgStart }) => (imgStart ? `'col2 col1'`:`'col1 col2'`)};
    @media screen and (max-width:768px){
        grid-template-areas:${({ imgStart }) => (imgStart ? `'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};
    }
`
export const TextWrapper = styled.div`
    // max-width:540px;
    padding-top:0;
    padding-bottom:60px;
    @media screen and (max-width:768px){
        padding:0 5.5rem;
    }
`
export const Colum1 = styled.div`
    margin-bottom:15px;
    padding-left:2rem;
    grid-area:col1;
`
export const Colum2 = styled.div`
    margin-bottom:15px;
    padding-right:2rem;
    grid-area:col2;
`
export const Heading = styled.h1`
    margin-bottom:24px;
    font-size:${({download}) =>(download) ? '4rem':'3.6rem'};
    line-height:${({download}) =>(download) ? '1.1':'1.5'};
    font-weight:600;
    color:${({ lightBg }) => (lightBg ? 'var(--text-color)':'var(--white-color)')};
    @media screen and (max-width:768px){
        font-size:32px;
    }
`
export const Subtitle = styled.p`
    max-width:510px;
    margin-bottom:35px;
    font-size:1.6rem;
    line-height:24px;
    color:${({ lightBg }) => (lightBg ? '#929292':'var(--white-color)')};
    @media screen and (max-width:768px){
        max-width:100%;
        padding:0 30px;
        margin-bottom: 24px;
    }
`
export const BtnWrap = styled.div`
    display:${({download}) =>(download) ? 'flex':'none'} ;
    justify-content: flex-start;
    @media screen and (max-width:768px){
        justify-content: center;
    }
`
export const BtnWrapStart = styled.div`
    display:${({primary}) =>(primary) ? 'flex':'none'} ;
    justify-content: flex-start;
    @media screen and (max-width:768px){
        justify-content: center;
    }
`
export const ImgWrap = styled.div`
    max-width:555px;
    height:100%;
    @media screen and (max-width:768px){
     max-width:100%;
    }
`
export const Img = styled.img`
    width:${({download}) =>(download) ? '120%':'100%'};
    margin:0 0 10px 0;
    padding-right:0;
    @media screen and (max-width:768px){
        width:100%;
        padding:0 55px;
       ;
    }
`
export const Icon = styled.div`
    display:${({download}) =>(download) ? 'none':'block'} ;
    height: 60px;
    width: 60px;
    line-height: 60px;
    text-align: center;
    background-color: #ff6b81;
    color: #fff;
    font-size: 20px;
    border-radius: 7px;
    -webkit-box-shadow: 0 4px 6px #0000002a;
    box-shadow: 0 4px 6px #0000002a;
`