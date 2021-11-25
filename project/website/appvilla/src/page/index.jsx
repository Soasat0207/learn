import React,{Fragment,useState} from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import InfoSection from '../Components/InfoSection'
import {homeObjectOne, homeObjectThree, homeObjectTwo} from '../Components/InfoSection/Data'
import SectionTitle from '../Components/SectionTitle'
import {SectionTitleFive, SectionTitleFour, SectionTitleOne,SectionTitleThree,SectionTitleTwo} from '../Components/SectionTitle/data'
import SectionFeatures from '../Components/SectionFeatures'
import SectionIntroduce from '../Components/SectionIntroduce'
import {IntroduceObjectOne, IntroduceObjectTwo} from '../Components/SectionIntroduce/Data'
import TableSale from '../Components/TableSale'
import SectionTeam from '../Components/SectionTeam'
import Question from '../Components/Question'
import SectionProduct from '../Components/SectionProduct'
const Home = () => {
    const [isOpen,setIsOpen]= useState(false);
    const toggle =()=>{
        setIsOpen(!isOpen);
        console.log(isOpen);
    }
    return (
        <Fragment>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} isOpen={isOpen}/>
            <InfoSection {...homeObjectOne}/>
            <SectionTitle {...SectionTitleOne}/>
            <SectionFeatures/>
            <InfoSection {...homeObjectTwo}/>
            <InfoSection {...homeObjectThree}/>
            <SectionIntroduce {...IntroduceObjectOne}/>
            <SectionTitle {...SectionTitleTwo}/>
            <TableSale/>
            <SectionTitle {...SectionTitleThree}/>
            <SectionTeam/>
            <SectionIntroduce {...IntroduceObjectTwo}/>
            <SectionTitle {...SectionTitleFour}/>
            <Question />
            <SectionTitle {...SectionTitleFive}/>
            <SectionProduct/>

        </Fragment>
        
    )
}

export default Home
