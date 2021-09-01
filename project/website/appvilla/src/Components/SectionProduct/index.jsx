import React,{Fragment} from 'react'
import '../../assets/css/rest.css'
import '../../assets/css/grid.css'
import '../../assets/css/base.css'
import ProductItem from './ProductItems'
import {ProductObject} from './ProductItems/data'
const SectionProduct = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row" style={{justifyContent: 'center',marginBottom: '100px'}}>
                    {ProductObject.map((ProductObject)=>{ return <ProductItem key={ProductObject.id} {...ProductObject}/>  })}
                </div>
            </div>
        </Fragment>
    )
}

export default SectionProduct
