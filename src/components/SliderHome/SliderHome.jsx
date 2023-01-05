import React, {Component, useEffect, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classes from "./carousel.module.css";
import SliderItem from "./SliderItem";
import {fireData} from "../../utils/firebase";
import {onValue, ref} from "firebase/database";

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
    // const dataBase = fireData;
    // const carouselItemsRef = ref(dataBase, 'carouselItems');
    // console.log(carouselItemsRef);
    // let carouselItemsData = []
    // onValue(carouselItemsRef, (snapshot) => {
    //     const data = snapshot.val();
    //     console.log(data);
    //     carouselItemsData = data;
    // })

    // const carouselItemsData = usePageData('carouselItems');
    // console.log(carouselItemsData);

    const [sliderItems, setSliderItems] = useState([]);

    useEffect(() =>{
        const query = ref(fireData, 'carouselItems');
        return onValue(query, snapshot => {
            const data = snapshot.val();

            if(snapshot.exists()){
                Object.values(data).map((item) =>{
                    setSliderItems((sliderItems) =>[...sliderItems, item]);
                })
            }
        })
    }, []);


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

    if(!sliderItems){
        return <div>Loading...</div>
    }

    return(
        <div className={classes["carousel__wrapper"]}>
            <Slider {...settings}>
                {
                    sliderItems.map((item, index) => ( <SliderItem key={item.img} {...item} />
                    ))
                }
            </Slider>
        </div>
    )
}

export default CarouselHome;

