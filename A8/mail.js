const firebaseConfig = {
  apiKey: "AIzaSyA46KwKZ2erdSz0G8LSNIIEBeBCaTMzia4",
  authDomain: "ccl-assignment-8.firebaseapp.com",
  projectId: "ccl-assignment-8",
  storageBucket: "ccl-assignment-8.appspot.com",
  messagingSenderId: "1098784279488",
  appId: "1:1098784279488:web:dcdf9578ef696dc2c35625",
  measurementId: "G-N141T1C6FK"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};