function addUser()
{ 
login_name = document.getElementById("login_name").value;
localStorage.setItem("login_name", login_name);
console.log(login_name);
window.location = "select_doctor_page.html"; 
}
