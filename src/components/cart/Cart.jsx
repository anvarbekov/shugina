// import { Link } from "react-router-dom";
// import { FaPhone, FaRegTrashAlt, FaUserCircle } from "react-icons/fa";
// import { useCart } from "../../hooks/CartContext";

// export default function Cart() {
//   const { cart, addToCart, removeFromCart } = useCart();

//   const handleIncrement = (product) => {
//     addToCart(product, 1);
//   };

//   const handleDecrement = (product) => {
//     if (product.quantity === 1) {
//       removeFromCart(product.id);
//     } else {
//       addToCart(product, -1);
//     }
//   };

//   const handleRemove = (productId) => {
//     removeFromCart(productId);
//   };

//   return (
//     <div className="flex items-stretch justify-between gap-5 my-5 lg:px-12 px-2 lg:flex-row flex-col container mx-auto">
//       <div className="product rounded-md p-5 w-full lg:w-2/3 border">
//         <h2 className="mb-4">Sizning savatingiz: {cart.length} ta mahsulot</h2>
//         {cart.length === 0 ? (
//           <div className="flex flex-col text-center items-center justify-center gap-2 mb-10">
//             <img
//               className="w-64"
//               src="/emptyCart.png"
//               alt="This is empty cart"
//             />
//             <h1 className="text-2xl font-semibold">
//               Savatda hozircha mahsulot yoʻq
//             </h1>
//             <p>
//               Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni
//               qidiruv orqali toping
//             </p>
//             <Link to={"/"}>
//               <button className="bg-blue-500 mb-1 px-4 py-2 mt-2 text-white rounded">
//                 Bosh sahifa
//               </button>
//             </Link>
//           </div>
//         ) : (
//           cart.map((item) => (
//             // console.log(item.priceUsd);
//             <div
//               key={item.id}
//               className={`${
//                 item.quantity === 0 ? "hidden" : "block"
//               } rounded-md shadow-md py-2 px-4 my-4 flex items-center justify-between`}>
//               <div className="flex items-center justify-between gap-x-5">
//                 <img
//                   className="w-24 h-24 object-cover"
//                   src={item.image}
//                   alt={item.characteristicsList[0].nameUz}
//                 />
//                 <div>
//                   <h2>{item.characteristicsList[0].nameUz}</h2>
//                   <p>${item.priceUsd}</p>
//                 </div>
//               </div>
//               <div className="see md:flex-row flex-col flex items-center justify-between gap-x-4">
//                 <button
//                   onClick={() => handleDecrement(item)}
//                   className="bg-blue-500 mb-1 px-4 py-2 w-full mt-2 text-white rounded">
//                   -
//                 </button>
//                 <p>{item.quantity}</p>
//                 <button
//                   onClick={() => handleIncrement(item)}
//                   className="bg-blue-500 mb-1 px-4 py-2 w-full mt-2 text-white rounded">
//                   +
//                 </button>
//                 <button
//                   onClick={() => handleRemove(item.id)}
//                   className="bg-red-500 text-white px-3 py-3 rounded-md">
//                   <FaRegTrashAlt />
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       <div className="total w-full lg:w-1/3">
//         <div className=" p-5 rounded-md h-full border">
//           <div className="flex items-start justify-between">
//             <h2 className="text-2xl font-semibold">Jami:</h2>
//             <p className="text-2xl font-semibold">
//               $
//               {cart.reduce(
//                 (total, item) => total + item.price * item.quantity,
//                 0
//               )}
//             </p>
//           </div>
//           <div className="flex flex-col gap-y-4 mt-4">
//             <form className="flex flex-col gap-y-4" action="#">
//               <div className="flex px-2 items-center border rounded-md outline-none shadow-md">
//                 <FaUserCircle className="text-2xl text-blue-600" />
//                 <input
//                   placeholder="Ismingiz"
//                   className="px-4 py-3 w-full h-full rounded-md outline-none"
//                   name="UserName"
//                   type="text"
//                 />
//               </div>
//               <div className="flex px-2 items-center border rounded-md outline-none shadow-md">
//                 <FaPhone className="text-2xl text-blue-600" />
//                 <input
//                   placeholder="+998 90 111 22 33"
//                   className="px-4 py-3 w-full h-full rounded-md outline-none"
//                   name="PhoneNumber"
//                   type="tel"
//                   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//                   required
//                 />
//               </div>
//             </form>
//             <button className="add__btn bg-blue-500 mb-1 px-4 py-2 w-full mt-2 text-white rounded">
//               Buyurtma qilish
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







