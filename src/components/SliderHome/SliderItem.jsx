import React from "react";
import classes from './carousel.module.css';
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import img from "../../assets/images/display-images/carousel_01.png";


const SliderItem = ({image, title, text, id} ) => {
    const src = require(`../../assets/images/display-images/carousel_02.png`);
    console.log(src);
    console.log(id);

    return (
        <div className={classes["carousel__item"]}>
            <Container>
                <Row>
                    <Col lg='9' md='9' pl='3' >
                        <div className={classes["item__description"]}>
                            <h2 className={classes.title}>{title}</h2>
                            <p className={classes.text}>{text}</p>

                            <Link to='/shop'>
                                <motion.button whileTap={{scale: 1.1}} className='shop-btn'>
                                    SHOP
                                </motion.button>
                            </Link>

                        </div>
                    </Col>
                    <Col lg='3' md='3'>
                        <div className="item-image" >
                            <img src={src} className='img-fluid rounded' alt={image}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SliderItem;