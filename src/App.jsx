import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopDeals from "./components/TopDeals";
import Collection from "./components/Collection";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"

export const App = () => {
  const Home = () => {
    return <>
      <section className="w-full ">
        <img className="w-full" src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1704987401_Best_offers_on_Men_s_Casual_Wear__Desktop.jpg?im=Resize=(1680,320)" alt="" />
      </section>
      <section className="px-5 md:px-16 m-auto">
        <div className="mt-5 ">
          <TopDeals />
        </div>
        <div className="mt-5">
          <Collection />
        </div>
      </section>
    </>
  }

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<>search</>} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/orders" element={<>orders</>} />
          <Route path="/whish-list" element={<>whishlist</>} />
          <Route path="/settings" element={<>settings</>} /> */}
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
        <div className="mt-16">
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}
