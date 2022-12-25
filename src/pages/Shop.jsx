import React, {useEffect, useState} from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import {Col, Container, Row} from "reactstrap";
import FilterWidget from "../components/UI/FilterWidget";
import ProductsList from "../components/UI/ProductsList";
import {useSelector} from "react-redux";

const Shop = () => {
    const products = useSelector((store) => store.products.productsItems)


    const handleFilter = (e) => {
        const filterValue = e.target.value;

        if(filterValue){

        }
    }


    return ( <Helmet title='Shop'>
        <CommonSection title='Products' />

        <FilterWidget/>

        <div>
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <ProductsList data={products}/>
                    </Col>
                </Row>
            </Container>
        </div>
    </Helmet> )
};
export default Shop;