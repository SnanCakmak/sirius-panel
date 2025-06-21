function login() {
  const password = document.getElementById("password").value;
  if (password === "sinan") {
    window.location.href = "dashboard.html";
  } else {
    alert("Hatalı şifre!");
  }
}
