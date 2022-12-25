import React from 'react';
import {Container} from "reactstrap";
import classes from "../../styles/common.module.css";

function CommonSection({title}) {
    return (
        <section className={classes['common__section']}>
            <Container>
                <h1 className='text-center'>{title}</h1>
            </Container>
        </section>
    );
}

export default CommonSection;