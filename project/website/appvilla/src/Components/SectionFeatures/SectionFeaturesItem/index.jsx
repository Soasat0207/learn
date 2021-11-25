import React,{Fragment} from 'react';
import {AiOutlineCloudUpload} from 'react-icons/ai'
import {
    FeaturesItemWrap,
    FeaturesItemWrapper,
    Icon,
    Heading,
    Description
} from './FeaturesItemElement'
const FeaturesItem = ({heading,description}) => {
    return (
        <Fragment>
            <FeaturesItemWrap className="col col-lg-4 col-md-6 col-12">
                <FeaturesItemWrapper>
                    <Icon><AiOutlineCloudUpload/></Icon>
                    <Heading>{heading}</Heading>
                    <Description>{description}</Description>
                </FeaturesItemWrapper>
            </FeaturesItemWrap>
        </Fragment>
    )
}

export default FeaturesItem
