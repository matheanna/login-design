//display qr codes
document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = root.querySelector("#download-btn");
  const formAndLogo = root.querySelector("#form-and-logo");
  const form = root.querySelector("#form-conatiner");
  const logo = root.querySelector("#logo-container");
  const qrCodes = root.querySelector("#qr-codes");

  downloadBtn.addEventListener("click", function () {
    formAndLogo.classList.toggle("expanded");
    form.classList.toggle("expanded");
    logo.classList.toggle("expanded");
    const isExpanded = formAndLogo.classList.contains("expanded");
    qrCodes.style.display = isExpanded ? "flex" : "none";
  });
});
