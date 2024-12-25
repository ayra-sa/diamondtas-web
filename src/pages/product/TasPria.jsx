// eslint-disable-next-line no-unused-vars
import React from "react";
import { tasPriaData } from "../../utils/static";
import DocumentTitle from "../../DocumentTitle";

const TasPria = () => {
  DocumentTitle("Tas Pria")
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Produk Portfolio</h2>

        <p className="font-medium text-green-500 mt-8 mb-5 text-xl">Tas Pria</p>

        <div className="space-y-3 lg:w-[70%]">
          <p>
            Tanpa banyak orang sadari, hampir semua pria masa kini membawa tas
            dalam kegiatan sehari harinya. Barang bawaan yang kian bertambah di
            jaman ini membuat pria untuk membawa tas untuk memudahkan membawa
            barang mereka.
          </p>
          <p>
            Untuk memenuhi kebutuhan tersebut, kami juga memasok tas pria
            seperti tas selempang dengan berbagai jenis bahan. Disamping tas
            pria berbahan kanvas yang memberi kesan &rsquo;tough&rsquo; atau kekar dan tahan
            banting, kami juga mengandalkan tas pria berbahan kulit asli. Selain
            terkenal tahan lama, produk kulit juga sudah pasti dapat
            meningkatkan gengsi seorang pemakainya.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 !mt-10 gap-4">
            {tasPriaData.map((item, id) => (
              <div key={id}>
                <img src={item.img} alt={item.title} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TasPria;
