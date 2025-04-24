import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Category() {
  const { t, i18n } = useTranslation("global");
  const { id } = useParams(); // URL'dan kategoriya ID sini olish
  const [url, setUrl] = useState(`${api}api/category/get-all?PageSize=60&ParentId=${id}`);
  const { data, loading, error } = useFetch(url); // Errorni ham qo'shdim

  // Tilga qarab kategoriya nomini olish
  const getCategoryName = (category) => {
    if (!category) return "";
    switch (i18n.language) {
      case "uz":
        return category.nameUz || category.name;
      case "ru":
        return category.nameRu || category.name;
      case "en":
        return category.nameEn || category.name;
      default:
        return category.name;
    }
  };

  // To'liq rasm url sini olish
  const getFullImageUrl = (imagePath) => {
    return imagePath ? `${api}${imagePath}` : "http://167.71.3.65:4050/media/Images/Category/IMG_3181913e-e9a4-4529-af37-842c66613fca.jpg"; // Agar rasm yo'q bo'lsa, default rasm
  };

  // ID o'zgarganda API url yangilash
  useEffect(() => {
    setUrl(`${api}api/category/get-all?PageSize=60&ParentId=${id}`);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48 bg-gray-300 rounded dark:bg-gray-300 animate-pulse">
        <svg
          className="w-12 h-12 text-gray-200 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    );
  }

  if (error) {
    return <div>{t('error.loadingFailed')}</div>; // Tilga qarab xatolik xabarini ko'rsatish
  }

  if (!data || !data.items || data.items.length === 0) {
    return <div>{t('category.noItems')}</div>; // Kategoriya ichida elementlar yo'q bo'lsa
  }


  return (
    <div className="container mx-auto lg:px-12 px-2 flex items-stretch max-sm:mt-[20px] sm:mb-[50px] max-lg:flex-col">
      <div className="lg:w-3/4 w-full">
        {/* Items ni ekranga chiqarish */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.items.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow">
              <img
                className="w-full h-48 object-cover"
                src={getFullImageUrl(`/media/I${item.image.slice(7)}`)}
                alt={getCategoryName(item)}
              />
              <h3 className="mt-4 text-lg font-semibold">
                {getCategoryName(item)}
              </h3>
              <p className="mt-2 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

