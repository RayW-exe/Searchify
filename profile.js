

function sendData(){
   const logout = document.querySelector(".logout-btn");
   localStorage.setItem('logout-btn', logout);
   window.location.href = 'dashboard.html';

}