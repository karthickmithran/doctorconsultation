//YOUR FIREBASE LINKS
const firebaseConfig = {
   apiKey: "AIzaSyCLJtSCViI3KvLuX7a3BlEVofSTJDgV--E",
   authDomain: "doctorconsultation-83d08.firebaseapp.com",
   databaseURL: "https://doctorconsultation-83d08-default-rtdb.firebaseio.com",
   projectId: "doctorconsultation-83d08",
   storageBucket: "doctorconsultation-83d08.appspot.com",
   messagingSenderId: "439546187635",
   appId: "1:439546187635:web:b25ba101ee7588e9e47f06"
 };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  login_name = localStorage.getItem("login_name");


function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref("doctorroom").push({
          name:login_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/doctorroom").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag+ message_with_tag+ like_button+ span_with_tag;
document.getElementById("output").innerHTML +=row;
//End code
   } });  }); }
getData();

function updateLike(message_id){
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
firebase.database().ref("doctorroom").child(message_id).update({
   like:updated_likes
});
}

function logout(){
   localStorage.removeItem("login_name");
   firebase.database().ref("doctorroom").remove();
   window.location="index.html";
 }
