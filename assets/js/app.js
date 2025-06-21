function login() {
  const username = document.getElementById("username")?.value.trim();
  const password = document.getElementById("password").value.trim();

  if ((username === undefined || username === "sinan") && password === "sinan") {
    localStorage.setItem("giris", "ok");
    window.location.href = "dashboard.html";
  } else {
    alert("Kullanıcı adı veya şifre hatalı!");
  }
}

// Enter tuşu ile giriş
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    login();
  }
});
