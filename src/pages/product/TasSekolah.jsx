// eslint-disable-next-line no-unused-vars
import React from "react";
import { tasSekolahData } from "../../utils/static";
import DocumentTitle from "../../DocumentTitle";

const TasSekolah = () => {
  DocumentTitle("Tas Sekolah")
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Produk Portfolio</h2>

        <p className="font-medium text-green-500 mt-8 mb-5 text-xl">Tas Sekolah / Laptop & iPad</p>

        <div className="space-y-3 lg:w-[70%]">
          <p>
            Tas sekolah murapakan lini produk kami yang merupakan produk yang
            tiada habisnya. Setiap ajaran tahun, murid-murid dari SD sampai
            mahasiswa semua berburu tas sekolah baru.
          </p>
          <p>
            Dengan merk &rdquo;Polo Banker&rdquo; kami menawarkan produk tas
            sekolah dengan model yang cocok untuk semua kalangan dengan harga
            yang sangat terjangkau.
          </p>
          <p>
            Selain tas sekolah, kami juga memiliki produk tas untuk menyimpan
            gadget. Dengan perkembangan jaman dan teknologi, pemilik gadget
            seperti &rsquo;ipad&rsquo; atau &rsquo;tab&rsquo; semakin banyak.
            Dengan seiring populernya kebutuhan gadet tersebut, tentunya
            kebutuhan tas pembawa gadget juga semakin populer. Maka dari itu
            kami juga menyediakan tas gadget untuk memenuhi kebutuhan konsumen
            secara spesifik.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 !mt-10 gap-4">
            {tasSekolahData.map((item, id) => (
              <div key={id}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TasSekolah;
