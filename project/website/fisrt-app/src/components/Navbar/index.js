import React,{useState,useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import {IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavbarElement';
const Navbar = (props) => {
    const toggle = props.toggle;
    const [scrollNav,setscrollNav] = useState(false);
    const changeNav = () =>{
        if(window.scrollY >=80){
            setscrollNav(true)
        }
        else{
            setscrollNav(false)

        }
    }
    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    },[])
    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
       <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>dolla</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu >
                        <NavItem>
                            <NavLinks 
                            to="about"
                            spy={true} 
                            smooth={true} 
                            offset={-80} 
                            duration={500}
                            extra='true'
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="discover"
                            spy={true} 
                            smooth={true} 
                            offset={-80} 
                            duration={500}
                            extra='true'
                            >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="services"
                            spy={true} 
                            smooth={true} 
                            offset={-80} 
                            duration={500}
                            extra='true'
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="signup"
                            spy={true} 
                            smooth={true} 
                            offset={-80} 
                            duration={500}
                            extra='true'
                            >Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign in</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
       </IconContext.Provider>
       </>
    )
}

export default Navbar
