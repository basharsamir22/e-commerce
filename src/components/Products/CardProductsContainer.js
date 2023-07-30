import React from 'react'
import { Container,Row } from 'react-bootstrap'
import SubTitle from '../Utility/SubTitle'
import ProductCard from './ProductCard'
const CardProductsContainer = ({title,btntitle}) => {
    return (
        <Container>
        <SubTitle title={title} btntitle={btntitle}/>
        <Row className='my-2 d-flex justify-content-between'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Row>
    </Container>
    )
}

export default CardProductsContainer
