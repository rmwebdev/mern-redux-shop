import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomePage = () => {
    const [products, setProducts ] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/v1/products')
            setProducts(data)
        }
        fetchProducts()
    }, [])
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
