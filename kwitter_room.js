var firebaseConfig = {
    apiKey: "AIzaSyC4ZkdqDrEtsLDRB17rNB8xl7t8D1NaT3g",
    authDomain: "kwitter-4e4de.firebaseapp.com",
    databaseURL: "https://kwitter-4e4de-default-rtdb.firebaseio.com",
    projectId: "kwitter-4e4de",
    storageBucket: "kwitter-4e4de.appspot.com",
    messagingSenderId: "893038978805",
    appId: "1:893038978805:web:dc6ab5c504be3fa02b07bc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html"

}
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}