/* eslint-disable no-unused-vars */
import * as React from "react";
import { tasPestaData } from "../../utils/static";
import ImageShow from "../../components/ImageShow";
import DocumentTitle from "../../DocumentTitle";

const TasPesta = () => {
  DocumentTitle("Tas Pesta")
  return (
    <section>
      <div className="container">
        <h2 className="section-title">PRODUK PORTFOLIO</h2>

        <p className="font-medium text-green-500 mt-8 mb-5 text-xl">
          Tas Pesta
        </p>

        <div className="flex flex-col-reverse lg:flex-row gap-x-10 pb-10">
          <div className="lg:w-[70%]">
            <div className="space-y-3">
              <p>
                Perusahaan Tas DIAMOND - Bandung telah memiliki sejarah panjang
                sebagai produsen tas pesta dan juga pemasok tas pesta. Kami
                telah memproduksi tas pesta sejak perusahaan berdiri. Dengan
                perpaduan bahan impor dan lokal, kami memproduksi tas pesta
                dengan cara &rsquo;home-made industry&rsquo;. Pemilihan warna
                yang bervariasi untuk memberikan kesan ceria bagi pemakainya dan
                juga pemilihan bahan yang sangat elegan yang disesuaikan dengan
                kebutuhan pesta masa kini. Tidak luput dari pengerjaannya, kami
                sebagai produsen yang bertanggung jawab, kami sangat menjaga
                kualitas.
              </p>
              <p>
                Untuk produk tas pesta, kami memiliki produk dengan merk dagang
                yang terdaftar dengan nama &rdquo;FARNELL&rdquo; dan juga
                &rdquo;CELLINI&rdquo; Untuk apresiasi kami dalam kepercayaan
                pembeli terhadap merk tersebut, kami berani memberi jaminan
                kualitas produk.
              </p>
            </div>

            <ImageShow data={tasPestaData} roundedFull={true} />
          </div>

          <div className="lg:w-[30%] text-center mb-10 lg:mb-0">
            <div className="mx-auto w-fit mt-5 relative after:content-['*'] after:block after:absolute after:w-full after:h-full after:top-0 after:ml-2 after:bg-opacity-20 after:-z-10 after:mt-2 after:bg-black">
              <img
                src="/images/tas-pesta-img.jpg"
                alt="tas wanita"
                className="w-[170px] h-[225px]"
              />
            </div>
            <h2 className="font-extrabold text-4xl mt-3">FARNELL</h2>
            <h2 className="font-extrabold text-4xl ">&</h2>
            <h2 className="font-extrabold text-4xl mb-3">CELLINI</h2>
            <p className="text-[#8B0000] font-bold text-xl font-pacifico">
              There is no party without colors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TasPesta;
