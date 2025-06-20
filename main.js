    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const form = document.getElementById("loginForm");
    const togglePassword = document.getElementById("togglePassword");
    const message = document.getElementById("message");
    const clearStorage = document.getElementById("clearStorage");

    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
      emailInput.value = savedEmail;
    }

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const email = emailInput.value.trim();
      const password = passwordInput.value;

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!emailValid) {
        message.textContent = "Невірний email.";
        message.style.color = "red";
        return;
      }

      if (password.length < 6) {
        message.textContent = "Пароль має бути не менше 6 символів.";
        message.style.color = "red";
        return;
      }

      localStorage.setItem("savedEmail", email);
      message.textContent = "Вхід успішний";
      message.style.color = "green";
    });

    togglePassword.addEventListener("click", function() {
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
    });

    clearStorage.addEventListener("click", function() {
      localStorage.removeItem("savedEmail");
      emailInput.value = "";
      message.textContent = "Email очищено.";
      message.style.color = "blue";
    });
