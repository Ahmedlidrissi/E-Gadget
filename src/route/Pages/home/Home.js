import * as React from "react";
import '../home/Home.css';
import {ProductGrid} from './productGrid/ProductGrid';
import './newArrivals.css';
import CardArrivals from "./CardArrivals/CardArrivals";
import { Arrivals } from "../Assets/dataProduct";
import Values from "./values/values";
import Banner from "./Banner/Banner";
import SliderComponent from './slider/slider';
import Articles from "./Articles/Articles";
import { dataArticles } from "../Assets/dataArticle";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import NewsLetter from "./NewsLetter/NewsLetter";
import Footer from "../../../footer/footer";

export default function Homepage(imageSrc, imageAlt, title, linkText) {
  const ArrivalsCard= Arrivals.map((item,index)=> 
  <CardArrivals key={index}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt} 
                title={item.title} 
                price={item.price} 
                promo={item.promo}
              />);
            
  return (
    <>
    <div>
      <main className="main-container">
        
        <div className="hero-section">
          <SliderComponent/>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Simply Unique / Simply Better.
             </h1>
            
            <div className="hero-description">
              <p className="description-text">
                <span className="store-name">E-Gadget</span>{" "}
                <span className="store-description">
                  {" "}
                  is a gift & electronics gadget store based in Casablanca,
                  Morocco. Est since 2020
                </span>
                <span className="dot">.</span>
              </p>
            </div>
            </div>
          </div>
        </div>
      </main>
  <ProductGrid/>

  <section className="container_Arrivals">
        <h2 className="title">
          New <br /> Arrivals
        </h2>
        <div className="more-products">
          <span className="more-products-text">More Products</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f440ee4394e89c3528436a674fa603e29ca3b941b06a7f9844f2cd91c8b6389?apiKey=c261b1132bd3471985b2b833c77deb73&"
            alt="Arrow icon"
            className="arrow-icon"
          />
        </div>
      </section>
      <div className="ArrivalsCard">{ArrivalsCard}</div>
      <Values />
      <Banner/>
      <section>
        <div className="Chapter-articles">
          <div className="container-articles">
            <h1>Articles</h1>
            <span><Link href="#">More Articles {" "}
            <FontAwesomeIcon icon={faArrowRight} /></Link></span>
          </div>
          <div className="cardArt">{dataArticles.map((article,i)=>{return(<Articles key={i} images={article.image} text={article.text}/>)})}</div>
        </div>
      </section>
      <NewsLetter/>
      <Footer/>
    </div>
    </>
  );
}
