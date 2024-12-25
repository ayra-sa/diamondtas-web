/* eslint-disable no-unused-vars */
import React from "react";
import DocumentTitle from "../DocumentTitle";

const Home = () => {
  DocumentTitle("Halaman Utama")
  return (
    <section>
      <div className="container">
        <div className="flex lg:items-center flex-col lg:flex-row gap-10">
          <div className="space-y-5">
            <div className="relative">
              <img src="/images/home.avif" alt="home img" />
              <div className="bg-red-300 w-[130px] h-[130px] uppercase p-5 rounded-full text-white text-center font-bold text-2xl ml-auto lg:absolute lg:-bottom-12 lg:-right-12">
                <p>Fashion</p>
                <p>&</p>
                <p>Style</p>
              </div>
            </div>
          </div>

          <div className="">
            <h2 className="text-green-600 text-3xl text-center font-bold font-pacifico">
              Fashion is my Passion
            </h2>
            <h2 className="text-green-600 text-3xl text-center font-bold font-pacifico">
              Fashion is Evereything
            </h2>

            <div className="flex items-center flex-col lg:flex-row mt-6">
              <img src="/images/tas-home1.avif" alt="img tas" />
              <img src="/images/tas-home2.avif" alt="img tas" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
