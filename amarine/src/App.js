
import React, { useEffect } from "react";
import Beranda from './pages/beranda'
import Catatannelayan1 from './pages/catatannelayan1'
import Catatanpengepul1 from './pages/catatanpengepul1'
import Daftar from './pages/daftar'
import Detailhasiltangkapan from './pages/detailhasiltangkapan'
import Laporan from './pages/laporan'
import Laporandetail from './pages/laporandetail'
import Login from './pages/login'
import Lupakatasandi1 from './pages/lupakatasandi1'
import Lupakatasandi2 from './pages/lupakatasandi2'
import Lupakatasandi3 from './pages/lupakatasandi3'
import Lupakatasandi4 from './pages/lupakatasandi4'
import Main from './pages/main'
import Nelayan from './pages/nelayan'
import Panduan1 from './pages/panduan1'
import Panduan2 from './pages/panduan2'
import Profil1 from './pages/profil1'
import Profil2 from './pages/profil2'
import Profil3 from './pages/profil3'
import Stok from './pages/stok'
import Tambahhasiltangkapan from './pages/tambahhasiltangkapan'
import Tentangkami1 from './pages/tentangkami1'
import Tentangkami2 from './pages/tentangkami2'
import Tentangkami3 from './pages/tentangkami3'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/catatannelayan1" element={<Catatannelayan1 />} />
        <Route path="/catatanpengepul1" element={<Catatanpengepul1 />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/detailhasiltangkapan" element={<Detailhasiltangkapan />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/laporandetail" element={<Laporandetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lupakatasandi1" element={<Lupakatasandi1 />} />
        <Route path="/lupakatasandi2" element={<Lupakatasandi2 />} />
        <Route path="/lupakatasandi3" element={<Lupakatasandi3 />} />
        <Route path="/lupakatasandi4" element={<Lupakatasandi4 />} />
        <Route path="/nelayan" element={<Nelayan />} />
        <Route path="/panduan1" element={<Panduan1 />} />
        <Route path="/panduan2" element={<Panduan2 />} />
        <Route path="/profil1" element={<Profil1 />} />
        <Route path="/profil2" element={<Profil2 />} />
        <Route path="/profil3" element={<Profil3 />} />
        <Route path="/stok" element={<Stok />} />
        <Route path="/tambahhasiltangkapan" element={<Tambahhasiltangkapan />} />
        <Route path="/tentangkami1" element={<Tentangkami1 />} />
        <Route path="/tentangkami2" element={<Tentangkami2 />} />
        <Route path="/tentangkami3" element={<Tentangkami3 />} />
      </Routes>
    </Router>
  );
}

export default App
