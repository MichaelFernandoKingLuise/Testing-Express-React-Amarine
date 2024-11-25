import React, { useState } from "react";

import * as script from "../script";
import HeaderLogin from "../components/HeaderLogin";
import FooterLogin from "../components/FooterLogin";

function Daftar() {
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [noTelepon, setNoTelepon] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const akunData = {
      email,
      nama,
      noTelepon,
      password,
    };

    try {
      // 1. Kirim data ke tabel akun
      const akunResponse = await fetch("http://localhost:3000/akun", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(akunData),
      });

      // Periksa apakah respons berhasil
      if (!akunResponse.ok) {
        const errorText = await akunResponse.text(); // Ambil respons sebagai teks
        console.error("Error saat membuat akun:", errorText);
        alert("Terjadi kesalahan saat membuat akun: " + errorText);
        return; // Hentikan eksekusi jika ada kesalahan
      }

      // Coba untuk mengurai JSON
      const akunResult = await akunResponse.json(); // Ambil respons dari server
      const akunId = akunResult.insertId; // Ambil ID akun yang baru dibuat

      // 2. Data untuk tabel nelayan
      const nelayanData = {
        id_akun: akunId,
        nama,
        noTelepon,
      };

      // Kirim data ke tabel nelayan
      const nelayanResponse = await fetch("http://localhost:3000/nelayan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nelayanData),
      });

      if (!nelayanResponse.ok) {
        const nelayanErrorText = await nelayanResponse.text();
        console.error("Error saat membuat nelayan:", nelayanErrorText);
        alert("Terjadi kesalahan saat membuat nelayan: " + nelayanErrorText);
        return; // Hentikan eksekusi jika ada kesalahan
      }

      console.log("Nelayan berhasil dibuat:", await nelayanResponse.json());
      // Jika berhasil, tampilkan popup berhasil
      script.tampilkanPopupBerhasilLogin(event);
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat mengirim data.");
    }
};
  
  return (
    <div>
      {/* Header */}
      <HeaderLogin />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content">
        <div className="wrapper-main-content-login">
          <section className="section-gambar-login">
            <img src="assets/image-daftar.png" alt="" />
          </section>
          <section className="section-login">
            <header>Daftar</header>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Masukkan email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <input
                type="text"
                placeholder="Masukkan no telepon"
                required
                value={noTelepon}
                onChange={(e) => setNoTelepon(e.target.value)}
              />
              <div className="password-input">
              <input
                  type="password"
                  placeholder="Buat kata sandi"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src="assets/open-eye.svg"
                  alt=""
                  id="open-eye-password"
                  className="open-eye d-none"
                  onClick={() => script.togglePassword("password")}
                />
                <img
                  src="assets/close-eye.svg"
                  alt=""
                  id="close-eye-password"
                  className="close-eye"
                  onClick={() => script.togglePassword("password")}
                />
              </div>
              <div className="ingat-lupa-kata-sandi">
                <input
                  type="button"
                  value=""
                  name="s&k"
                  id="ingat-btn"
                  onClick={() => script.toggleIngat()}
                />
                <label for="s&k">
                  Saya menerima syarat dan ketentuan yang berlaku
                </label>
              </div>
              <input type="submit" value="Buat Akun" />
            </form>
            <div className="divider">atau</div>
            <div className="media-sosial-login">
              <a href="daftar">
                <img src="assets/facebook.svg" alt="Facebook" />
              </a>
              <a href="daftar">
                <img src="assets/apple.svg" alt="Apple" />
              </a>
              <a href="daftar">
                <img src="assets/google.svg" alt="Google" />
              </a>
            </div>
            <div className="sudah-memiliki-akun">
              <span>Sudah memiliki akun?</span> <a href="login">Masuk</a>
            </div>
          </section>
        </div>
      </div>
      {/* Main Content End */}

      {/* Popup */}
      <div id="popup-berhasil-simpan" className="popup-hidden-hapus">
        <div className="popup-box">
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-icon">
            <img src="assets/accept.svg" alt="Berhasil" />
          </div>
          <p className="popup-message">Berhasil!</p>
          <p className="popup-message popup-message-child popup-message-berhasil-daftar">
            Buat akun berhasil, kamu akan diarahkan ke layar masuk sekarang
          </p>
        </div>
      </div>
      {/* Popup End */}

      {/* Footer */}
      <FooterLogin />
      {/* Footer End */}
    </div>
  );
}

export default Daftar;
