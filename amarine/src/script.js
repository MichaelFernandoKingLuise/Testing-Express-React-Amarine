function kembaliKeDetail() {
  setTimeout(function () {
    window.location.href = "tambahhasiltangkapan";
  }, 3000);
}

export function tampilkanPopup() {
  const popup = document.getElementById("popup-hapus");
  popup.className = "popup-hapus-tampil";
}

export function sembunyikanPopup() {
  const popup = document.getElementById("popup-hapus");
  popup.className = "popup-hidden-hapus";
}

export function berhasilHapusPopup() {
  const popup = document.getElementById("popup-hapus");
  const berhasilPopup = document.getElementById("popup-berhasil-hapus");
  berhasilPopup.className = "popup-berhasil-hapus";
  popup.className = "popup-hidden-hapus";
  kembaliKeDetail();
  berhasilPopup.addEventListener("click", function () {
    window.location.href = "tambahhasiltangkapan";
  });
}

export function tutupPopupWelcome() {
  const popup = document.querySelector(".popup-welcome");
  if (popup) {
    popup.style.display = "none";
  }
}

export function tampilkanPopupBerhasil(event) {
  event.preventDefault();
  const berhasilSimpanPopup = document.getElementById("popup-berhasil-simpan");
  berhasilSimpanPopup.className = "popup-hapus-tampil";
  kembaliKeDetail();
  berhasilSimpanPopup.addEventListener("click", function () {
    window.location.href = "tambahhasiltangkapan";
  });
}

export function tampilkanPopupBerhasilPerubahanProfil(event) {
  event.preventDefault();
  const berhasilSimpanPopup = document.getElementById("popup-berhasil-simpan");
  berhasilSimpanPopup.className = "popup-hapus-tampil";
  setTimeout(function () {
    window.location.href = "profil1";
  }, 3000);
  berhasilSimpanPopup.addEventListener("click", function () {
    window.location.href = "profil1";
  });
}

export function tampilkanPopupBerhasilPerubahanKataSandi(event) {
  event.preventDefault();
  const berhasilSimpanPopup = document.getElementById("popup-berhasil-simpan");
  berhasilSimpanPopup.className = "popup-hapus-tampil";
  setTimeout(function () {
    window.location.href = "profil2";
  }, 3000);
  berhasilSimpanPopup.addEventListener("click", function () {
    window.location.href = "profil2";
  });
}

export function tampilkanPopupBerhasilLaporankanMasalah(event) {
  event.preventDefault();
  const berhasilSimpanPopup = document.getElementById("popup-berhasil-simpan");
  berhasilSimpanPopup.className = "popup-hapus-tampil";
  setTimeout(function () {
    window.location.href = "profil3";
  }, 3000);
  berhasilSimpanPopup.addEventListener("click", function () {
    window.location.href = "profil3";
  });
}

export function tampilkanPopupBerhasilLogin(event) {
  event.preventDefault();
  const berhasilSimpanPopup = document.getElementById("popup-berhasil-simpan");
  berhasilSimpanPopup.className = "popup-hapus-tampil";

  setTimeout(function () {
    window.location.href = "login";
  }, 3000);

  berhasilSimpanPopup.addEventListener("click", function () {
    window.location.href = "login";
  });
}

export function toggleContent(buttonClass) {
  const container = document.querySelector(
    ".main-content-tentang-kami-section-kedua-isi"
  );
  const content = document.querySelector(`.${buttonClass} + .isi-extend`);
  if (content && container) {
    const isLastButton = buttonClass === "extend-bar-lima";
    if (content.style.display === "block") {
      content.style.display = "none";
      if (isLastButton) {
        container.style.paddingBottom = "0";
      }
    } else {
      content.style.display = "block";
      if (isLastButton) {
        container.style.paddingBottom = "30px";
      }
    }
  }
}

export function togglePassword(passwordId) {
  const passwordInput = document.getElementById(passwordId);
  const openEyeIcon = document.getElementById(`open-eye-${passwordId}`);
  const closeEyeIcon = document.getElementById(`close-eye-${passwordId}`);

  // Toggle input type (password / text)
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  // Toggle visibility of eye icons
  openEyeIcon.classList.toggle("d-none");
  closeEyeIcon.classList.toggle("d-none");
}

export function toggleIngat() {
  const ingat = document.getElementById("ingat-btn");
  ingat.classList.toggle("active");
}

export function moveToNext(currentInput, nextInputId) {
  if (currentInput.value.length === 1) {
    document.getElementById(nextInputId).focus();
  }
}

export function tampilkanPopupNelayan(setSelectedNelayan, nelayan) {
  setSelectedNelayan(nelayan);

  setTimeout(() => {
    const popup = document.querySelector(".wrapper-avatar-nelayan");
    if (popup) {
      popup.style.visibility = "visible";
      popup.style.opacity = "1";

      popup.removeEventListener("click", closePopup);
      popup.addEventListener("click", closePopup);
    }
  }, 0); 

  function closePopup() {
    const popup = document.querySelector(".wrapper-avatar-nelayan");
    if (popup) {
      popup.style.visibility = "hidden";
      popup.style.opacity = "0";
    }
  }
}

export function keluarWebsite() {
  window.location.href = "/";
}