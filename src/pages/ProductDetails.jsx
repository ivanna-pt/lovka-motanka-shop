import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Helmet from "../components/Helmet/Helmet";
import {Container, Row, Col} from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import images from "../assets/images/imageImport";
import classes from "../styles/productDetails.module.css";
import {addItem} from "../redux/features/cart/cartSlice";
import {toast} from "react-toastify";
import ProductsList from "../components/UI/ProductsList";


const ProductDetails = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const [tab, setTab] = useState("desc");
    const [rating, setRating] = useState(null);

    const {productsItems} = useSelector(store => store.products);
    const product = productsItems.find((product) => product.id === id);
    const {productName, imgName, price, category, shortDesc, description, reviews, avgRating} = product;

    const relatedProducts = productsItems.filter(item => item.category ===category).slice(0, 4);

    const addToCart = () => {
        dispatch(addItem({
            id: id,
            productName: productName,
            price: price,
            image: imgName,
        }))

        toast.success("Product added successfully")
    }

    function getImageByKey(key) {
        return images[key]
    };

    return ( <Helmet title={"Product Details"}>
        <CommonSection title={product.productName}/>

        <section className={classes[`details__section`]}>
            <Container>
                <Row>
                    <Col lg='4'>
                        <img src={getImageByKey(imgName)} alt={productName} className={classes[`product__img`]}/>
                    </Col>

                    <Col lg='8'>
                        <div className={classes["product__details"]}>
                            <div className={classes['header']}>
                                <p className={classes['product__category']}>{category}</p>
                                <div className={classes['product__rating']}>
                                    <div className={classes['star__wrap']}>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-half-fill"></i>
                                    </div>
                                    <div >
                                        (<span>{avgRating}</span> rating)
                                    </div>
                                </div>
                            </div>
                            <h3 className={classes['product__name']}>{productName}</h3>
                            <p className={classes['product__price']}>${price}</p>
                            <div className={classes['product__description']}>
                                {/*<p>{shortDesc}</p>*/}
                                <p>{description}</p>
                            </div>
                            <button className={classes['add_to_cart__btn']} onClick={addToCart}>
                                Add to cart
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className={classes['tab__wrapper']}>
                            <h6 className={`${tab === 'desc' ? classes['active__tab'] : ''}`} onClick={()=>setTab('desc')}>Description</h6>
                            <h6 className={`${tab === 'rev' ? classes['active__tab'] : ''}`} onClick={()=> setTab('rev')}>Reviews ({reviews.length})</h6>
                        </div>

                        {
                            tab === 'desc' ? (<div className={classes['tab__content']}>
                                <div>
                                    <p>{shortDesc}</p>
                                    <p>{description}</p>
                                </div>
                            </div>) : (
                                <div className={classes['product__reviews']}>
                                    <div className={classes['review__wrapper']}>
                                        <ul>
                                            {
                                                reviews?.map((item, index) => (
                                                    <li key={`${index}${item.rating}`} className='mb-3'>
                                                        <h6>User Name</h6>
                                                        <span>{item.rating} (rating)</span>
                                                        <p>{item.text}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>

                                        <div className={classes["review__form"]}>
                                            <h4>Leave you experience</h4>
                                            <form action="">
                                                <div className={classes["form__group"]}>
                                                    <input type="text" placeholder='Enter your name'/>
                                                </div>

                                                <div className={classes["form__group", "stars"]}>
                                                    <span onClick={() => setRating(1)}> 1
                                                        <i className="ri-star-fill"></i>
                                                    </span>
                                                    <span onClick={() => setRating(2)}> 2
                                                        <i className="ri-star-fill"></i>
                                                    </span>
                                                    <span onClick={() => setRating(3)}> 3
                                                        <i className="ri-star-fill"></i>
                                                    </span>
                                                    <span onClick={() => setRating(4)}> 4
                                                        <i className="ri-star-fill"></i>
                                                    </span>
                                                    <span onClick={() => setRating(5)}> 5
                                                        <i className="ri-star-fill"></i>
                                                    </span>
                                                </div>

                                                <div className={classes["form__group"]}>
                                                    <textarea rows={4} type="text" placeholder='Review Message'/>
                                                </div>

                                                <button type={"submit"} className="shop-btn">
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Col>

                    <Col lg='12' className='mt-5'>
                        <h2 className={classes['related__products']}>Related products</h2>
                    </Col>

                    <ProductsList data={relatedProducts}/>
                </Row>
            </Container>
        </section>
    </Helmet> )
};
export default ProductDetails;