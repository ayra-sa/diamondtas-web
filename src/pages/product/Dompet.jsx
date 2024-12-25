// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { dompetData } from "../../utils/static";
import DocumentTitle from "../../DocumentTitle";

const Dompet = () => {
  DocumentTitle("Dompet")
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    // Mulai animasi setelah halaman dimuat
    setIsSpinning(true);

    // Hentikan animasi setelah 3 detik
    const timer = setTimeout(() => {
      setIsSpinning(false);
    }, 2000);

    return () => clearTimeout(timer); // Bersihkan timer saat komponen dilepas
  }, []);
  return (
    <section>
      <div className="container">
        <h2 className="section-title">PRODUK PORTFOLIO</h2>

        <p className="font-medium text-green-500 mt-8 mb-5 text-xl">
          Dompet
        </p>

        <div className="flex flex-col-reverse lg:flex-row gap-x-10 pb-10">
          <div className="lg:w-[70%]">
            <div className="space-y-3">
              <p>
                Dalam kehidupan sehari-hari, dompet merupakan barang yang sangat
                esensial yang tidak pernah terlupakan. Kualitas dari dompet itu
                sendiri adalah faktor yang paling penting karena bukanlah hal
                baru yang kita ketahui bahwa kebanyakan orang jarang mengganti
                dompetnya sebelum rusak.
              </p>

              <p>
                Selain digunakan untuk keperluan pribadi, dompet merupakan salah
                satu produk yang sangat &rsquo;presentable&rsquo; dan cocok
                untuk diberikan sebagai kado.
              </p>

              <p>
                Untuk memenuhi variasi kebutuhan pemakai dompet, kami telah
                menyediakan dompet untuk bermacam-macam kegunaannya seperti
                dompet untuk koin, dompet paspor, dompet giro, dompet penyimpan
                kartu dan lainnya.
              </p>

              <p>
                Checkers - Dari nama merk itu sendiri, hampir semua orang
                mengenal merk itu. Merk yang telah beredar di Indonesia sejak
                1985 dan telah terdaftar di dirgen HAKI tersebut telah digunakan
                untuk produk dompet kami. Sebagai pemegang merk ekslusif
                &rdquo;CHECKERS&rdquo;, dengan bangganya kami mempersembahkan
                produk dompet pria dan wanita kami yang sangat trendi dan tahan
                lama.
              </p>

              <p>
                Bagi pengguna yang lebih memilih elegan sebagai gaya hidupnya,
                kami juga memiliki dompet dengan merk &rdquo;TOMINY&rdquo; yang
                tentunya sangat terjangkau.
              </p>

              <p>
                &rsquo;Elegance is not always Expensive&rsquo; yang memiliki
                arti untuk tampil elegan tidaklah harus mahal.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {dompetData.map((item, id) => (
                <div key={id} className="rounded-md overflow-hidden">
                  <img src={item.img} alt={item.title} />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[30%] text-center mb-10 lg:mb-0 space-y-3">
            <img
              src="/images/checkers.png"
              alt="checkers"
              className={`w-[200px] h-[200px] mx-auto transition-transform ${
                isSpinning ? "animate-spin-pop" : ""
              }`}
            />
            <h2 className="font-extrabold text-4xl mt-3">CHECKERS</h2>
            <p className="text-[#8B0000] font-bold text-xl font-pacifico">
              The Symbol of Quality and Trendy
            </p>
            <img
              src="/images/checkers2.jpg"
              alt="checkers"
              className="w-[200px] h-[200px] mx-auto"
            />
            <h2 className="font-extrabold text-4xl ">TOMINY</h2>
            <p className="text-[#8B0000] font-bold text-xl font-pacifico">
              Elegant is not always expensive
            </p>
            <img
              src="/images/checkers3.jpg"
              alt="checkers"
              className="w-[200px] h-[300px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dompet;
