import React ,{Fragment ,useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavContainer,
    NavLogo,
    ImgWrapLink,
    Img,
    NavMenu,
    NavItems,
    NavLink,
    NavBtn,
    MobileIcon
} from './NavbarElement'
import {Button} from '../../ButtonElement'
const Navbar = ({toggle,isOpen}) => {
    const [scrollNav,setscrollNav] = useState(true);
    let img = scrollNav ? require('../../image/white-logo.svg').default:require('../../image/logo-black.svg').default ;
    const chanNav =() =>{
        if(window.scrollY >=80){
            setscrollNav(false);
        }
        else{
            setscrollNav(true);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',chanNav)
    },[])
    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <Fragment>
           <Nav scrollNav={scrollNav} isOpen={isOpen}>
               <NavContainer className="container">
                   <NavLogo>
                       <ImgWrapLink to ='/' onClick={toggleHome}>
                        <Img src={img} alt=""></Img>
                       </ImgWrapLink>
                   </NavLogo>
                   <MobileIcon onClick={toggle}>
                       <FaBars></FaBars>
                   </MobileIcon>
                   <NavMenu>
                       <NavItems><NavLink 
                       to="home"
                       spy={true}
                       smooth={true}
                       duration={500}
                       offset={-80}
                       extra="true"
                       >Home</NavLink></NavItems>
                       <NavItems><NavLink 
                       to="features"
                       spy={true}
                       smooth={true}
                       duration={500}
                       extra="true"
                       >Features</NavLink></NavItems>
                       <NavItems><NavLink
                       to="overview"
                       spy={true}
                       smooth={true}
                       duration={500}
                       extra="true"
                       >OverView</NavLink></NavItems>
                       <NavItems><NavLink
                       to="pricing"
                       spy={true}
                       smooth={true}
                       duration={500}
                       extra="true"
                       >Pricing</NavLink></NavItems>
                       <NavItems><NavLink
                       to="team"
                       spy={true}
                       smooth={true}
                       duration={500}
                       extra="true"
                       >Team</NavLink></NavItems>
                       <NavItems><NavLink>Blog</NavLink></NavItems>
                       <NavItems><NavLink>Contact</NavLink></NavItems>
                   </NavMenu>
                   <NavBtn>
                       <Button
                        smooth={true}
                        duration={500}
                        spy={true}
                        extra={true}
                        offset={-80}
                        primary={!scrollNav}>Get It Now</Button>
                   </NavBtn>
               </NavContainer>
           </Nav>
        </Fragment>
    )
}

export default Navbar
