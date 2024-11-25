import React, { useEffect, useState } from "react";
import axios from "axios";

import * as script from "../script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";

function Nelayan() {
  const [nelayanData, setNelayanData] = useState([]);
  const [selectedNelayan, setSelectedNelayan] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/nelayan")
      .then((response) => {
        setNelayanData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

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
            <p>Informasi Nelayan</p>
          </div>
          <div className="wrapper-tabel-nelayan">
            <table className="tabel-nelayan">
              <thead>
                <tr>
                  <td>Nama</td>
                  <td>No Telepon</td>
                  <td>Email</td>
                  <td>Tanggal Lahir</td>
                  <td>Alamat</td>
                </tr>
              </thead>
              <tbody>
                {nelayanData.map((nelayan) => (
                  <tr key={nelayan.id}>
                    <td>
                      <button
                        onClick={() =>
                          script.tampilkanPopupNelayan(
                            setSelectedNelayan,
                            nelayan
                          )
                        }
                        className="link-avatar"
                      >
                        <div className="content-tabel-nelayan">
                          <img src="assets/pak bahrul.png" alt="" />
                          {/* <img src={nelayan.gambar} alt="" /> */}
                          <span>{nelayan.nama}</span>
                        </div>
                      </button>
                    </td>
                    <td>{nelayan.no_hp}</td>
                    <td>{nelayan.email}</td>
                    <td>{formatDate(nelayan.tanggal_lahir)}</td>
                    <td>{nelayan.alamat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Main Content End */}

      {/* Footer */}
      <Footer />
      {/* Footer End */}

      {/* Popup */}
      {selectedNelayan && (
        <div
          className="wrapper-avatar wrapper-avatar-nelayan"
          style={{ visibility: "hidden", opacity: "0" }}
        >
          <div className="profile-card">
            <img src="assets/pak bahrul.png" alt="Profile" />
            <h2>{selectedNelayan.nama}</h2>
            <p>Nomor Telepon</p>
            <div className="info-box">{selectedNelayan.no_hp}</div>
            <p>Email</p>
            <div className="info-box">{selectedNelayan.email}</div>
            <p>Tanggal Lahir</p>
            <div className="info-box">
              {formatDate(selectedNelayan.tanggal_lahir)}
            </div>
            <p>Alamat</p>
            <div className="info-box">{selectedNelayan.alamat}</div>
          </div>
        </div>
      )}
      {/* Popup End */}

      {/* Navbar Mobile */}
      <NavbarMobile />
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default Nelayan;
