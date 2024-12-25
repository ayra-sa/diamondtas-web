/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const ImageShow = ({ data, roundedFull = false }) => {
  const start = 0;
  const [end, setEnd] = useState(12);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [fade, setFade] = useState(false); // State to trigger fade effect

  const showNext = () => {
    setFade(true); // Trigger fade before changing the image
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      setFade(false); // Reset fade after the image has changed
    }, 300); // Match the timeout with your transition duration
  };

  const showPrevious = () => {
    setFade(true); // Trigger fade before changing the image
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1
      );
      setFade(false); // Reset fade after the image has changed
    }, 300); // Match the timeout with your transition duration
  };

  const closeDetail = () => {
    setCurrentIndex(null);
  };

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Restore scroll
    }
  }, [currentIndex]);
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
        {data.slice(start, end).map((item, id) => (
          <div
            key={id}
            className={`${roundedFull ? "rounded-full xl:w-[120px] xl:h-[120px] mx-auto" : "rounded-[4rem] h-[210px]"} overflow-hidden relative before:content-['*'] before:absolute before:inset-0 before:bg-white before:bg-opacity-55 before:hidden before:transition-all before:duration-200 before:hover:block cursor-pointer`}
            onClick={() => setCurrentIndex(id)}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <p
        className={`text-center mt-5 text-base underline font-semibold cursor-pointer ${
          end > data.length ? "hidden" : "block"
        }`}
        onClick={() => {
          setEnd((prev) => prev * 2);
        }}
      >
        Tampilkan Selebihnya
      </p>

      {currentIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10">
          <div className="relative w-full h-full flex place-content-center justify-center items-center">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeDetail}
            >
              ✖
            </button>
            <img
              src={data[currentIndex].img_detail}
              alt={data[currentIndex].title}
              className={`max-w-[90vw] max-h-[80vh] rounded-lg transition-opacity duration-300 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            />
            <div className="absolute left-5 top-1/2">
              <button className="" onClick={showPrevious}>
                <img src="/icons/left-arrow.svg" alt="icon" />
              </button>
            </div>
            <div className="absolute right-5 top-1/2">
              <button className="" onClick={showNext}>
                <img src="/icons/right-arrow.svg" alt="icon" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageShow;
