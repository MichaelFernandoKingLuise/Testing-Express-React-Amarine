import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";

function panduan2() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content wrapper-main-content-panduan-artikel-isi">
        <header
          className="judul-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          Rantai Distribusi Perikanan
        </header>
        <div
          className="sumber-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          Sumber: Amarine Group
        </div>
        <div
          className="gambar-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <img src="assets/artikel 1.png" alt="" />
        </div>
        <p
          className="deskripsi-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          Inovasi dalam penangkapan ikan yang berkelanjutan menjadi kunci untuk
          melindungi ekosistem laut dan menjamin ketersediaan sumber daya ikan
          di masa depan. Dengan menggunakan teknologi modern seperti smart
          fishing gear dan sistem pelacakan berbasis satelit, nelayan dapat
          menangkap ikan dengan lebih selektif. Hal ini membantu mengurangi
          tangkapan sampingan yang tidak diinginkan dan meminimalkan kerusakan
          habitat laut, sehingga keseimbangan ekosistem tetap terjaga.
        </p>
        <p
          className="deskripsi-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          Metode penangkapan berbasis sensor menjadi solusi canggih lainnya yang
          memungkinkan pendeteksian keberadaan ikan sesuai dengan jenis dan
          ukurannya. Teknologi ini membantu mencegah penangkapan ikan yang masih
          kecil atau spesies yang sedang terancam. Dengan begitu, populasi ikan
          yang lebih rentan dapat terus berkembang biak, menjaga keberlanjutan
          populasi di perairan.
        </p>
        <p
          className="deskripsi-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          Selain itu, penggunaan alat tangkap yang ramah lingkungan, seperti
          jaring yang dapat terurai secara alami dan perangkat penangkap ikan
          selektif, memainkan peran penting dalam mengurangi dampak negatif
          terhadap biota laut. Alat-alat ini dirancang untuk memastikan bahwa
          hanya ikan target yang tertangkap, sementara spesies lain dapat tetap
          hidup dan bebas di lautan, mendukung kelestarian ekosistem yang lebih
          luas.
        </p>
        <p
          className="deskripsi-panduan-artikel"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          Inovasi dalam akuakultur juga menjadi alternatif yang menjanjikan
          untuk memenuhi permintaan pasar tanpa mengeksploitasi lautan secara
          berlebihan. Dengan memadukan teknologi modern dan praktik
          berkelanjutan, sektor perikanan dapat terus berkembang tanpa
          mengorbankan keseimbangan ekosistem laut. Hal ini tidak hanya
          memastikan kelangsungan pasokan pangan laut bagi generasi sekarang,
          tetapi juga bagi generasi mendatang.
        </p>
      </div>
      {/* Main Content End */}

      {/* Footer */}
      <Footer />
      {/* Footer End */}

      {/* Navbar Mobile */}
      <NavbarMobile />
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default panduan2;
