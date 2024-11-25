import React from "react";

import * as script from "../script";
import Header from "../components/Header";
import Footer from "../components/Footer";

function tambahhasiltangkapan() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content container-fluid">
        <div
          className="wrapper-main-content"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <div className="main-title">
            <p>Detail Hasil Tangkapan</p>
          </div>
          <div className="wrapper-detail-hasil-tangkapan wrapper-informasi-detail-hasil-tangkapan">
            <div className="wrapper-gambar-informasi">
              <form
                action=""
                method="POST"
                className="form-detail-hasil-tangkapan"
                onSubmit={(event) => script.tampilkanPopupBerhasil(event)}
              >
                <div className="gambar-detail-hasil-tangkapan tambah-gambar-detail-hasil-tangkapan">
                  Gambar
                  <hr />
                  <img src="assets/placeholder image.png" alt="Gambar" />
                  <button className="add-image">
                    <input
                      type="file"
                      id="upload-image"
                      accept="image/*"
                      name="upload-image"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Tolong masukkan Gambar!")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                    <label for="upload-image" className="">
                      <img src="assets/add photo.svg" alt="add-image" />
                    </label>
                  </button>
                </div>
                <div className="informasi-detail-hasil-tangkapan tambah-informasi-detail-hasil-tangkapan">
                  <p className="m-0">Informasi</p>
                  <hr />
                  <div className="jenis-detail">
                    <label for="nama" className="judul-informasi">
                      Nama
                    </label>
                    <input
                      type="text"
                      name="nama"
                      id=""
                      className="isi-informasi"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity(
                          "Tolong masukkan Data Valid!"
                        )
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </div>
                  <div className="jenis-detail">
                    <label for="jenis" className="judul-informasi">
                      Jenis
                    </label>
                    <select
                      name="jenis"
                      id="jenisikan"
                      className="isi-informasi"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity(
                          "Tolong masukkan Jenis Ikan!"
                        )
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    >
                      <option
                        value=""
                        className="placeholder-jenis"
                        selected
                        disabled
                        hidden
                      >
                        Jenis Ikan
                      </option>
                      <option value="ikan">Ikan</option>
                      <option value="kepiting">Kepiting</option>
                      <option value="kerang">Kerang</option>
                    </select>
                    <i className="fas fa-angle-down select-icon"></i>
                  </div>
                  <div className="jenis-detail">
                    <label for="Berat" className="judul-informasi">
                      Berat
                    </label>
                    <input
                      type="number"
                      name="berat"
                      id=""
                      className="isi-informasi"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity(
                          "Tolong masukkan Data Valid!"
                        )
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </div>
                  <div className="jenis-detail">
                    <label for="tanggal" className="judul-informasi">
                      Tanggal
                    </label>
                    <input
                      type="text"
                      name="tanggal"
                      id=""
                      className="isi-informasi"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity(
                          "Tolong masukkan Data Tanggal!"
                        )
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </div>
                  <div className="jenis-detail">
                    <label for="harga" className="judul-informasi">
                      Harga
                    </label>
                    <input
                      type="text"
                      name="harga"
                      id=""
                      className="isi-informasi"
                      required
                      placeholder="Rp. "
                      onInvalid={(e) =>
                        e.target.setCustomValidity(
                          "Tolong masukkan Data Valid!"
                        )
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </div>
                  <div className="jenis-detail">
                    <label for="catatan" className="judul-informasi">
                      Catatan
                    </label>
                    <textarea
                      name="catatan"
                      id=""
                      className="isi-informasi"
                    ></textarea>
                  </div>
                </div>
                <div className="button-hapus-simpan ms-auto">
                  <button
                    onClick={() => script.tampilkanPopup()}
                    className="hapus-detail-hasil-tangkapan"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#FF620A"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
                      />
                    </svg>
                    Hapus
                  </button>
                  <input
                    type="submit"
                    name=""
                    value="Simpan"
                    className="submit-detail-hasil-tangkapan"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content End */}

      {/* Popup Hapus */}
      <div id="popup-hapus" className="popup-hidden-hapus">
        <div className="popup-box">
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-icon">
            <img src="assets/trash.svg" alt="Trash Icon" />
          </div>
          <p className="popup-message">
            Anda yakin ingin menghapus catatan ini?
          </p>
          <div className="popup-buttons">
            <button
              className="btn btn-confirm"
              onClick={() => script.berhasilHapusPopup()}
            >
              Ya
            </button>
            <button
              className="btn btn-cancel"
              onClick={() => script.sembunyikanPopup()}
            >
              Tidak
            </button>
          </div>
        </div>
      </div>
      {/* Popup End */}

      {/* Popup Berhasil Hapus  */}
      <div id="popup-berhasil-hapus" className="popup-hidden-hapus">
        <div className="popup-box">
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-icon">
            <img src="assets/accept.svg" alt="Berhasil" />
          </div>
          <p className="popup-message">Selesai!</p>
          <p className="popup-message popup-message-child">
            Catatan berhasil dihapus
          </p>
        </div>
      </div>
      {/* Popup End */}

      {/* Popup Berhasil Simpan */}
      <div id="popup-berhasil-simpan" className="popup-hidden-hapus">
        <div className="popup-box">
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-icon">
            <img src="assets/accept.svg" alt="Berhasil" />
          </div>
          <p className="popup-message">Selesai!</p>
          <p className="popup-message popup-message-child">
            Catatan berhasil disimpan
          </p>
        </div>
      </div>
      {/* Popup End */}

      {/* Footer */}
      <Footer />
      {/* Footer End */}

      {/* Navbar Mobile */}
      <div className="wrapper-navbar-bottom d-none">
        <a href="laporan">
          <img src="assets/laporan icon.svg" alt="Laporan" />
        </a>
        <a href="catatannelayan1">
          <img src="assets/catatan nelayan icon.svg" alt="Catatan Nelayan" />
        </a>
        <a href="catatanpengepul1">
          <img
            src="assets/catatan pengepul icon active.svg"
            alt="Catatan Pengepul"
          />
        </a>
        <a href="stok">
          <img src="assets/stok icon.svg" alt="Stok" />
        </a>
      </div>
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default tambahhasiltangkapan;
