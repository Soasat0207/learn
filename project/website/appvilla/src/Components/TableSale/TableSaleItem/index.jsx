import React,{Fragment} from 'react'
import {
    TableSaleItemWrap,
    TableHead,
    Title,
    Subtitle,
    Price,
    Amount,
    Duration,
    TableContent,
    TableContentTitle,
    TableContentList,
    TableContentListItem
} from './TableSaleItemElement'
import {Button} from '../../../ButtonElement'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
const TableSaleItem = ({benefit,title,subtitle,price,textBuy}) => {
    const ButtonStyle ={
        color:'var(--white-color)',
        backgroundColor:'black',
        display:'flex',
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:'7px'
    }
    const styleIcon ={
        color:'var(--primary-color)',
        fontSize: '1.4rem',
        position: 'absolute',
        left:'0',
        top: '4px',
    }
    return (
        <Fragment>
            <div data-aos="fade-up" className="col col-lg-3 col-md-6 col-sm-7">
                <TableSaleItemWrap>
                    <TableHead>
                        <Title>{title}</Title>
                        <Subtitle>{subtitle}</Subtitle>
                        <Price><Amount>{price}<Duration>/mo</Duration></Amount></Price>
                        <Button style={ButtonStyle}>{textBuy}</Button>
                    </TableHead>
                    <TableContent>
                    <TableContentTitle>What's Included</TableContentTitle>
                    <TableContentList>
                        {benefit.map((benefit) => {
                            return(
                                <TableContentListItem key={benefit.id}><IoIosCheckmarkCircleOutline style={styleIcon}/>{benefit.title}</TableContentListItem>
                            )    
                        })}
                    </TableContentList>
                    </TableContent>
                </TableSaleItemWrap>
                
            </div>
        </Fragment>
    )
}

export default TableSaleItem