import React from 'react';
import { Link } from "react-router-dom";
import { FaPhone, FaRegTrashAlt, FaUserCircle } from "react-icons/fa";
import { useCart } from "../../hooks/CartContext";

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useCart();

  const handleIncrement = (item) => {
    addToCart(item, 1);
  };

  const handleDecrement = (item) => {
    addToCart(item, -1);
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  // Funksiya umumiy narxni hisoblash uchun
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = item.priceUsd !== undefined ? item.priceUsd : item.price;
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div className="flex items-stretch justify-between gap-5 my-5 lg:px-12 px-2 lg:flex-row flex-col container mx-auto">
      <div className="product rounded-md p-5 w-full lg:w-2/3 border">
        <h2 className="mb-4">Sizning savatingiz: {cart.length} ta mahsulot</h2>
        {cart.length === 0 ? (
          <div className="flex flex-col text-center items-center justify-center gap-2 mb-10">
            <img
              className="w-64"
              src="/emptyCart.png"
              alt="Savat bo'sh"
            />
            <h1 className="text-2xl font-semibold">
              Savatda hozircha mahsulot yoʻq
            </h1>
            <p>
              Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni
              qidiruv orqali toping
            </p>
            <Link to={"/"}>
              <button className="bg-blue-500 mb-1 px-4 py-2 mt-2 text-white rounded">
                Bosh sahifa
              </button>
            </Link>
          </div>
        ) : (
          cart.map((item) => {
            // Agar item yoki uning characteristicsList yo'q bo'lsa, xatolikni oldini olamiz
            if (!item || !item.characteristicsList || item.characteristicsList.length === 0) {
              console.warn("Mahsulot ma'lumotlari to'liq emas:", item);
              return <div key={item.id}>Mahsulot ma'lumotlari yo'q</div>;
            }
            return (
              <div
                key={item.id}
                className={`rounded-md shadow-md py-2 px-4 my-4 flex items-center justify-between`}
              >
                <div className="flex items-center justify-between gap-x-5">
                  <img
                    className="w-24 h-24 object-cover"
                    src={item.image}
                    alt={item.characteristicsList[0]?.nameUz || 'Mahsulot'}
                  />
                  <div>
                    <h2>{item.characteristicsList[0]?.nameUz || 'Mahsulot nomi yo\'q'}</h2>
                    <p>${item.priceUsd}</p>
                  </div>
                </div>
                <div className="see md:flex-row flex-col flex items-center justify-between gap-x-4">
                  <button
                    onClick={() => handleDecrement(item)}
                    className="bg-blue-500 mb-1 px-4 py-2 w-full mt-2 text-white rounded"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => handleIncrement(item)}
                    className="bg-blue-500 mb-1 px-4 py-2 w-full mt-2 text-white rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 text-white px-3 py-3 rounded-md"
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="total w-full lg:w-1/3">
        <div className=" p-5 rounded-md h-full border">
          <div className="flex items-start justify-between">
            <h2 className="text-2xl font-semibold">Jami:</h2>
            <p className="text-2xl font-semibold">
              ${calculateTotalPrice()}
            </p>
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <form className="flex flex-col gap-y-4" action="#">
              <div className="flex px-2 items-center border rounded-md outline-none shadow-md">
                <FaUserCircle className="text-2xl text-blue-600" />
                <input
                  placeholder="Ismingiz"
                  className="px-4 py-3 w-full h-full rounded-md outline-none"
                  name="UserName"
                  type="text"
                />
              </div>
              <div className="flex px-2 items-center border rounded-md outline-none shadow-md">
                <FaPhone className="text-2xl text-blue-600" />
                <input
                  placeholder="+998 90 111 22 33"
                  className="px-4 py-3 w-full h-full rounded-md outline-none"
                  name="PhoneNumber"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </div>
            </form>
            <button className="bg-blue-500 mb-1 px-4 py-2 w-full mt-2 text-white rounded">
              Buyurtma qilish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

