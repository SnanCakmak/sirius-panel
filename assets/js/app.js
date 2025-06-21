
// Giriş ekranı şifre kontrolü
function kontrolEt() {
  const password = document.getElementById("sifre").value;
  if (password === "sinan") {
    window.location.href = "dashboard.html";
  } else {
    alert("Hatalı şifre!");
  }
}
