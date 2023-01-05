import React from "react";
import classes from './timer-count.module.css';
import {Container, Row, Col} from "reactstrap";
import Clock from "./Clock";
import {Link} from "react-router-dom";

const TimerCount = () => {
    return (
        <section className={classes['timer__count']}>
            <Container>
                <Row>
                    <Col lg='7' md='7'>
                        <div className={classes['timer__content']}>
                            <div className="timer__top-content">
                                <h4>Limited Offer</h4>
                                <h3>Candles & Motanka Set</h3>
                            </div>
                            <Clock/>
                           <Link to='/lovka-motanka-shop/shop'> <button className='shop-btn'>Visit Store</button> </Link>
                        </div>
                    </Col>
                    <Col lg='5' md='5'>
                        <div className={classes['timer__img']}>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default TimerCount