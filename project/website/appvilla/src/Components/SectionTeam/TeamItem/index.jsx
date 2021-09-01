import React,{Fragment} from 'react'
import {
    TeamItemWrap,
    ImageWrap,
    Img,
    Content,
    Text,
    Name,
    Job,
    Social,
} from './TeamItemElement'
import {TiSocialYoutube,TiSocialLinkedin} from 'react-icons/ti'
const TeamItem = ({img,name,job}) => {
    return (
        <Fragment>
            <div className="col col-lg-4 col-md-6 col-sm-7">
                <TeamItemWrap>
                    <ImageWrap><Img src={img}></Img></ImageWrap>
                    <Content>
                        <Text>
                            <Name>{name}</Name>
                            <Job>{job}</Job>
                        </Text>
                        <Social><TiSocialYoutube/> <TiSocialLinkedin/></Social>
                    </Content>
                </TeamItemWrap> 
            </div>  
        </Fragment>
    )
}

export default TeamItem
