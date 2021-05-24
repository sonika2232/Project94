//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDT8xiLylyDveT4noUdr2Vl0QU6-ncBat0",
    authDomain: "class-93-27c10.firebaseapp.com",
    databaseURL: "https://class-93-27c10-default-rtdb.firebaseio.com",
    projectId: "class-93-27c10",
    storageBucket: "class-93-27c10.appspot.com",
    messagingSenderId: "797672071130",
    appId: "1:797672071130:web:a1338dc0e6bf69a4712ae3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




function addUser(){
user_name= document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);

window.location="awesome_room.html";
}