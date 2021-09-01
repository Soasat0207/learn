import React,{Fragment} from 'react'
import {
    SectionFeatureContainer,
    SectionFeatureRow,
} from './SectionFeaturesElement'
import FeaturesItem from './SectionFeaturesItem'
import {FeaturesItemFive, FeaturesItemFour, FeaturesItemOne, FeaturesItemSix, FeaturesItemThree, FeaturesItemTwo} from './SectionFeaturesItem/Data'
const SectionFeatures = () => {
    return (
        <Fragment>
            <SectionFeatureContainer data-aos="fade-up" className="container">
                <SectionFeatureRow className="row">
                    <FeaturesItem {...FeaturesItemOne}/>
                    <FeaturesItem {...FeaturesItemTwo}/>
                    <FeaturesItem {...FeaturesItemThree}/>
                    <FeaturesItem {...FeaturesItemFour}/>
                    <FeaturesItem {...FeaturesItemFive}/>
                    <FeaturesItem {...FeaturesItemSix}/>
                    
                </SectionFeatureRow>
            </SectionFeatureContainer>
        </Fragment>
    )
}

export default SectionFeatures
