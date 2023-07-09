import * as cookie from "./cookie-lib.js";

try{
    if(cookie.getCookie("username")){
    document.getElementsByClassName("login")[0].style.display = "none";
    document.getElementById("welcome").innerText = `Welcome ${cookie.getCookie("username")}`
  
    console.log(`Welcome ${cookie.getCookie("username")}!`);
    document.getElementById("logout").style.display = "block";
  
  }else{
    document.getElementsByClassName("login")[0].style.display = "block";
    document.getElementById("logout").style.display = "none";
  }
  
  document.getElementById("logout").addEventListener("click",function(){
    cookie.deleteCookie("username");
    cookie.deleteCookie("email");
    cookie.deleteCookie("password");
  })
  
  }
  catch(e){
    alert(`Error: ${e}`)
}; 
  