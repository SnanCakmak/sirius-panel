console.log("📦 Sirius Panel aktif!");

// Sayfada butonlara tıklanınca uyarı verecek örnek işlemler
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => {
    if (!btn.onclick) {
      btn.addEventListener("click", () => {
        alert(`${btn.innerText} işlemi tetiklendi!`);
      });
    }
  });
});
