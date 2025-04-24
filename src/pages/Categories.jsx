import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Categories() {
  const { t, i18n } = useTranslation("global");
  const [url, setUrl] = useState(`${api}api/category/get-all?PageSize=60&ParentId=0`);
  const { data, loading } = useFetch(url);
  const [currentCategoryId, setCurrentCategoryId] = useState(0);
  const navigate = useNavigate();

  const getCategoryName = (category) => {
    switch (i18n.language) {
      case "uz":
        return category.nameUz;
      case "ru":
        return category.nameRu;
      case "en":
        return category.nameEn;
      default:
        return category.name;
    }
  };

  const getFullImageUrl = (imagePath) => {
    return `${api}${imagePath}`;
  };

  const handleCategoryClick = (category) => {
    setCurrentCategoryId(category.id);
    if (category.id !== 0) {
      setUrl(`${api}api/category/get-all?PageSize=60&ParentId=${category.id}`);
      navigate(`/categories/${category.id}`);
    } else {
      setUrl(`${api}api/category/get-all?PageSize=60&ParentId=0`);
      navigate("/categories");
    }
  };

  const getCurrentCategoryName = () => {
    if (currentCategoryId === 0) {
      return t("categories.all");
    }
    const currentCategory = data?.items.find((category) => category.id === currentCategoryId);
    return currentCategory ? getCategoryName(currentCategory) : t("categories.all");
  };

  return (
    <div className="container mx-auto lg:px-12 px-2 flex items-stretch max-sm:mt-[20px] sm:mb-[50px] max-lg:flex-col">
      <div className="lg:w-1/4 w-full flex flex-col items-start justify-between">
        <h2>{getCurrentCategoryName()}</h2>
        {loading
          ? Array(10).fill(0).map((_, index) => (
              <div key={index} className="w-full mt-4">
                <div className="h-7 bg-gray-300 rounded-md mr-4 dark:bg-gray-300 mb-4 mt-2 animate-pulse"></div>
              </div>
            ))
          : data &&
            data.items.map((category) => (
              <Link
                className="mt-4"
                key={category.id}
                onClick={() => handleCategoryClick(category)}
              >
                {getCategoryName(category)}
              </Link>
            ))}
      </div>
      <div className="lg:w-3/4">
        <h2>{getCurrentCategoryName()}</h2>
        <div className="grid mt-5 gap-4 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 max-sm:grid-cols-2 text-center">
          {loading
            ? Array(8).fill(0).map((_, index) => (
                <div key={index} className="hover:brightness-90">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="flex items-center justify-center h-48 bg-gray-300 rounded dark:bg-gray-300 animate-pulse">
                      <svg
                        className="w-12 h-12 text-gray-200 dark:text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mx-auto mb-4 mt-2 animate-pulse"></div>
                </div>
              ))
            : data &&
              data.items.map((category) => (
                <div key={category.id} className="hover:brightness-90">
                  <Link onClick={() => handleCategoryClick(category)}>
                    <div className="border rounded-lg overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={getFullImageUrl(`/media/I${category.image.slice(7)}`)}
                        alt={getCategoryName(category)}
                        title={getCategoryName(category)}
                      />
                    </div>
                    <h3>{getCategoryName(category)}</h3>
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
