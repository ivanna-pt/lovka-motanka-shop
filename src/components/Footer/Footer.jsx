import React from "react";
import classes from "./footer.module.css";
import {Container, Row, Col} from "reactstrap";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes["footer-top"]}>
                <Container>
                    <Row >
                        <Col lg='4' md='4'>
                            <h5 className={classes.title}>Need help?</h5>
                            <div className='mb-3'>
                                <p>+92 21 111 21 111 (10am - 6pm, Mon - Sat)</p>
                                <p>+92 11 112 21 212 (10am - 6pm, Mon - Sat)</p>
                            </div>
                            <p> <a href='mailto:lovka.motanka@shopmail.co'>lovka.motanka@shopmail.com</a> </p>
                        </Col>

                        <Col lg='3' md='3'>
                            <h5 className={classes.title}>Customer service</h5>
                            <ul className={classes['link-list']}>
                                <li className={classes['link-item']}><a href="#">Track your order</a></li>
                                <li className={classes['link-item']}><a href="#">Contact us</a></li>
                                <li className={classes['link-item']}><a href="#">Delivery & Order</a></li>
                                <li className={classes['link-item']}><a href="#">Return & exchange</a></li>
                                <li className={classes['link-item']}><a href="#">Terms & conditions</a></li>
                                <li className={classes['link-item']}><a href="#">Privacy policy</a></li>
                            </ul>
                        </Col>

                        <Col lg='3' md='3'>
                            <h5 className={classes.title}>Company</h5>
                            <ul className={classes['link-list']}>
                                <li className={classes['link-item']}><Link to='/about'>About us</Link></li>
                                <li className={classes['link-item']}><Link to='/contact'>Store location</Link></li>
                                <li className={classes['link-item']}><a href="#">Careers</a></li>
                            </ul>
                        </Col>

                        <Col lg='2' md='2'>
                            <h5 className={classes.title}>Follow us</h5>
                            <div className={classes['icon__wrapper']}>
                                <div className={classes['icon__item']}>
                                    <a href="https://www.instagram.com/lovka.motanka/" target='_blank'><i className="ri-instagram-fill"></i></a>
                                </div>
                                <div className={classes['icon__item']}>
                                    <a href="https://www.facebook.com/irinapokhyl" target='_blank'><i className="ri-facebook-fill"></i></a>
                                </div>
                                <div className={classes['icon__item']}>
                                    <a href="https://ru.pinterest.com/" target='_blank'><i className="ri-pinterest-fill"></i></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div >
                <Container>
                    <Row>
                        <div className={classes['footer-bottom']}>
                            <div className={classes['bottom__item']}>
                                <span>2022</span>
                                <span>Open-source project</span>
                            </div>
                            <div className={classes['bottom__item']}>
                                <i className="ri-github-fill"></i>
                                <span><a href="https://github.com/ivanna-pt" target='_blank'>Coded by ivanna-pt</a></span>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default Footer;