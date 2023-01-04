import React from "react";
import classes from './Products.module.css';
import {Col} from "reactstrap";
import {motion} from 'framer-motion';
import {Link} from "react-router-dom";
import images from "../../assets/images/imageImport";
import {useDispatch} from "react-redux";
import {addItem} from "../../redux/features/cart/cartSlice";
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ProductCard = ({item}) => {

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            image: item.imgName,
            }));

        toast.success("Product added successfully")
    };


    function getImageByKey(key) {
        return images[key]
    };

    return (
        <Col lg='3' md='4'>
            <div className={classes['product__item']}>
                <div className={classes['product__img']}>
                    <motion.img whileHover={{scale: 0.95}} src={getImageByKey(item.imgName)} className='fluid' alt=""/>
                </div>
                <div className={classes['image__content']}>
                    <div className={classes['product__name']}>
                        <Link to={`/lovka-motanka-shop/shop/${item.id}`}><h3>{item.productName}</h3></Link>
                    </div>
                    <div className={classes["product__bottom"]}>
                        <span className={classes['product__price']}>${item.price}</span>
                        <span  className={classes['add_to_cart__btn']} onClick={addToCart}>
                            Add to cart
                        </span>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard;