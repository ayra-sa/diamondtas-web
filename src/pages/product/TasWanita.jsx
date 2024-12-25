import * as React from "react";
import { tasWanitaData } from "../../utils/static";
import ImageShow from "../../components/ImageShow";
import DocumentTitle from "../../DocumentTitle";

const TasWanita = () => {
  DocumentTitle("Tas Wanita")
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Produk Portfolio</h2>

        <p className="font-medium text-green-500 mt-8 mb-5 text-xl">
          Tas Wanita
        </p>

        <div className="flex flex-col-reverse lg:flex-row gap-x-10 pb-10">
          <div className="lg:w-[70%]">
            <div className="space-y-3">
              <p>
                Pengalaman kami sebagai penyedia tas wanita telah mendapat
                banyak pujian dari banyak pihak karena selain kami sangat aktif
                dalam mengikuti perkembangan mode, kami juga sangat mengerti
                akan selera wanita di berbagai kalangan.
              </p>
              <p>
                Kami menyediakan berbagai jenis tas seperti hand bag (tas
                tangan), clutch bag (tas kepit), casual bag pack (ransel
                kasual), sling bag (tas selempang), casual wallet (dompet
                kasual) dan juga lainnya.
              </p>
              <p>
                Berbagai merk tas telah kami pasok. Merk umum seperti Junfa,
                Fefecao, Ruipeng, Leishi ataupun Manteli. Selain merk tersebut,
                kami juga memiliki hak merk ekslusif yang telah kami daftarkan
                dengan nama &quot;CELLINI&quot;.
              </p>
              <p>
                Untuk pangsa sasarkan produk kami mencakup banyak kalangan dan
                usia dengan rentang harga yang bervaratif. Jenis barang yang
                kita pasok beragam dan setiap jenis produknya memiliki pasang
                sasaran untuk masing masing kalangan dan usia baik untuk yang
                modern, konservatif ataupun anak muda dan ibu-ibu. Mereka dapat
                menggunakan sesuai dengan aktifitas mereka seperti kerja atau
                sehari hari maupun kuliah.
              </p>
              <p>
                Jenis tas yang kami hadirkan terbuat dari bermacam macam bahan
                yang berkualitas tinggi seperti saten, kanvas, kulit asli, kulit
                imitasi, kain ataupun jeans. Faktor ketahanan dan kualitas
                produk juga tidak luput dari perhatian kami karena sangat
                penting untuk kami memilih bahan yang akan kami pasarkan karena
                kami tidak ingin pemakai kecewa oleh barang yang mudah rusak.
              </p>
            </div>

            <ImageShow data={tasWanitaData} />
          </div>

          <div className="lg:w-[30%] text-center mb-8 lg:mb-0">
            <div className={`shadow-lg border-[10px] border-white rounded-[50%] overflow-hidden w-[190px] h-[140px] mx-auto ${animate ? "animate__animated animate__flipInY" : ""}`}>
              <img
                src="/images/cellini.jpg"
                alt="cellini"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="font-extrabold text-4xl my-3">CELLINI</h2>
            <p className="text-[#8B0000] text-xl font-pacifico">
              Fashion is My Passion
            </p>
            <div className="mx-auto w-fit mt-5 relative after:content-['*'] after:block after:absolute after:w-full after:h-full after:top-0 after:ml-2 after:bg-opacity-20 after:-z-10 after:mt-2 after:bg-black">
              <img
                src="/images/tas-wanita-img.jpg"
                alt="tas wanita"
                className="w-[170px] h-[225px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TasWanita;
