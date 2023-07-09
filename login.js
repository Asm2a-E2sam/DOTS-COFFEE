import * as cookie from "./cookie-lib.js";
let date = new Date();
date.setMonth(date.getMonth() + 1);

document.getElementById("_login").addEventListener("click",function(){
    // console.log("hi");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // console.log(`Username: ${username} and Passowrd:${password}`);
    if (cookie.getCookie("username") == username && cookie.getCookie("password") == password){
            // console.log("valid user");
            cookie.setCookie("login","true");
            localStorage.setItem("username",username)
            location.href ="DOTS.html";
    }else{
        cookie.setCookie("login","false");
        alert('Invalid Username or Password if you don\'t have account create it Now.');
    }   
})