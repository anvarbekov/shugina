// import { useParams } from "react-router-dom";
// import { useFetch } from "../../hooks/useFetch";
// import { useState, useEffect } from "react";
// import { CiDeliveryTruck } from "react-icons/ci";
// import { useCart } from "../../hooks/CartContext";
// import Loader from "../loader/loader";
// // import LoadingSpinner from "../LoadingSpinner"; // Yuklanish uchun spinner komponenti
// // import LanguageSwitcher from "../LanguageSwitcher"; // Til almashtirgich komponenti

// const customImageArray = [
//   {
//     image:
//       "https://api.zon.uz/files/products/image/633abcabee47ef5888414d80.webp",
//   },
//   {
//     image:
//       "https://api.zon.uz/files/products/image/6363a9a53c214d0844555bc8.webp",
//   },
//   {
//     image:
//       "https://api.zon.uz/files/products/image/633d0ce34d1af369e979d2b3.webp",
//   },
//   {
//     image:
//       "https://api.zon.uz/files/products/image/64abddd3c638a61d07d02ed8.webp",
//   },
// ];

// export default function ProductDetail() {
//   const { id } = useParams();
//   const url = "https://fakestoreapi.com/products/" + id;
//   const { data: product, loading } = useFetch(url);
//   const { cart, addToCart } = useCart();

//   const [imgUrl, setImgUrl] = useState("");
//   const [selectedImage, setSelectedImage] = useState("");
//   const [add, setAdd] = useState(0);

//   useEffect(() => {
//     if (product) {
//       const defaultImage = customImageArray[0].image;
//       setImgUrl(defaultImage);
//       setSelectedImage(defaultImage);

//       const cartItem = cart.find((item) => item.id === product.id);
//       if (cartItem) {
//         setAdd(cartItem.quantity);
//       }
//     }
//   }, [product, cart]);

//   const handleImageClick = (url) => {
//     setImgUrl(url);
//     setSelectedImage(url);
//   };

//   const decrFunction = () => {
//     if (add > 0) {
//       setAdd(add - 1);
//       addToCart(product, -1);
//     }
//   };

//   if (loading) {
//     return <Loader />; // Yuklanish jarayoni ko'rsatiladi
//   }

//   return (
//     <>
//       {loading && <Loader />}
//       {/* <LanguageSwitcher /> Til almashtirgich */}
//       {product && (
//         <>
//           <div className="lg:p-12 p-2 container mx-auto gap-4 flex lg:flex-nowrap flex-wrap">
//             <div className="lg:w-5/12 w-full productdetail__image-box flex gap-x-2">
//               <div className="left__images flex gap-y-2 flex-col justify-between group">
//                 <div className="productdetail__left-img-box flex flex-col justify-between w-20">
//                   {customImageArray.map((image, index) => (
//                     <img
//                       key={index}
//                       className={`w-full productdetail__left-img rounded-md object-cover cursor-pointer border h-24 ${
//                         selectedImage === image.image
//                           ? "border-cyan-700"
//                           : "hover:border-cyan-700"
//                       }`}
//                       src={image.image}
//                       alt={`Custom image ${index + 1}`}
//                       onClick={() => handleImageClick(image.image)}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <div className="global__image flex flex-col items-stretch justify-between h-full">
//                 <img
//                   className="w-96 h-full p-10 object-contain rounded-md border"
//                   src={product.image}
//                   title={product.title}
//                   alt={product.title}
//                 />
//               </div>
//             </div>
//             <div className="product__info w-full lg:w-5/12">
//               <h3>{product.title}</h3>
//               <p>Reyting: {product.rating.rate}</p>
//               <div className="flex items-center justify-between">
//                 <p>${product.price}</p>
//                 <p>{product.category}</p>
//               </div>
//               <hr />
//               <p>{product.description}</p>
//             </div>
//             <div className="product__price md:w-full lg:w-3/12">
//               <div className="p-2 rounded-md border">
//                 <h3 className="font-bold text-2xl">Product price</h3>
//                 <div className="status my-2 flex justify-between items-center">
//                   <p>Holati:</p>
//                   <p className="text-green-500">Sotuvda mavjud</p>
//                 </div>
//                 <div className="flex items-center text-2xl mb-2 gap-x-1">
//                   <CiDeliveryTruck />
//                   <p className="text-lg">Bepul yetkazib berish</p>
//                 </div>
//                 <p>
//                   Andijon bo'ylab 24 soatgacha, O'zbekiston Respublikasi
//                   bo'yicha 2 ish kunigacha yetkazib berish.
//                 </p>
//                 {add === 0 ? (
//                   <button
//                     className="add__btn bg-blue-500 mb-1 px-4 py-2 w-full mt-2 text-white rounded"
//                     onClick={() => {
//                       setAdd(add + 1);
//                       addToCart(product, 1);
//                     }}
//                   >
//                     Savatga qo'shish
//                   </button>
//                 ) : (
//                   <div className="see flex items-center justify-between gap-x-4">
//                     <button
//                       onClick={decrFunction}
//                       className={`bg-blue-500 mb-1 px-4 py-2 w-full mt-2 text-white rounded ${
//                         add === 0 ? "opacity-70" : "opacity-100"
//                       }`}
//                       disabled={add === 0}
//                     >
//                       -
//                     </button>
//                     <p>{add}</p>
//                     <button
//                       onClick={() => {
//                         setAdd(add + 1);
//                         addToCart(product, 1);
//                       }}
//                       className="bg-blue-500 mb-1 px-4 py-2 w-full mt-2 text-white rounded"
//                     >
//                       +
//                     </button>
//                   </div>
//                 )}
//               </div>
//               <div className="installment p-2 rounded-md border mt-8">
//                 <h3 className="text-md text-center font-semibold mb-2">
//                   Muddatli to'lovga:{" "}
//                 </h3>
//                 <hr />
//                 <p className="my-2">
//                   To‘lov rejasi: 6 oyga oyiga 510 300 so‘m. Dastlabki to'lov: 0
//                   so'm. Bo'lib to'lash narxi: 3 061 800 so'm.
//                 </p>
//                 <p>To'lovlar buyurtma berishda amalga oshiriladi.</p>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }






