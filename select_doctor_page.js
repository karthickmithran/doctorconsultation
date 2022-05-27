login_name = localStorage.getItem("login_name");
console.log(login_name);
document.getElementById("login_name").innerHTML = "Welcome " + login_name + " !";

function consultpage(){
    window.location = "consult_page.html"; 
}

function logout(){
    localStorage.removeItem("login_name");
    window.location="index.html";
  }
 
