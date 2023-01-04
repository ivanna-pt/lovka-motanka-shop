import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Helmet from "../components/Helmet/Helmet";
import {Container, Row} from "reactstrap";


const ProductDetails = () => {
 console.log(useParams());
 const {id} = useParams();
    const {productsItems} = useSelector(store => store.products)
    const product = productsItems.find((product) => product.id === id)
    return ( <Helmet title={"Product Details"}>
        <section>
            <Container>
                <Row>
                    <h3>Product {id} Details </h3>
                    <p>{product.productName}</p>
                    <p>Price: ${product.price}</p>
                </Row>
            </Container>
        </section>
    </Helmet> )
};
export default ProductDetails;