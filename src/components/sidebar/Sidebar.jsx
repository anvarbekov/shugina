import { useTranslation } from "react-i18next";
import { FaCubes } from "react-icons/fa";

export default function Sidebar() {
    const {t} = useTranslation("global")
  return (
    <div className="border rounded flex flex-col justify-between px-4 py-2 sidebar">
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>{t("sidebar.smartphones")}</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Noutbuklar va kompyuterlar</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Elektr asboblari</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>O'lchov asboblari</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Maishiy texnika</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Televizor va multimedia</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Tibbiy asbob-uskunalar</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Uskunalar</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Avtomobil mahsulotlari</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Uy va kottej</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Go'zallik va so'glik</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Bolalar tovarlari</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Kitoblar</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Kantselyariya tovarlari</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Qurilish va ta'mirlash</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Sport va dam olish</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Xizmatlar</span>
            </a>
            <a href="#" className="flex hover:text-red-600 items-center gap-x-3 text-base">
                <span><FaCubes className="text-red-600" /></span>
                <span>Brendlar</span>
            </a>
    </div>
  )
}
