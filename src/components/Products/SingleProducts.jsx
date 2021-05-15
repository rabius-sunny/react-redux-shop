import { Card, Col } from "react-bootstrap"
import MySpinner from '../Spinner'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import classes from './products.module.css'

const SingleProducts = () => {

    const products = useSelector(state => state.totalProducts.products)
    const productsToMap = products.slice(0, 18)
    return (
        <>
            {
                products.length === 0 && <MySpinner />
            }
            {
                productsToMap.map(product => {
                    const { id, title, image, price, category } = product
                    return (
                        <div className={classes.card}>
                            <Link to={`/product/${id}`}>
                                <Col lg={3} md={4} sm={6} xs={12} style={{ margin: '15px' }}>
                                    <Card style={{ width: '18rem' }} >
                                        <div className={classes.cardImg}>
                                            <Card.Img variant="top" src={image} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title style={{ fontWeight: '600' }}>{title}</Card.Title>
                                            <Card.Text>
                                                <p style={{ fontWeight: '600' }}>$ {price}</p>
                                                <p><small>{category}</small></p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default SingleProducts
