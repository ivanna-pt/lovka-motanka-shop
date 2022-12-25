import React, {useState, useEffect} from "react";
import Helmet from "../components/Helmet/Helmet";
import classes from "../styles/home.module.css";
import {Container, Row, Col} from "reactstrap";
import CarouselHome from "../components/SliderHome/SliderHome";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import TimerCount from "../components/TimerCount/TimerCount";
import {useSelector} from "react-redux";


const Home = () => {
    const {productsItems} = useSelector((store) => store.products)
    const trendingProducts = productsItems.filter(item => item.category === 'ukraine').slice(0,4);
    const bestProducts = productsItems.filter(item => item.avgRating > 4.7).slice(0,4);

    // const [trendingProducts, setTrendingProductsData] = useState([]);
    // const [bestSalesProducts, setBestSalesProductsData] = useState([]);
    //
    // useEffect(() => {
    //     const query = ref(fireData, 'products')
    //
    //     // const filteredTrendingProducts = products.filter(item => item.category === 'ukraine').slice(0,4)
    //     // const filteredBestSalesProducts = products.filter(item => item.avgRating > 4.7).slice(0,4)
    //
    //
    //     return onValue(query, snapshot => {
    //         const data = snapshot.val();
    //         const filteredTrendingProducts = data.filter(item => item.category === 'ukraine').slice(0,4);
    //         const filteredBestSalesProducts = data.filter(item => item.avgRating > 4.7).slice(0,4)
    //
    //         if(snapshot.exists()){
    //             Object.values(filteredTrendingProducts).map((item) =>{
    //                 setTrendingProductsData((trendingProducts) => [...trendingProducts, item])
    //             });
    //             Object.values(filteredBestSalesProducts).map((item) => {
    //                 setBestSalesProductsData((bestSalesProducts) => [...bestSalesProducts, item]);
    //             });
    //         }
    //     })
    //
    //     // setTrendingProductsData(filteredTrendingProducts);
    //     // setBestSalesProductsData(filteredBestSalesProducts)
    // }, [])

    return (
        <Helmet title={'Home'}>
            <section className={classes['hero__section']}>
                <Container>
                    <Row>
                        <CarouselHome/>
                    </Row>
                </Container>
            </section>

            <Services/>

            <section className="trending__products">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section__title">Trending Products</h2>
                            <ProductsList data={trendingProducts}/>
                        </Col>
                    </Row>
                </Container>
            </section>

            <TimerCount/>

            <section className="best-sales__products">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section__title">Best Sales Products</h2>
                            <ProductsList data={bestProducts}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
};
export default Home;