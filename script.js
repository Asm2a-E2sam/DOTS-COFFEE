import * as cookie from "./cookie-lib.js";
let date = new Date();
date.setMonth(date.getMonth() + 1);

let usernameRegx = /^[a-zA-Z0-9]{5,20}$/;
let emailRegx = /^[a-z0-9]{5,30}@(gmail|yahoo)(.com)$/;
let passwordRegx = /^[a-zA-Z0-9]{8,20}$/;

document.getElementById("register").addEventListener("click",function(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    console.log(username, email, password);
    if (usernameRegx.test(username)) {
      if (emailRegx.test(email)) {
        if (passwordRegx.test(password)) {
          cookie.setCookie("username", username, date);
          cookie.setCookie("email", email, date);
          cookie.setCookie("password", password, date);
          location.href = "login.html"
        } else {
          alert(
            "Please enter a valid Password contain only characters&numbers and min length 8"
          );
        }
      } else {
        alert("invalid Email it must be (gmail or yahoo) example(sample123@gmail.com)");
      }
    } else {
      alert("Invalid Username contain only characters&numbers and min length 5");
    }
})

