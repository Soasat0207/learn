import React,{Fragment ,useState} from 'react';
import {BsPlus} from 'react-icons/bs';
import {
    QuestionWrap,
    QuestionItem,
    QuestionHeader,
    Title,
    Serial,
    Icon,
    AccordionBody,
} from './QuestionElement'
import {QuestionsObject} from './Data'
const Question = () => {
    const [questionActive,setQuestionActive] = useState(false);
    const toggle = ()=>{
        setQuestionActive(!questionActive);
    }
    return (
        <Fragment>
            <div data-aos="fade-up" className="container">
                <div className="row" style={{justifyContent: 'center'}}>
                    <div className="col-lg-12 col-md-12 col-sm-10">
                    <QuestionWrap >
                        {QuestionsObject.map((QuestionsObject)=>{
                            return (    
                                <QuestionItem key={QuestionsObject.id} onClick ={toggle}>
                                    <QuestionHeader questionActive={questionActive}>
                                        <Title><Serial questionActive={questionActive}>{QuestionsObject.id}</Serial>{QuestionsObject.title}</Title>
                                        <Icon><BsPlus/></Icon>
                                    </QuestionHeader>
                                    <AccordionBody questionActive={questionActive}>
                                            <p style={{marginBottom:'20px'}}>{QuestionsObject.question1}</p>
                                            <p>{QuestionsObject.question2}</p>
                                    </AccordionBody>
                                </QuestionItem>
                                
                            )
                        })}
                    </QuestionWrap>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Question
