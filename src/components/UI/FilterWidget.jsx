import React from 'react';
import classes from "../../styles/filter-widget.module.css"
import {Col, Container, Row} from "reactstrap";
import {useDispatch} from "react-redux";
import {
    filterProductsByCategory,
    filterProductsByPrice, searchForProduct
} from "../../redux/features/products/productsSlice";

function FilterWidget() {
    const dispatch = useDispatch();

    const filterItems = (e) => {
        dispatch(filterProductsByCategory({value: e.target.value}));
    }

    const filterByPrice = (e) => {
        dispatch(filterProductsByPrice({value: e.target.value}));
    }

    const handleSearch = (e) => {
        dispatch(searchForProduct({value: e.target.value}))
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='3' md='3'>
                        <div className={classes['filter__widget']}>
                            <select name="" id="" onClick={filterItems}>
                                <option>Sort By Category</option>
                                <option value="Beregynia">Beregynia</option>
                                <option value="bride">Bride</option>
                                <option value="ukraine">Ukraine</option>
                                <option value="all">Show All</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='3' md='3'>
                        <div className={classes['filter__widget']}>
                            <select name="" id="" onClick={filterByPrice}>
                                <option>Sort By Price</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className={classes["search__box"]}>
                            <input type='text' placeholder='Search ...' onChange={handleSearch}/>
                            <span>
                                <i className="ri-search-line"></i>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default FilterWidget;