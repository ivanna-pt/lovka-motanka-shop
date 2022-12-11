import React, {useEffect, useState} from "react";
import classes from './services.module.css';
import {motion} from 'framer-motion';
import {Col, Container, Row} from "reactstrap";
import {fireData} from "../utils/firebase";
import {onValue, ref} from "firebase/database";
import usePageData from "../custom-hooks/usePageData";

// import serviceData from "../assets/data/serviceData";

const Services = () => {

    // const serviceData = usePageData('serviceData');

    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        const query = ref(fireData, 'serviceData');
        return onValue(query, snapshot => {
            const data = snapshot.val();

            if(snapshot.exists()){
                Object.values(data).map((item) => {
                    setServiceData((serviceData) =>[...serviceData, item]);
                })
            }
        })
    }, [])

    return (
        <section className="services">
            <Container>
                <Row>
                    {
                        serviceData.map((item, index)=>(
                            <Col lg='3' md='4' key={index}>
                                <motion.div whileHover={{scale: 1.05}} className={classes["services__item"]} style={{background: `${item.bg}`}}>
                                    <span><i className={item.icon}></i></span>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </motion.div>
                            </Col>
                        ))
                    }


                </Row>
            </Container>
        </section>
    )
}

export default Services;