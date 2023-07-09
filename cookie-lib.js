export function setCookie(cookieName, cookieValue, expiryDate) {
  document.cookie = `${cookieName}=${cookieValue};expires=${expiryDate}`;
}

export function getCookie(cookieName) {
  var savedCookies = document.cookie.split(";");
  // console.log(savedCookies);

  for (var cookie of savedCookies) {
    let key = cookie.split("=")[0].trim();
    let value = cookie.split("=")[1].trim();
    if (key == cookieName) {
      return value;
      break;
    }
  }
}

export function hasCookie(cookieName){
    return obj[cookieName] == undefined? false : true;
}

export function deleteCookie(cookieName) {
  document.cookie = `${cookieName}=;expires=`;
}
