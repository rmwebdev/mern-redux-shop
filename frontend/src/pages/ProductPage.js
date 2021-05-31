import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import products from '../products'
import Rating from '../components/Rating'

const ProductPage = ({ match }) => {
    const product = products.find((p) => p._id === match.params.id)
    return (
        <>
            
            <Link to="/" className="btn btn-light my-3">Go Back</Link>
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Price: $ {product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                               <Row>
                               <Col> Price: </Col>
                                <Col> <strong>${ product.price }</strong> </Col>
                               </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                <Col> Status: </Col>
                                <Col> { product.countInStock > 0 ? (
                                <strong className="text-info">In Stock</strong>
                                ) : (
                                <strong className="text-danger">Out of Stock</strong>
                                ) } </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <div class="d-grid gap-2">
                                <Button className="btn btn-primary btn-sm btn-block " disabled={product.countInStock === 0} type="button">Add to Bag</Button>
                            </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductPage
