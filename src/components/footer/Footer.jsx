import React from "react";
import { Socials } from "../socials/Socials";

export default function Footer() {
  return (
    // footer styles  => absolute left-0 bottom-0 right-0
    <footer className="border">
      <div className="container mx-auto p-12 flex items-start justify-between">
        <div className="about">
          <h3 className="text-center text-2xl text-slate-800 font-semibold">
            Biz haqimizda
          </h3>
          <ul>
            <li>
              <a href="#">Yunusobod, Toshkent 10001.</a>
            </li>
            <li>
              <a href="#">+998 95 899-10-10</a>
            </li>
            <li>
              <a href="#">premieruskuna.info@gmail.com</a>
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
        © 2023-2024 Premier Uskunalar. Xizmatlar litsenziyalangan.
      </p>
    </footer>
  );
}
