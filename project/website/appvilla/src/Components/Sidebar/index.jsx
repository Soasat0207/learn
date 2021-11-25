import React ,{Fragment} from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRouter
} from './SidebarElement'
const Sidebar = ({isOpen,toggle}) => {
    return (
        <Fragment>
            <SidebarContainer isOpen={isOpen}>
                <Icon>
                    <CloseIcon onClick={toggle}></CloseIcon>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink>Home</SidebarLink>
                        <SidebarLink>Features</SidebarLink>
                        <SidebarLink>OverView</SidebarLink>
                        <SidebarLink>Pricing</SidebarLink>
                        <SidebarLink>Team</SidebarLink>
                        <SidebarLink>Blog</SidebarLink>
                        <SidebarLink>Contact</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRouter>Sign In</SidebarRouter>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </Fragment>
    )
}

export default Sidebar
