import React,{Fragment} from 'react'
import '../../assets/css/rest.css'
import '../../assets/css/grid.css'
import '../../assets/css/base.css'
import TableSaleItem from './TableSaleItem'
import {TableSaleItemObject} from './TableSaleItem/Data'
const TableSale = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row" style={{
                    justifyContent:'center',
                }}>
                    {TableSaleItemObject.map((TableSaleItemObject) => { 
                        return (
                            <TableSaleItem key={TableSaleItemObject.id} {...TableSaleItemObject} />
                        )
                    })}
                    
                </div>
            </div>
        </Fragment>
    )
}

export default TableSale
