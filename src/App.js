import "./App.css";
import Layout from "./components/Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {calculateTotal} from "./redux/features/cart/cartSlice";
import {getItems, getProductsItems} from "./redux/features/products/productsSlice";

function App() {
  const {cartItems} = useSelector((store) => store.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems]);

  // useEffect(() => {
  //   dispatch(getItems())
  // }, [])
  //
  useEffect(()=>{
    dispatch(getProductsItems())
  }, [])

  return <Layout/>;
}

export default App;
