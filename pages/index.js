import MainBanner from "../components/main-banner/main-banner";
import MiddleBanner from "../components/middle-banner/middle-banner";
import ProducersSwiper from "../components/producers-swiper/producers-swiper";
import ProductsSection from "../components/products-section/products-section";
import Reviews from "../components/reviews/reviews";
import Footer from "../components/footer/footer";
import ProductsAssociations from "../components/products-association/products-associations";
import Newsletter from "../components/newsletter/newsletter";

export default function Home(props) {
  async function newsletterSend(email) {
    const response = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify(email),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();
  }
  return (
    <div>
      <MainBanner />
      <ProductsSection products={props.products} />
      <MiddleBanner />
      <ProducersSwiper />
      <Reviews />
      <ProductsAssociations />
      <Newsletter newsletter={newsletterSend} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const products = await response.json();
  return {
    props: {
      products,
    },
  };
}
