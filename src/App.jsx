import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopDeals from "./components/TopDeals";
import Collection from "./components/Collection";
import ProductDetails from "./components/ProductDetails";
import SignIn from "./components/SignIn";
import Checkout from "./components/Checkout";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

export const App = () => {
  const Home = () => {
    return (
      <>
        <Navbar />
        {/* <Swiper slidesPerView={1}>
          <SwiperSlide>
            {" "}
            <img
              className="w-full"
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1704987401_Best_offers_on_Men_s_Casual_Wear__Desktop.jpg?im=Resize=(1680,320)"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1705238793_Aaj_Ki_Deals_Desktop.jpg?im=Resize=(1680,320)"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-full"
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1705471747_Redmi_Motorola_Desktop.jpg?im=Resize=(1680,320)"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-full"
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1705429268_Super_Saver_Deals_On_Cooking_Oil_D.jpg?im=Resize=(1680,320)"
              alt=""
            />
          </SwiperSlide>
        </Swiper> */}
        <section className="px-5 md:px-16 m-auto">
          <div className="mt-5 ">
            <TopDeals />
          </div>
          <div className="mt-5">
            <Collection />
          </div>
        </section>

      </>
    );
  };

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/:signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout/:userId" element={<Checkout />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};
