document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (!username || !email || !password) {
    errorMsg.textContent = "All fields are required!";
    return;
  }

  if (!email.includes("@")) {
    errorMsg.textContent = "Enter a valid email!";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters!";
    return;
  }

  errorMsg.style.color = "green";
  errorMsg.textContent = "Form submitted successfully!";
});
