import React, {useEffect, useState} from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import {Col, Container, Row} from "reactstrap";
import FilterWidget from "../components/UI/FilterWidget";
import {fireData} from "../utils/firebase";
import {onValue, ref} from "firebase/database";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const productsRef = ref(fireData, 'products');

    const handleFilter = (e) => {
        const filterValue = e.target.value;

        if(filterValue){

        }
    }

    useEffect(() => {
        onValue(productsRef, snapshot => {
            const data = snapshot.val();

            if(snapshot.exists()){
                // console.log(data)
                Object.values(data).map((item) => {
                    setProducts((products) => [...products, item])
                })
            }
        })

    }, [])

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