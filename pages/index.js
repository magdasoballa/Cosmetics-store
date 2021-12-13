import Header from "../components/header/header";
import MainBanner from "../components/main-banner/main-banner";
import MiddleBanner from "../components/middle-banner/middle-banner";
import ProducersSwiper from "../components/producers-swiper/producers-swiper";
import ProductsSection from "../components/products-section/products-section";
import Reviews from "../components/reviews/reviews";
import Footer from "../components/footer/footer";
import ProductsAssociations from "../components/products-association/products-associations";
import Newsletter from "../components/newsletter/newsletter";

export default function Home() {
  async function newsletterSend(email) {
    const response = await fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-type': 'application/json',
      }
    })

    const data = await response.json();

    
  }
  return (
    <div>
      <MainBanner />
      <ProductsSection />
      <MiddleBanner />
      <ProducersSwiper />
      <Reviews />
      <ProductsAssociations />
      <Newsletter newsletter={newsletterSend}/>
      <Footer />
    </div>
  );
}
