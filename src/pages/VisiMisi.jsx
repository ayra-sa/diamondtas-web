// eslint-disable-next-line no-unused-vars
import React from "react";
import DocumentTitle from "../DocumentTitle";

const VisiMisi = () => {
  DocumentTitle("Visi & Misi")
  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="section-title">VISI DAN MISI PERUSAHAAN</h2>

            <div className="space-y-3 mt-8">
              <div>
                <p>VISI :</p>
                <p>
                  Kami sebagai pemasok dan juga produsen mempunyai komitmen
                  untuk membina kepercayaan dan juga hubungan baik dengan para
                  pelanggan yang kita anggap sebagai mitra bisnis antar sesama
                  penjual. Kami berkomitmen penuh untuk membangun kerja sama dan
                  saling membantu untuk kemajuan semua pihak.{" "}
                </p>
              </div>
              <div>
                <p>MISI:</p>
                <p>
                  Untuk membina hubungan baik dengan para pelanggan, kami akan
                  memberi perhatian terhadap perkembangan usaha pelanggan kami
                  dan bersedia untuk membantu untuk kepentingan usaha bersama.
                </p>
              </div>
              <p>
                Untuk kemajuan bersama, kami tidak akan lepas dari memyediakan
                prduk yang menjual dan juga trendi seusai dengan permintaan
                pelanggan. Salah satu faktor yang akan kami perhatikan adalah
                harga yang wajar dan kompetitif yang kita berikan terhadap
                pelanggan. Kualitas barang juga tidak kalah pentingnya untuk
                menghindari perasaan kecewa pelanggan terhadap kami yang bisa
                merusak kepercayaan pelanggan terhadap produk kami.{" "}
              </p>
            </div>
          </div>

          <div className="flex-1">
            <img src="/images/visi-misi.avif" alt="visi misi img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
