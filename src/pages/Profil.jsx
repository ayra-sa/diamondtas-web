// eslint-disable-next-line no-unused-vars
import React from "react";
import DocumentTitle from "../DocumentTitle";

const Profil = () => {
  DocumentTitle("Profil")
  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="section-title">PROFIL PERUSAHAAN</h2>
            <div className="space-y-3 mt-8">
              <p>
                DIAMOND Tas - Jakarta merupakn grosir tas yang berada di Jakarta
                Barat. Kami telah berdiri selama lebih dari 10 tahun dan
                tepatnya pada tanggal 19 Maret 2006. Kami merupakan anak
                perusahaan dari Perusahaan Tas DIAMOND yang telah berdiri sejak
                1978 dan berpusat di Bandung. Selain di Jakarta, perusahaan tas
                DIAMOND Bandung juga memiliki beberapa cabang lainnya seperti di
                Pasar Baru Trade Center Bandung dan juga Dalem Kaum Bandung.
              </p>
              <p>
                Moto perusahaan kami adalah &rsquo;Terdepan di Bidangnya&rsquo;.
                Moto tersebut telah berhasil kami capai berkat pengalaman kami
                yang mapan di bidangnya. Hasil pencapaian tersebut dapat
                dibuktikan dari jaringan langganan kami yang luas. Langganan
                kami tersebar dari kota yang berada di pulau Jawa sampai ke kota
                yang berada di luar pulau seperti Sumatra (Aceh, Medan, Bukit
                Tinggi, Padang, Pekan Baru, Pelembang), Kalimantan (Pontianak,
                Samarinda, Banjarmasin), Sulawesi (Palu, Makasar, Menado), Bali
                (Denpasar) maupun Papua (Jayapura, Sorong)
              </p>
            </div>
          </div>

          <div className="flex-1">
            <img src="/images/profil-perusahaan.avif" alt="profil img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profil;
