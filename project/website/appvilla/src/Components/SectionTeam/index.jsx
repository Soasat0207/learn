import React,{Fragment} from 'react'
import '../../assets/css/rest.css'
import '../../assets/css/grid.css'
import '../../assets/css/base.css'
import TeamItem from './TeamItem'
import {TeamItemObject} from './TeamItem/data'
const SectionTeam = () => {
    return (
        <Fragment>
            <div data-aos="fade-up" className="container">
                <div className="row" style={{justifyContent: 'center',marginBottom: '100px'}}>
                    {TeamItemObject.map((TeamItemObject)=>{ return <TeamItem key={TeamItemObject.id} {...TeamItemObject}/>  })}
                </div>
            </div>
        </Fragment>
    )
}

export default SectionTeam
