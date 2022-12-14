import "./App.css";
import Layout from "./components/Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {calculateTotal} from "./redux/features/cart/cartSlice";

function App() {
  const {cartItems} = useSelector((store) => store.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  return <Layout/>;
}

export default App;
