import React, { useState } from "react";
import products from "./productData";

const categoryList = [
  "Unisex",
  "Mens",
  "Womens",
  "Hat",
  "Matte",
  "NoteBook",
  "Stickers",
];

const ProductHero = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    );
  };

  const applyFilter = () => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((p) =>
          selectedCategories.includes(p.category)
        )
      );
    }
    setShowCategories(false);
  };

  return (
    <div className="bg-[#FFFCDD] min-h-screen px-3 sm:px-6 lg:px-10 py-6">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-playfair underline text-[#1F2A2E]">
          Available Product
        </h2>

        <button
          onClick={() => setShowCategories(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#8B8B8C99] bg-white shadow-sm hover:shadow-md transition"
        >
          <span className="text-sm sm:text-base">Categories</span>

          <div className="space-y-[3px]">
            <span className="block w-4 h-[2px] bg-gray-500" />
            <span className="block w-4 h-[2px] bg-gray-500" />
            <span className="block w-4 h-[2px] bg-gray-500" />
          </div>
        </button>

      </div>

      {/* ================= PRODUCT GRID ================= */}

      <div className="
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-3
        xl:grid-cols-4
        gap-4 sm:gap-6
      ">

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-transparent group"
          >

            {/* IMAGE CARD */}
            <div className="
              relative
              w-full
              h-[260px]
              sm:h-[300px]
              md:h-[340px]
              lg:h-[360px]
              bg-[#F5F5F5]
              rounded-3xl
              overflow-hidden
              flex items-center justify-center
            ">

              <img
                src={product.image}
                alt={product.name}
                className="
                  max-h-full
                  w-auto
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              {product.bestseller && (
                <span className="absolute top-3 left-3 bg-[#A259FF] text-white text-xs px-2 py-1 rounded-full shadow">
                  Bestseller
                </span>
              )}

            </div>

            {/* CONTENT */}
            <div className="flex flex-col flex-grow mt-3">

              {/* TITLE */}
              <h3 className="
                text-sm sm:text-base md:text-lg
                font-playfair
                min-h-[48px]
                leading-tight
              ">
                {product.name}
              </h3>

              {/* PRICE */}
              <p className="mt-1 font-semibold text-sm sm:text-base">
                ${product.price}
              </p>

              {/* BOTTOM ROW */}
              <div className="mt-auto flex items-center justify-between pt-3">

                <button className="
                  bg-[#FF6916]
                  text-white
                  px-3 sm:px-4
                  py-2
                  rounded-xl
                  text-xs sm:text-sm
                  hover:bg-[#e55b0f]
                  transition
                ">
                  Buy Now
                </button>

                <div className="flex items-center gap-1 text-xs sm:text-sm">
                  <span className="text-[#F9BC21] text-sm sm:text-base">
                    ★★★★★
                  </span>
                  <span className="text-[#7E6F67]">
                    ({product.reviews})
                  </span>
                </div>

              </div>
            </div>

          </div>
        ))}

      </div>

      {/* ================= CATEGORY OVERLAY ================= */}

      {showCategories && (
        <>
          {/* Background */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setShowCategories(false)}
          />

          {/* ================= MOBILE: BOTTOM SHEET ================= */}
          <div className="
            fixed bottom-0 left-0 right-0
            h-[75%]
            bg-white
            rounded-t-3xl
            z-50
            p-5
            overflow-y-auto
            sm:hidden
          ">

            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

            <h2 className="text-2xl font-playfair mb-6">
              Categories
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {categoryList.map((cat) => (
                <div
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`cursor-pointer rounded-xl p-3 border text-sm text-center
                    ${
                      selectedCategories.includes(cat)
                        ? "border-[#FF6916] bg-[#FFFBEB]"
                        : "border-gray-300 bg-[#FAFAFA]"
                    }
                  `}
                >
                  {cat}
                </div>
              ))}
            </div>

            <button
              onClick={applyFilter}
              className="mt-6 w-full bg-[#FF6916] text-white py-3 rounded-xl font-medium"
            >
              Apply Filters
            </button>

          </div>

          {/* ================= TABLET + DESKTOP: SIDE DRAWER ================= */}
          <div className="
            hidden sm:block
            fixed top-0 right-0 h-full
            w-[85%] md:w-[60%] lg:w-[45%]
            bg-white
            z-50
            p-8
            overflow-y-auto
            shadow-2xl
          ">

            <button
              onClick={() => setShowCategories(false)}
              className="absolute top-6 right-6 text-2xl"
            >
              ✕
            </button>

            <h2 className="text-3xl md:text-4xl font-playfair mb-8">
              Categories
            </h2>

            <div className="grid grid-cols-2 gap-6">

              {categoryList.map((cat) => (
                <div
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`cursor-pointer rounded-xl p-5 border text-center
                    ${
                      selectedCategories.includes(cat)
                        ? "border-[#FF6916] bg-[#FFFBEB]"
                        : "border-gray-300 bg-[#FAFAFA]"
                    }
                  `}
                >
                  <span className="font-bold">{cat}</span>
                </div>
              ))}

            </div>

            <button
              onClick={applyFilter}
              className="mt-12 w-full bg-[#FF6916] text-white py-4 rounded-2xl text-lg font-medium"
            >
              Apply Filters
            </button>

          </div>
        </>
      )}

    </div>
  );
};

export default ProductHero;