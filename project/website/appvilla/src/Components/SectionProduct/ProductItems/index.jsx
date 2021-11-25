import React, { Fragment } from 'react'
import {
    Content, Description, ImageWrap,
    Img, Job, Name, TeamItemWrap, Text
} from './ProductElement'
const ProductItem = ({img,name,job}) => {
    return (
        <Fragment>
            <div data-aos="fade-up" className="col col-lg-4 col-md-6 col-sm-7">
                <TeamItemWrap>
                    <ImageWrap><Img src={img}></Img></ImageWrap>
                    <Content>
                        <Text>
                            <Job>{job}</Job>
                            <Name>{name}</Name>
                            <Description>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.</Description>
                        </Text>
                    </Content>
                </TeamItemWrap> 
            </div>  
        </Fragment>
    )
}

export default ProductItem
