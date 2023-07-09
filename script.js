import * as cookie from "./cookie-lib.js";
let date = new Date();
date.setMonth(date.getMonth() + 1);

let usernameRegx = /^[a-z]{3,10}[0-9]{0,4}$/;
let emailRegx = /^[a-z]{3,10}[0-9]{0,4}@(gmail|yahoo)(.com)$/;
let passwordRegx = /^[a-zA-Z]{3,5}[0-9]{3}$/;

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
            "Please enter a valid Password contain characters&numbers like Xyz2023"
          );
        }
      } else {
        alert("invalid Email example(sample123@gmail.com)");
      }
    } else {
      alert("Invalid Username example(xyz123)");
    }
})

