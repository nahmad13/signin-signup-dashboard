const checkActive = function () {
  if (!localStorage.getItem("activeUser")) {
    window.location.href = "signin.html";
  }
};
checkActive();
let labelWelcome = document.querySelector(".field");
const btnsignout = document.querySelector(".sign-out");
let data = JSON.parse(localStorage.getItem("activeUser"));
console.log(data);

labelWelcome.textContent = `Welcome ${data?.fullName} Bhai !`;

btnsignout?.addEventListener("click", function () {
  console.log("click");
  localStorage.removeItem("activeUser");
  checkActive();
});
