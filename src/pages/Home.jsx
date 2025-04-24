import Sidebar from "../components/sidebar/Sidebar";
import Carousel from "../components/carousel/Carousel";
import Product from "../components/products/Products";

export default function Home() {
  return (
    <>
      <section className="container mx-auto">
        <div className="flex lg:flex-row flex-col-reverse items-stretch gap-x-0 justify-between lg:px-12 px-2 py-4">
          <Sidebar />
          <div className="home__carousel">
            <Carousel />
            <div className="carousel__cards md:flex justify-between block items-center gap-x-2">
              <div className="carousel__card w-full h-48 border overflow-hidden mt-3 rounded">
                <img className="w-full h-full object-cover" src="https://en.thudologistics.com/public/upload/40b5908a51678a51959dec5a66aed670.png" alt="" />
              </div>
              <div className="carousel__card w-full h-48 border overflow-hidden mt-3 rounded">
                <img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/5a/af/96/5aaf9658916d26ee7bcc98036793e1f9.jpg" alt="" />
              </div>
              <div className="carousel__card w-full h-48 border overflow-hidden mt-3 rounded">
                <img className="w-full h-full object-cover" src="https://as2.ftcdn.net/v2/jpg/01/17/57/49/1000_F_117574981_HmsETiIBca3N5enmsJtrl5uHaGVPmGCu.jpg" alt="" />
              </div>
              <div className="carousel__card w-full h-48 border overflow-hidden mt-3 rounded">
                <img className="w-full h-full object-cover" src="https://t3.ftcdn.net/jpg/05/61/55/22/360_F_561552282_mGKd3af96Iw4TAjVj1NT8E9G6SNgxrPc.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="products">
          <Product />
        </div>
      </section>
    </>
  );
}
