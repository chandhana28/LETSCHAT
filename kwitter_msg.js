var firebaseConfig = {
  apiKey: "AIzaSyC4ZkdqDrEtsLDRB17rNB8xl7t8D1NaT3g",
  authDomain: "kwitter-4e4de.firebaseapp.com",
  databaseURL: "https://kwitter-4e4de-default-rtdb.firebaseio.com",
  projectId: "kwitter-4e4de",
  storageBucket: "kwitter-4e4de.appspot.com",
  messagingSenderId: "893038978805",
  appId: "1:893038978805:web:dc6ab5c504be3fa02b07bc"
};
  
  //YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code

//End code
} });  }); }
getData();


function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0
});

document.getElementById("msg").value = "";
}

firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});