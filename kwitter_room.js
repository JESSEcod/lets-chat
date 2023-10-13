var firebaseConfig = {
      apiKey: "AIzaSyCEJY5QJHEai2cPFY7ni0JB38izjhU2yuc",
      authDomain: "kwitter-75753.firebaseapp.com",
      databaseURL: "https://kwitter-75753-default-rtdb.firebaseio.com",
      projectId: "kwitter-75753",
      storageBucket: "kwitter-75753.appspot.com",
      messagingSenderId: "188781119539",
      appId: "1:188781119539:web:9427c4d48c5d1b15513b46"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding roomname"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</<div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redireactToRoomName(name){
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";     
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="indexhtml";   
}