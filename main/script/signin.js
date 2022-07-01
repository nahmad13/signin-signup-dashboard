check();
const inputLogin = document.querySelector(".login-info");
const signinform = document.querySelector(".form2");
const Usersarr = JSON.parse(localStorage.getItem("allUsers"));
console.log(Usersarr);
let activeUser;

const checkUser = function () {
  activeUser = Usersarr.find((val) => {
    return (
      (inputLogin.value === val.userEmail ||
        inputLogin.value === val.userPhone) &&
      inputPass.value === val.password
    );
  });
  if (activeUser) {
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
  }
};
function dashboard() {
  if (!activeUser) alert("Incorrect Info or Password ");
  else {
    window.location.href = "dashboard.html";
  }
}

signinform?.addEventListener("submit", function (e) {
  e.preventDefault();
  checkUser();
  dashboard();
});
