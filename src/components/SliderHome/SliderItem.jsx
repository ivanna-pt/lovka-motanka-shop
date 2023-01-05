import React from "react";
import classes from './carousel.module.css';
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import images from "../../assets/images/imageImport";



const SliderItem = ({image, title, text, imageName} ) => {
    // const src = require('../../assets/images/display-images/carousel_01.png');

    // const imageR = image;
    // const imageUrl = '../../assets/' + imageR;
    // const src = require(""+img04)
    // console.log(imageUrl);
    // const src = require(""+imageUrl);
    // const src = `img0${id}`;
    // console.log(src);

    function getImageByKey(key) {
        return images[key]
    }

    return (
        <div className={classes["carousel__item"]}>
            <Container>
                <Row>
                    <Col lg='9' md='9' pl='3' >
                        <div className={classes["item__description"]}>
                            <h2 className={classes.title}>{title}</h2>
                            <p className={classes.text}>{text}</p>

                            <Link to='/lovka-motanka-shop/shop'>
                                <motion.button whileTap={{scale: 1.1}} className='shop-btn'>
                                    SHOP
                                </motion.button>
                            </Link>

                        </div>
                    </Col>
                    <Col lg='3' md='3'>
                        <div className="item-image" >
                            <img src={getImageByKey(imageName)} className='img-fluid rounded' alt={image}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SliderItem;