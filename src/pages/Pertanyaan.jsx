// eslint-disable-next-line no-unused-vars
import React from "react";
import { pertanyaanData } from "../utils/static";
import DocumentTitle from "../DocumentTitle";

const Pertanyaan = () => {
  DocumentTitle("Pertanyaan")
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Pertanyaan Umum</h2>

        <div className="space-y-5 lg:w-[80%] mt-14">
          {pertanyaanData.map((item,id) => (
            <div key={id}>
              <p className="font-semibold text-lg mb-7 text-green-500">{item.title}</p>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pertanyaan;
