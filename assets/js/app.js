
// Giriş ekranı şifre kontrolü
function kontrolEt() {
  const password = document.getElementById("sifre").value;
  if (password === "sirius2025") {
    window.location.href = "dashboard.html";
  } else {
    alert("Hatalı şifre!");
  }
}
