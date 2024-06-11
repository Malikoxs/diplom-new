import Button from "../../Components/Button/Button";
import HomeSec from "../../Components/HomeSec/HomeSec";
import HomeTxt from "../../Components/HomeTxt/HomeTxt";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Link } from "react-router-dom";
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

function Home() {
  return (
    <>
      <div className="Home_sec Home_sec__white Home_sec__macaron">
        <div className="container">
          <HomeSec>Macaron</HomeSec>
          <HomeTxt>The most delicate cake-cookies.</HomeTxt>
          <div className="Home_buttons flex">
          <Link to="/https://kulikov.com/katalog/pirozhnye/#b3019">
            <Button path="/Delivery">Order</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Home_sec Home_sec__black Home_sec__cake">
        <div className="container">
          <HomeSec>Cakes</HomeSec>
          <HomeTxt>Sweet dessert pie.</HomeTxt>
          <div className="Home_buttons flex">
          <Link to="https://kulikov.com/katalog/torty/">
            <Button path="/Delivery">Order</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Home_sec Home_sec__white Home_sec__cupcake">
        <div className="container">
          <HomeSec>Cupcakes</HomeSec>
          <HomeTxt>Super cute daisy cupcakes.</HomeTxt>
          <div className="Home_buttons flex">
            <Button path="/Delivery">Order</Button>
            
          </div>
        </div>
      </div>
      <div className="Home_slider">
        <Swiper 
          spaceBetween={10} 
          slidesPerView={2}
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          autoplay={1000}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Link className="Home_slide" to="https://www.vb.kg/doc/305898_konditerskiy_dom_kylikovskiy_otkryvaet_svoi_dveri_v_moskve.html">
              <img
                src="https://data.vb.kg/image/big/2015-03-11_10-19-00_353946.jpg"
                alt=""
              />
              
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="Home_slide" to="https://kulikov.com/">
              <img
                src="https://sib.fm/storage/article/August2022/lQBHDBnt0F7OufjciKGR.jpeg"
                alt=""
              />
              
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="Home_slide" to="https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DWzwn1PFQ2oI&psig=AOvVaw3BufOLG0BTNEQgJM1h2gcV&ust=1717679333915000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCID62qnExIYDFQAAAAAdAAAAABAR">
              <img
                src="https://i.ytimg.com/vi/Wzwn1PFQ2oI/maxresdefault.jpg"
                alt=""
              />
              <p className="Home_slide-txt">"Kulikovsky": The history of the creation of a confectionery house.</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="Home_slide" to="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vb.kg%2Fdoc%2F374385_iz_chego_rabotniki_kd_kylikovskiy_gotoviat_torty_i_pochemy_bez_perchatok.html&psig=AOvVaw3BufOLG0BTNEQgJM1h2gcV&ust=1717679333915000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCID62qnExIYDFQAAAAAdAAAAABAZ">
              <img
                src="https://i.ytimg.com/vi/ru0SA6f4ZVQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDDRaKUZ4GY1pgFKHHz4lz9y0W7LA"
                alt=""
              />
              <p className="Home_slide-txt">
              how "Kulikovsky" works and grows
              </p>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Home;
