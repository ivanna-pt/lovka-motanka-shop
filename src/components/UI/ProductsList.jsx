import React from "react";
import classes from './Products.module.css';
import ProductCard from "./ProductCard";
import {Container, Row} from "reactstrap";

const ProductsList = ({data}) => {

    return (
        <Container>
            <Row>
                {
                    data?.map((item) => (<ProductCard item={item} key={item.imgName}/>))
                }

            </Row>
        </Container>
    )
}

export default ProductsList;
