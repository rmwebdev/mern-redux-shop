import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'
const HomePage = () => {
    return (
        <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product, index) => (
                <Col sm={12} smd={6} lg={4} xl={3} key={index}>
                    <Product product={product} />
                </Col>
                ))}
        </Row>
        </>
    )
}

export default HomePage
