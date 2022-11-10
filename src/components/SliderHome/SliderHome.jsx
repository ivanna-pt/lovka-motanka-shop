import React, {Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classes from "./carousel.module.css";
import {Button, Col, Container, Row} from "reactstrap";

import {Link} from "react-router-dom";

import {motion} from "framer-motion";

import image01 from '../../assets/images/display-images/carousel_01.png';
import image02 from '../../assets/images/display-images/carousel_02.png';
import image03 from '../../assets/images/display-images/carousel_03.jpg';
import image04 from '../../assets/images/display-images/carousel_04.png';


const carouselItems = [
    {
        title: 'Motanka Dolls',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cum!',
        image: image01
    },
    {
        title: 'Authentic Handcraft',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cum!',
        image: image02
    },
    {
        title: 'Ukrainian Souvenirs',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cum!',
        image: image03
    },
    {
        title: 'Perfect Gift',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cum!',
        image: image04
    },
];

function NextArrow(props)  {
    const {className, style, onClick } = props;
    return (
        <div
        className={`${className} ${classes["arrow-next"]}`}
        style={{...style, display: "block" }}
        onClick={onClick}
        />
    );
}

function PrevArrow(props)  {
    const {className, style, onClick } = props;
    return (
        <div
            className={`${className} ${classes["arrow-prev"]}`}
            style={{...style, display: "block" }}
            onClick={onClick}
        />
    );
}



const CarouselHome = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
    };

    return(
        <div className={classes["carousel__wrapper"]}>
            <Slider {...settings}>
                {
                    carouselItems.map((item, index) => (
                        <div className={classes["carousel__item"]} key={index}>
                            <Container>
                                <Row>
                                    <Col lg='9' md='9' pl='3' >
                                        <div className={classes["item__description"]}>
                                            <h2 className={classes.title}>{item.title}</h2>
                                            <p className={classes.text}>{item.text}</p>

                                            <Link to='/shop'>
                                                <motion.button whileTap={{scale: 1.1}} className='shop-btn'>
                                                    SHOP
                                                </motion.button>
                                            </Link>

                                        </div>
                                    </Col>
                                    <Col lg='3' md='3'>
                                        <div className="item-image" >
                                            <img src={item.image} className='img-fluid rounded' alt=""/>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default CarouselHome;

