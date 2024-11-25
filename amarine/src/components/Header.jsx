import React from "react";

function Header() {
  return (
    <div className="wrapper-navbar-div">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="beranda">
            <img src="assets/logo tulisan.png" alt="Logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="beranda"
                >
                  Beranda
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kelola Penjualan <i className="fas fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="laporan" className="dropdown-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.15em"
                        height="1.15em"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="currentColor"
                            d="M12 4a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2M9.354 3c.705-.622 1.632-1 2.646-1s1.94.378 2.646 1H18a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.126 5H6v15h12V5h-2.126q.124.481.126 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6q.002-.519.126-1M8 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
                          />
                        </g>
                      </svg>
                      Laporan
                    </a>
                  </li>
                  <li>
                    <a href="catatannelayan1" className="dropdown-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.15em"
                        height="1.15em"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path d="M4 5h0.01" />
                          <path d="M8 5h12" />
                          <path d="M4 10h0.01" />
                          <path d="M8 10h12" />
                          <path d="M4 15h0.01" />
                          <path d="M8 15h12" />
                          <path d="M4 20h0.01" />
                          <path d="M8 20h12" />
                        </g>
                      </svg>
                      Catatan Nelayan
                    </a>
                  </li>
                  <li>
                    <a href="catatanpengepul1" className="dropdown-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.15em"
                        height="1.15em"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path d="M4 5h0.01" />
                          <path d="M8 5h12" />
                          <path d="M4 10h0.01" />
                          <path d="M8 10h12" />
                          <path d="M4 15h0.01" />
                          <path d="M8 15h12" />
                          <path d="M4 20h0.01" />
                          <path d="M8 20h12" />
                        </g>
                      </svg>
                      Catatan Pengepul
                    </a>
                  </li>
                  <li>
                    <a href="stok" className="dropdown-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.15em"
                        height="1.15em"
                        viewBox="0 0 256 256"
                      >
                        <path
                          fill="currentColor"
                          d="m222.72 67.9l-88-48.17a13.9 13.9 0 0 0-13.44 0l-88 48.18A14 14 0 0 0 26 80.18v95.64a14 14 0 0 0 7.28 12.27l88 48.18a13.92 13.92 0 0 0 13.44 0l88-48.18a14 14 0 0 0 7.28-12.27V80.18a14 14 0 0 0-7.28-12.28M127 30.25a2 2 0 0 1 1.92 0L212.51 76L128 122.24L43.49 76ZM39 177.57a2 2 0 0 1-1-1.75V86.66l84 46V223Zm177.92 0L134 223v-90.36l84-46v89.16a2 2 0 0 1-1 1.77Z"
                        />
                      </svg>
                      Stok
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="nelayan">
                  Nelayan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="panduan1">
                  Panduan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tentangkami1">
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item gambar-profil">
                <a href="profil1" className="nav-link">
                  <img src="assets/pak bahrul.png" alt="Gambar Profil" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
