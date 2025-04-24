import { FaBarsProgress } from "react-icons/fa6";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { FaHandshakeSimple } from "react-icons/fa6";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useCart } from "../../hooks/CartContext";
import { FaRegUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const { t, i18n } = useTranslation("global");

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="navbar">
      <div className="container m-auto">
        <div className="flex justify-between lg:px-12 px-2 py-2 items-center">
          <div className="nav__left flex items-center gap-x-4">
            <div className="nav__location flex items-center">
              <IoLocation className="mr-1 text-gray-400 text-sm" />
              <span className="mr-2 text-gray-400">{t("navbar.city")}</span>
              <a className="text-red-600 underline text-sm" href="#">
                Andijon
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-x-4">
              <a className="text-gray-400 text-sm" href="#">
                {t("navbar.contacts")}
              </a>
              <Link to={"/products"} className="text-gray-400 text-sm">
                {t("navbar.products")}
              </Link>
            </div>
          </div>
          <div className="nav__right flex items-center gap-x-4">
            <a className="flex items-center" href="#">
              <BsFillTelephoneFill className="mr-2 text-blue-300" />
              <b>+998-98 000-00-00</b>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between container m-auto lg:px-12 px-2 py-5">
        <div className="flex items-center gap-x-4">
          <Link to={"/"}>
            <img
              className="w-20 max-w-20"
              src="https://shugina.uz/wp-content/uploads/2023/02/favicon-free-img111-edited.png"
              alt="This is icon"
            />
          </Link>
          <Link
            to={"/categories"}
            className="catalog flex gap-x-2 items-center border p-2 px-4 cursor-pointer rounded-md"
          >
            <FaBarsProgress className="text-2xl text-red-600" />
            <span className="font-bold hidden lg:inline text-red-600">
              {t("navbar.catalog")}
            </span>
          </Link>
        </div>
        <div className="search__box xl:flex hidden items-center">
          <form className="text-xl flex border overflow-hidden rounded-md search__input">
            <div className="input__box w-11/12">
              <label htmlFor="search"></label>
              <input
                className="w-full h-full outline-none p-2"
                type="text"
                placeholder={t("navbar.searchPlaceholder")}
                id="search"
              />
            </div>
            <button className="bg-slate-300 text-blue-950 w-16 flex items-center justify-center">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="right__menu flex items-center gap-x-4">
          <Link className="relative" to={"/cart"}>
            <FaShoppingCart className="text-2xl cursor-pointer text-slate-500" />
            {cartCount > 0 && (
              <div className="w-5 h-5 p-2 bg-red-700 absolute bottom-3 left-4 text-white flex items-center justify-center rounded-full">
                <p className="text-sm">{cartCount}</p>
              </div>
            )}
          </Link>
          <div className="language">
            <form className="text-slate-400" action="#">
              <select
                onChange={(e) => changeLang(e.target.value)}
                defaultValue={i18n.language}
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
              </select>
            </form>
          </div>
          <button className="px-8 py-2 bg-red-600 rounded-md lg:block hidden text-white text-bold">
            {t("navbar.login")}
          </button>
          <div className="lg:hidden block font-semibold text-2xl text-red-600">
            <FaRegUserCircle />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
