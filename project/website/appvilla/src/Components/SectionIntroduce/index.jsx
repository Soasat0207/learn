import React,{Fragment} from 'react'
import{
    SectionIntroduceWrap,
    SectionIntroduceText,
    Title,
    Description,
    StatisticalWrap,
    BtnWrap
} from './IntroduceElement'
import {AiOutlineApple} from 'react-icons/ai';
import {RiGooglePlayLine} from 'react-icons/ri'; 
import Statistical from './Statistical';
import {Button} from '../../ButtonElement';
import {StatisticalObjectOne, StatisticalObjectThree, StatisticalObjectTwo} from './Statistical/Data'
const SectionIntroduce = ({title,description,download}) => {
    const avtiveStyle ={
        background:`var(--white-color)`,
        color:`var(--primary-color)`,
        marginRight:'3rem',
    }
    return (
        <Fragment>
            <SectionIntroduceWrap>
                <div className="container">
                    <SectionIntroduceText>
                        <Title>{title}</Title>
                        <Description>{description}</Description>
                    </SectionIntroduceText>
                    <StatisticalWrap data-aos="fade-up" download={download}>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                                <div className="row">
                                    <Statistical {...StatisticalObjectOne}/>
                                    <Statistical {...StatisticalObjectTwo}/>
                                    <Statistical {...StatisticalObjectThree}/>
                                </div> 
                            </div>
                        </div> 
                    </StatisticalWrap>
                    <BtnWrap download={download}>
                        <Button style={avtiveStyle}> <AiOutlineApple style={{fontSize: "22px",transform:`translateY(-5%)`}} />App Store</Button>
                        <Button ><RiGooglePlayLine style={{fontSize: "22px",transform:`translateY(-5%)`}} /> GooglePlay</Button>
                    </BtnWrap>            
                </div>
            </SectionIntroduceWrap>
        </Fragment>
    )
}

export default SectionIntroduce
