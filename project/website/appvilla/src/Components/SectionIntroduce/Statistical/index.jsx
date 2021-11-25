import React,{Fragment} from 'react'
import {
    StatisticalWrap,
    StatisticalTitle,
    StatisticalSub,
} from './StatisticalElement'
const Statistical = ({title,subtitle}) => {
    return (
        <Fragment>
            <StatisticalWrap className="col col-lg-4 col-md-4 col-sm-4">
                <StatisticalTitle>{title}</StatisticalTitle>
                <StatisticalSub>{subtitle}</StatisticalSub>
            </StatisticalWrap>
        </Fragment>
    )
}

export default Statistical
