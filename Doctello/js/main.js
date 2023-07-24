import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyABC9tpLtYR04ewaKd-2-0FbJDw35YzIFY",
    authDomain: "m-project-e3233.firebaseapp.com",
    databaseURL: "https://m-project-e3233-default-rtdb.firebaseio.com",
    projectId: "m-project-e3233",
    storageBucket: "m-project-e3233.appspot.com",
    messagingSenderId: "729629607776",
    appId: "1:729629607776:web:d4a63917b61e1e1d2a8005",
    measurementId: "G-SD76GFJ6GM"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
console.log(app);



//----- New Registration code start	  
	  document.getElementById("register").addEventListener("click", function() {
		  var email =  document.getElementById("email").value;
		  var password = document.getElementById("password").value;
		  //For new registration
		  createUserWithEmailAndPassword(auth, email, password)
		  .then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
		    console.log(user);
		    alert("Registration successfully!!");
		    // ...
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    // ..
		    console.log(errorMessage);
		    alert(error);
		  });		  		  
	  });
	  //----- End

//----- Login code start	  
	  document.getElementById("login").addEventListener("click", function() {
		  var email =  document.getElementById("login_email").value;
		  var password = document.getElementById("login_password").value;

		  signInWithEmailAndPassword(auth, email, password)
		  .then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
		    console.log(user);
			//test
			//window.location.replace("./page_2.html");
			window.location.href = "./index.html";
		    //alert(user.email+" Login successfully!!!");
		    //document.getElementById('logout').style.display = 'block';
		    // ...
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    console.log(errorMessage);
		    alert(errorMessage);
		  });		  		  
	  });
	  //----- End

//----- Logout code start	  
	  document.getElementById("logout").addEventListener("click", function() {
		  signOut(auth).then(() => {
			  // Sign-out successful.
              window.location.href = "./auth.html";
			  console.log('Sign-out successful.');
			  alert('Sign-out successful.');
			  //document.getElementById('logout').style.display = 'none';
			}).catch((error) => {
			  // An error happened.
			  console.log('An error happened.');
			});		  		  
	  }); 