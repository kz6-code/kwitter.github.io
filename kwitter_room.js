var firebaseConfig = {
  apiKey: "AIzaSyD6ayDNZ_xyR0Om03GodR2onXbptaY0I3o",
  authDomain: "practice-activity-fbc54.firebaseapp.com",
  databaseURL: "https://practice-activity-fbc54-default-rtdb.firebaseio.com",
  projectId: "practice-activity-fbc54",
  storageBucket: "practice-activity-fbc54.appspot.com",
  messagingSenderId: "547843214306",
  appId: "1:547843214306:web:50356bc175fbc1329d07bb"
};
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}