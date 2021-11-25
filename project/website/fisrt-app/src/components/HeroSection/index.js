import React,{useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElement'
const HeroSection = () => {
    const [hover,setHover]=useState(false);
    const onHover =() => {
        setHover(!hover);
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign up for a new account today and reveive $250 in credit towardas your next payment.</HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to='signup' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    // primary dùng để thay đổi màu của button nếu true thì sẽ là màu xanh flase sẽ là màu trắng
                    primary="true" 
                    //dark thay đổi màu chữ của button nếu true thì là đen false là trắng
                    dark="true">
                        Get started { hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
