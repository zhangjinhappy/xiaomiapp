export default {
  getSession(name) {
      return sessionStorage.getItem(name);
  },
  setSession(name,value){
      return sessionStorage.setItem(name, value);
  },
  getLocation(name) {
      return JSON.parse(localStorage.getItem(name));
  },
  setLocation(name, value) {
      return localStorage.setItem(name, JSON.stringify(value));
  },
}
