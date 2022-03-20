//YOUR FIREBASE LINKS

const firebaseConfig = {
      apiKey: "AIzaSyCln03sniPGoutm7zsb3OqQTxi-gH49uhM",
      authDomain: "kwitter-1439d.firebaseapp.com",
      databaseURL: "https://kwitter-1439d-default-rtdb.firebaseio.com",
      projectId: "kwitter-1439d",
      storageBucket: "kwitter-1439d.appspot.com",
      messagingSenderId: "992526589782",
      appId: "1:992526589782:web:ddeaf46279255cc57f00f7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
