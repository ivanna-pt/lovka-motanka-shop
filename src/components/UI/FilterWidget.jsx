import React from 'react';
import classes from "../../styles/filter-widget.module.css"
import {Col, Container, Row} from "reactstrap";
import {useDispatch} from "react-redux";
import {filterProducts} from "../../redux/features/products/productsSlice";

function FilterWidget() {
    const dispatch = useDispatch();

    const filterItems = (e) => {
        dispatch(filterProducts({value: e.target.value}));
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
                            </select>
                        </div>
                    </Col>
                    <Col lg='3' md='3'>
                        <div className={classes['filter__widget']}>
                            <select name="" id="">
                                <option>Sort By Price</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className={classes["search__box"]}>
                            <input type='text' placeholder='Search ...'/>
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