import React,{Fragment,useEffect,useRef} from 'react'
import {
    InfoWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Colum1,
    TextWrapper,
    Subtitle,
    Heading,
    BtnWrap,
    Colum2,
    ImgWrap,
    Img,
    BtnWrapStart,
    Icon
} from './InfoElement';
import {AiOutlineApple} from 'react-icons/ai';
import {BsDownload} from 'react-icons/bs';
import {RiGooglePlayLine} from 'react-icons/ri';
import ScrollReveal from 'scrollreveal'
import {Button} from '../../ButtonElement';
const InfoSection = ({id,lightBg,imgStart,img,heading,subtitle,PdSection,primary,download}) => {
    const avtiveStyle ={
        background:`var(--white-color)`,
        color:`var(--primary-color)`,
        marginRight:'3rem',
    }

    return (
        <Fragment>
            <InfoWrap lightBg={lightBg} id={id} PdSection={PdSection} >
                <InfoContainer className="container" >
                    <InfoWrapper>
                        <InfoRow imgStart={imgStart} >
                            <Colum1 className="padding-0">
                                <TextWrapper>
                                    <Icon download={download}><BsDownload/></Icon>
                                    <Heading data-aos={"fade-right"} lightBg={lightBg} download={download}>{heading}</Heading>
                                    <Subtitle data-aos={"fade-right"} data-aos-delay={'200'} lightBg={lightBg} download={download}>{subtitle}</Subtitle>
                                    <BtnWrap  data-aos={"fade-right"}  download={download}>
                                        <Button style={avtiveStyle}> <AiOutlineApple style={{fontSize: "22px",transform:`translateY(-5%)`}} />App Store</Button>
                                        <Button > <RiGooglePlayLine style={{fontSize: "22px",transform:`translateY(-5%)`}} /> GooglePlay</Button>
                                    </BtnWrap>
                                    <BtnWrapStart primary={primary} >
                                        <Button primary={primary} >Get Started</Button>
                                    </BtnWrapStart>
                                </TextWrapper>
                            </Colum1>
                            <Colum2 className="padding-0">
                                <ImgWrap>
                                    <Img data-aos={"fade-left"} src={img} download={download}/>
                                </ImgWrap>
                            </Colum2>
                        </InfoRow>
                    </InfoWrapper>
                </InfoContainer>
            </InfoWrap>
            
        </Fragment>
    )
}

export default InfoSection
