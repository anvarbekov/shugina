// import { useState } from "react";
// import { FaCartArrowDown } from "react-icons/fa";
// import { useFetch } from "../../hooks/useFetch";
// import { Link } from "react-router-dom";
// import { useCart } from "../../hooks/CartContext";
// import Loader from "../loader/loader";

// export default function Products() {
//   const [url, setUrl] = useState(`https://fakestoreapi.com/products`);
//   const { data, loading } = useFetch(url);
//   const { addToCart } = useCart();

//   const handleAddToCart = (product) => {
//     addToCart(product);
//   };

//   return (
//     <div className="mb-20 lg:px-12 px-2 container mx-auto">
//       <div className="product__cards flex items-center flex-wrap justify-between gap-2 lg:flex-row flex-col">
//         {loading && (
//          <Loader />
//         )}
//         {data &&
//           data.map((product) => (
//             <div
//               key={product.id}
//               className="product__card rounded-md p-2 overflow-hidden border transition-all duration-300 hover:shadow-xl flex-grow w-full sm:w-full md:w-72 lg:w-64"
//             >
//               <Link to={`/products/${product.id}`}>
//                 <div className="product__img-box w-full flex items-center justify-center overflow-hidden rounded h-72">
//                   <img
//                     className="product__img text-center object-contain w-2/3 h-2/3"
//                     src={product.image}
//                     alt={product.title}
//                   />
//                 </div>
//                 <h3 className="text-2xl line-clamp-1 my-2">{product.title}</h3>
//               </Link>
//               <div className="product__price-box flex items-center justify-between">
//                 <p className="text-xl">${product.price}</p>
//                 <span
//                   onClick={() => handleAddToCart(product)}
//                   className="add__cart text-2xl text-violet-950 cursor-pointer flex items-center justify-center"
//                 >
//                   <FaCartArrowDown />
//                 </span>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }






import React, { useState, useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/CartContext";
// import { Button } from "@/components/ui/button" //  JSda kerak emas
import Loader from "../loader/Loader";

// O'zbekiston so'mi kursi (taxminiy)
const UZS_RATE = 12000; // Bu kursni yangilab turish kerak

const Products = () => {
  const [url, setUrl] = useState(`https://fakestoreapi.com/products`);
  const { data, loading } = useFetch(url);
  const { addToCart } = useCart();
  const [exchangeRate, setExchangeRate] = useState(UZS_RATE);

    // Kursni yangilash funksiyasi (agar API orqali olinsa)
    useEffect(() => {
        // const fetchExchangeRate = async () => {
        //   try {
        //     const response = await fetch('API_MANZILI');
        //     const data = await response.json();
        //     setExchangeRate(data.rate); // Kerakli kursni olish
        //   } catch (error) {
        //     console.error("Kurs olishda xatolik:", error);
        //     // Xatolik bo'lsa, avvalgi qiymatni saqlab qolamiz yoki default qiymat beramiz
        //   }
        // };

        // fetchExchangeRate(); // Agar API mavjud bo'lsa
        setExchangeRate(UZS_RATE);
    }, []);


  const handleAddToCart = (product) => {
    addToCart(product);
  };

  // Narxlarni so'mda hisoblash funksiyasi
    const convertToUZS = (priceUSD) => {
        return Math.round(priceUSD * exchangeRate);
    };

    // Eski narxni hisoblash funksiyasi (masalan, 10% qo'shib)
    const calculateOldPrice = (priceUZS) => {
        return Math.round(priceUZS * 1.1); // 10% ga oshiramiz
    };

    // Oylik to'lovni hisoblash funksiyasi (masalan, 12 oyga bo'lib to'lash)
    const calculateMonthlyPayment = (priceUZS, months = 12) => {
        return Math.round(priceUZS / months);
    };

  return (
    <div className="mb-20 lg:px-12 px-2 container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {loading && <Loader />}
        {data &&
          data.map((product) => {
            const priceUZS = convertToUZS(product.price);
            const oldPriceUZS = calculateOldPrice(priceUZS);
            const monthlyPayment = calculateMonthlyPayment(priceUZS);
            return(
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 transition-transform duration-200 hover:shadow-lg hover:scale-[1.02] border border-gray-100"
            >
              <Link to={`/products/${product.id}`}>
                <div className="w-full flex items-center justify-center mb-4">
                  <img
                    className="product__img text-center object-contain max-h-40 max-w-full"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <h3 className="text-md font-semibold line-clamp-2 mb-2 text-gray-800">
                  {product.title}
                </h3>
              </Link>
              <div className="flex flex-col items-start  mt-2">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-gray-900">
                        {priceUZS.toLocaleString('uz-UZ')} so'm
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                        {oldPriceUZS.toLocaleString('uz-UZ')} so'm
                    </p>
                </div>
                <p className="text-sm text-gray-600">
                    Oylik to'lov: {monthlyPayment.toLocaleString('uz-UZ')} so'm
                </p>

                <button
                  variant="outline" // Bu uslub yo'q, shuning uchun olib tashladim
                  size="icon"  // Bu uslub yo'q, shuning uchun olib tashladim
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent link navigation
                    handleAddToCart(product);
                  }}
                  className="rounded-full mt-2 self-end bg-transparent border-none p-0 cursor-pointer" // To'g'ri uslublar
                >
                  <FaCartArrowDown className="h-5 w-5 text-violet-950" />
                </button>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  );
};

export default Products;

