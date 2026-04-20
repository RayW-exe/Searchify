

function sendData(){
   const logout = document.getElementById("logout-btn");
   localStorage.setItem('logout-btn', logout);
   window.location.href = 'dashboard.html';

}