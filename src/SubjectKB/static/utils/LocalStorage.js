const setCookie = function (cName, value, expireDays) {
  let exDate = new Date();
  exDate.setDate(exDate.getDate() + expireDays);
  document.cookie = cName + '=' + decodeURI(value) + ((expireDays == null) ? '' : ';expires=' + exDate.toGMTString())
};

const getCookie = function (cName) {
  let cStart = '';
  let cEnd = '';
  if (document.cookie.length > 0) {
    cStart = document.cookie.indexOf(cName + '=');
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1;
      cEnd = document.cookie.indexOf(';', cStart);
      if (cEnd === -1) cEnd = document.cookie.length;
      return decodeURIComponent(document.cookie.substring(cStart, cEnd))
    }
  }
  return ''
};
const getSession = function (name) {
  return sessionStorage.getItem(name)
};

const setSession = function (name, value) {
  sessionStorage.setItem(name, value)
};

const removeSession = function (name) {
  sessionStorage.removeItem(name)
};

const clearSession = function () {
  sessionStorage.clearSession()
};

const getLocal = function (name) {
  localStorage.getItem(name)
};

const setLocal = function (name, value) {
  localStorage.setItem(name, value)
};
const removeLocal = function (name) {
  sessionStorage.removeItem(name)
};
const clearLocal = function () {
  localStorage.clear()
};
export const LocalStorage = {
  getCookie: getCookie,
  setCookie: setCookie,
  getSession: getSession,
  setSession: setSession,
  removeSession: removeSession,
  clearSession: clearSession,
  getLocal: getLocal,
  setLocal: setLocal,
  removeLocal: removeLocal,
  clearLocal: clearLocal
};
