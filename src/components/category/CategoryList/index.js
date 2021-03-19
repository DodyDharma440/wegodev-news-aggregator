import React, { useContext } from "react";
import { GlobalContext } from "context/globalContext";

const CategoryList = () => {
  const { categories } = useContext(GlobalContext);

  return (
    <div>
      <h2 className="text-2xl mb-2 font-bold">Categories</h2>
      <ul className="ml-3">
        {categories.map((category, index) => {
          return (
            <li className="mb-3" key={index}>
              <div className="flex items-center">
                <p className="bg-myPalette-purple p-2 rounded-full text-gray-300">
                  {category.icon}
                </p>
                <p className="font-bold ml-2">{category.label}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
