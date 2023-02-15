// if id password doesnt match confirmpassword chang the class to error

// eslint-disable-next-line no-unused-vars
function checkPasswords() {
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirmPassword").value;

  if (password !== confirmpassword) {
    document.getElementById("password").classList.add("error");
    document.getElementById("confirmPassword").classList.add("error");
  } else {
    document.getElementById("password").classList.remove("error");
    document.getElementById("confirmPassword").classList.remove("error");
  }
}