import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CiDeliveryTruck } from 'react-icons/ci';
import { useCart } from '../../hooks/CartContext';
import Loader from '../loader/loader';
import { AiFillStar } from 'react-icons/ai';

const customImageArray = [
    {
        id: 1,
        image:
            "https://api.zon.uz/files/products/image/633abcabee47ef5888414d80.webp",
    },
    {
        id: 2,
        image:
            "https://api.zon.uz/files/products/image/6363a9a53c214d0844555bc8.webp",
    },
    {
        id: 3,
        image:
            "https://api.zon.uz/files/products/image/633d0ce34d1af369e979d2b3.webp",
    },
    {
        id: 4,
        image:
            "https://api.zon.uz/files/products/image/64abddd3c638a61d07d02ed8.webp",
    },
];

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart, cart } = useCart();

    const [imgUrl, setImgUrl] = useState("");
    const [selectedImage, setSelectedImage] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [exchangeRate, setExchangeRate] = useState(0);
    const [productImages, setProductImages] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await fetch('https://cbu.uz/uz/arkhiv-kursov-valyut/json/');
                if (!response.ok) {
                    throw new Error('Failed to fetch exchange rate');
                }
                const data = await response.json();
                // USD kursini topish
                const usdRate = data.find(item => item.Ccy === 'USD');
                if (usdRate) {
                    setExchangeRate(parseFloat(usdRate.Rate));
                } else {
                    throw new Error('USD rate not found in response');
                }
            } catch (error) {
                console.error("Valyuta kursi olishda xatolik:", error);
                setError("Failed to fetch exchange rate. Please check your internet connection.");
                setExchangeRate(12000); // Agar kursni olmasa, default qiymat
            }
        };

        fetchExchangeRate();
    }, []);

    useEffect(() => {
        if (product && exchangeRate) {
            // Asosiy rasmni o'rnatish
            let initialImage = product.image;
            setImgUrl(initialImage);
            setSelectedImage(initialImage);
            // Mahsulot rasmlarini statega saqlash
            const relatedImages = customImageArray.filter(img => product && initialImage && img.image !== initialImage);
            setProductImages(relatedImages);

            const cartItem = cart.find((item) => item.id === product.id);
            setQuantity(cartItem ? cartItem.quantity : 0);
        }
    }, [product, cart, exchangeRate]);

    const handleImageClick = (url) => {
        setImgUrl(url);
        setSelectedImage(url);
    };

    const handleImageHover = (url) => {
        setImgUrl(url);
    }

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            addToCart(product, -1);
        }
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
        addToCart(product, 1);
    };

    // Narxlarni so'mda hisoblash funksiyasi
    const convertToUZS = (priceUSD) => {
        return Math.round(priceUSD * exchangeRate);
    };

    // Reytingni yulduzchalarda ko'rsatish funksiyasi
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<AiFillStar key={`full-${i}`} className="h-4 w-4 text-yellow-500 inline-block" />);
        }

        if (halfStar) {
            stars.push(<AiFillStar key="half" className="h-4 w-4 text-yellow-500 inline-block" />);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<AiFillStar key={`empty-${i}`} className="h-4 w-4 text-gray-300 inline-block" />);
        }
        return stars;
    };

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Mahsulot topilmadi!</div>;
    }

    const priceUZS = convertToUZS(product.price);

    return (
        <>
            <div className="lg:p-12 p-2 container mx-auto gap-4 flex lg:flex-nowrap flex-wrap">
                <div className="lg:w-5/12 w-full productdetail__image-box flex gap-x-2">
                    <div className="left__images flex gap-y-2 flex-col justify-between group">
                        <div className="productdetail__left-img-box flex flex-col justify-between w-20">
                            {productImages.map((image, index) => (
                                image.image && (
                                    <img
                                        key={index}
                                        className={`w-full productdetail__left-img rounded-md object-cover cursor-pointer border h-24
                                         ${selectedImage === image.image ? "border-cyan-700" : "hover:border-cyan-700"}`}
                                        src={image.image}
                                        alt={`Custom image ${index + 1}`}
                                        // onClick={() => handleImageClick(image.image)}
                                        onMouseEnter={() => {
                                          handleImageClick(image.image)
                                          handleImageHover(image.image)
                                          }}
                                    />
                                )
                            ))}
                        </div>
                    </div>
                    <div className="global__image flex flex-col items-stretch justify-between h-full">
                        <img
                            className="w-96 h-full p-10 object-contain rounded-md border"
                            src={imgUrl}
                            title={product.title}
                            alt={product.title}
                        />
                    </div>
                </div>
                <div className="product__info w-full lg:w-5/12">
                    <h3>{product.title}</h3>
                    <div className="flex items-center gap-2">
                        {renderStars(product.rating?.rate || 0)}
                        <p>({product.rating?.count || 0} baho)</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <p className="text-xl font-bold">{priceUZS.toLocaleString('uz-UZ')} so'm</p>
                        <p>{product.category}</p>
                    </div>
                    <hr />
                    <p>{product.description}</p>
                </div>
                <div className="product__price md:w-full lg:w-3/12">
                    <div className="p-2 rounded-md border">
                        <h3 className="font-bold text-2xl">
                            {quantity > 0 ? `Narxi: ${ (priceUZS * quantity).toLocaleString('uz-UZ') } so'm` : "Mahsulot narxi"}
                        </h3>
                        <div className="status my-2 flex justify-between items-center">
                            <p>Holati:</p>
                            <p className="text-green-500">Sotuvda mavjud</p>
                        </div>
                        <div className="flex items-center text-2xl mb-2 gap-x-1">
                            <CiDeliveryTruck />
                            <p className="text-lg">Bepul yetkazib berish</p>
                        </div>
                        <p>
                            Andijon bo'ylab 24 soatgacha, O'zbekiston Respublikasi
                            bo'yicha 2 ish kunigacha yetkazib berish.
                        </p>
                        {quantity === 0 ? (
                            <button
                                className="add__btn bg-blue-500 mb-1 px-4 py-2 w-full mt-2 text-white rounded"
                                onClick={() => {
                                    setQuantity(1);
                                    addToCart(product, 1);
                                }}
                            >
                                Savatga qo'shish
                            </button>
                        ) : (
                            <div className="see flex items-center justify-between gap-x-4">
                                <button
                                    onClick={decrementQuantity}
                                    className="bg-blue-500 mb-1 px-4 py-2 w-full mt-2 text-white rounded"
                                    disabled={quantity === 0}
                                >
                                    -
                                </button>
                                <p>{quantity}</p>
                                <button
                                    onClick={incrementQuantity}
                                    className="bg-blue-500 mb-1 px-4 py-2 w-full mt-2 text-white rounded"
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="installment p-2 rounded-md border mt-8">
                        <h3 className="text-md text-center font-semibold mb-2">
                            Muddatli to'lovga:
                        </h3>
                        <hr />
                        <p className="my-2">
                            To‘lov rejasi: 6 oyga oyiga {(convertToUZS(product.price) / 6).toLocaleString('uz-UZ')} so‘m. Dastlabki to'lov: 0
                            so'm. Bo'lib to'lash narxi: {convertToUZS(product.price).toLocaleString('uz-UZ')} so'm.
                        </p>
                        <p>To'lovlar buyurtma berishda amalga oshiriladi.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

