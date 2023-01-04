import React from "react";
import classes from './Products.module.css';
import ProductCard from "./ProductCard";
import {Container, Row} from "reactstrap";

const ProductsList = ({data}) => {

    return (
        <Container>
            <Row>
                {data.length === 0 ? (<h1 className={`pb-4 text-center`}>No products are found ...</h1>) : (data?.map((item) => (<ProductCard item={item} key={item.imgName}/>)))

                }

            </Row>
        </Container>
    )
}

export default ProductsList;
