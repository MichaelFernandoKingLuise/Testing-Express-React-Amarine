import React from "react";

import * as script from "../script";

function PopupLogout() {
  return (
    <div>
      <div id="popup-hapus" className="popup-hidden-hapus">
        <div className="popup-box">
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-icon">
            <img src="assets/logout icon 2.svg" alt="Trash Icon" />
          </div>
          <p className="popup-message">Anda yakin keluar dari akun?</p>
          <div className="popup-buttons">
            <button
              className="btn btn-confirm"
              onClick={() => script.keluarWebsite()}
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
    </div>
  );
}

export default PopupLogout;
