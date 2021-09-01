import React,{Fragment} from 'react'
import {
    SectionTitleContainer,
    TextWrap,
    TopLine,
    Heading,
    Subtitle,
} from './SectionTitleElement'
const SectionTitle = ({id,topline,heading,subtitle}) => {
    return (
        <Fragment>
            <SectionTitleContainer data-aos="fade-up" className='container' id={id}>
                <TextWrap> 
                    <TopLine>{topline}</TopLine>
                    <Heading>{heading}</Heading>
                    <Subtitle>{subtitle}</Subtitle>  
                </TextWrap>
            </SectionTitleContainer>
        </Fragment>
    )
}

export default SectionTitle
