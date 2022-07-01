const check = function () {
  if (localStorage.getItem("activeUser")) {
    window.location.href = "dashboard.html";
  }
};
check();
const allusers = [];
const signupform = document.querySelector(".form1");
const inputFname = document.querySelector(".f-name");
const inputLname = document.querySelector(".l-name");
const inputEmail = document.querySelector(".email");
const inputPhoneNo = document.querySelector(".phone-no");
const inputPass = document.querySelector(".pass");
const btnsignup = document.querySelector(".signup");
const btnsignin = document.querySelector(".signin");
class Users {
  id = (Date.now() + "").slice(-10);

  constructor(fname, lname, email, phoneNo, password) {
    this.firstName = fname;
    this.lastName = lname;
    this.userEmail = email;
    this.userPhone = phoneNo;
    this.password = password;
    this.fullName = this.getFullName(this.firstName, this.lastName);
    allusers.push(this);
    this.setLocalStorage();
    this.displayAlert();
  }

  getFullName(first, last) {
    let arr = new Array(first.toLowerCase(), last.toLowerCase());
    let namesUpper = [];
    for (const n of arr) {
      namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    return namesUpper.join(" ");
  }
  setLocalStorage() {
    localStorage.setItem("allUsers", JSON.stringify(allusers));
  }
  displayAlert() {
    alert("Registered Successfully");
  }
}

signupform?.addEventListener("submit", function (e) {
  e.preventDefault();
  let fName = inputFname.value;
  let lName = inputLname.value;
  let email = inputEmail.value;
  let number = inputPhoneNo.value;
  let password = inputPass.value;

  const createnewuser = function (fname, lname, email, number, pwd) {
    let user = new Users(fname, lname, email, number, pwd);
    inputFname.value =
      inputLname.value =
      inputEmail.value =
      inputPhoneNo.value =
      inputPass.value =
        "";
    inputFname.focus();
  };
  let existingUser = allusers.some((item) => {
    return item.userEmail === email || item.userPhone === number;
  });
  if (!allusers.length) {
    createnewuser(fName, lName, email, number, password);
  } else if (allusers.length && existingUser) {
    alert("Duplicate User");
  } else if (!existingUser) {
    createnewuser(fName, lName, email, number, password);
  }
  console.log(allusers);
});
