console.log("📦 Sirius Panel aktif!");

// Tüm butonlara varsayılan uyarı bağla (varsa override etmez)
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => {
    if (!btn.getAttribute("onclick")) {
      btn.addEventListener("click", () => {
        alert(`${btn.innerText} işlemi tetiklendi!`);
      });
    }
  });
});

// Giriş ekranı için şifre kontrolü
function login() {
  const password = document.getElementById("password").value;
  if (password === "sirius2025") {
    window.location.href = "dashboard.html";
  } else {
    alert("❌ Hatalı şifre. Lütfen tekrar deneyin.");
  }
}
