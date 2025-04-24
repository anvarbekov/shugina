import { Outlet } from "react-router-dom";
import { Socials } from "../components/socials/Socials";
import Navbar from "../components/navbar/Navbar";
import BreadCrumbs from "../components/breadcrumbs/BreadCrumbs";

export default function RootLayout() {
  return (
    <>
      <header className="navbar">
        <Navbar />
        <div className="container mx-auto lg:px-12 px-2 mt-2">
        <BreadCrumbs />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border">
        <div className="container mx-auto lg:p-12 text-center lg:text-start p-4 gap-x-4 flex items-start justify-between flex-wrap">
          <div className="about">
            <h3 className="text-center text-2xl text-slate-800 font-semibold">
              Biz haqimizda
            </h3>
            <ul>
              <li>
                <a href="#">Shahrihon, Andijon 10001.</a>
              </li>
              <li>
                <a href="#">+998 95 899-10-10</a>
              </li>
              <li>
                <a href="#">shugina.info@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3 className="text-center text-2xl text-slate-800 font-semibold">
              Contact
            </h3>
            <ul>
              <li>
                <a href="#">Link - 1</a>
              </li>
              <li>
                <a href="#">Link - 2</a>
              </li>
              <li>
                <a href="#">Link - 3</a>
              </li>
              <li>
                <a href="#">Link - 4</a>
              </li>
            </ul>
          </div>
          <div className="catalog">
            <h3 className="text-center text-2xl text-slate-800 font-semibold">
              Catalog
            </h3>
            <ul>
              <li>
                <a href="#">Link - 1</a>
              </li>
              <li>
                <a href="#">Link - 2</a>
              </li>
              <li>
                <a href="#">Link - 3</a>
              </li>
              <li>
                <a href="#">Link - 4</a>
              </li>
            </ul>
          </div>
          <div className="social text-center">
            <h3 className="text-2xl text-slate-800 font-semibold">Social</h3>
            <p>Bizni ijtimoiy tarmoqlarda kuzating</p>
            <div className="mt-14">
              <Socials />
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center py-5">
          © 2025 Shugina Uskunalar. Xizmatlar litsenziyalangan.
        </p>
      </footer>
    </>
  );
}
