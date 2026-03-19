// 🌙 Dark Mode
function toggleDarkMode(){
document.body.classList.toggle("dark-mode");
}

// ==========================
// 🔐 Signup
// ==========================
function signupUser(){

let name = document.getElementById("signupName").value;
let email = document.getElementById("signupEmail").value;
let password = document.getElementById("signupPassword").value;

if(name === "" || email === "" || password === ""){
alert("Please fill all fields");
return;
}

localStorage.setItem("name", name);
localStorage.setItem("email", email);
localStorage.setItem("password", password);

alert("Signup Successful ✅");

window.location.href = "login.html";
}

// ==========================
// 🔑 Login
// ==========================
function loginUser(){

let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

let storedEmail = localStorage.getItem("email");
let storedPassword = localStorage.getItem("password");

if(email === storedEmail && password === storedPassword){
alert("Login Successful ✅");
window.location.href = "dashboard.html";
}else{
alert("Invalid Email or Password ❌");
}
}

// ==========================
// 📊 Dashboard
// ==========================
window.onload = function(){

let name = localStorage.getItem("name");

if(name && document.getElementById("welcomeText")){
document.getElementById("welcomeText").innerText = "Welcome " + name;
}

}

// Logout
function logoutUser(){
localStorage.clear();
alert("Logged out successfully");
window.location.href = "login.html";
}

// ==========================
// 📚 Course Details Dynamic
// ==========================
const params = new URLSearchParams(window.location.search);
const course = params.get("course");

if(course){

let title = document.getElementById("courseTitle");
let instructor = document.getElementById("courseInstructor");
let duration = document.getElementById("courseDuration");
let price = document.getElementById("coursePrice");
let desc = document.getElementById("courseDescription");

if(title){ // safety check

if(course === "web"){
title.innerText = "Web Development";
instructor.innerText = "Instructor: John";
duration.innerText = "Duration: 8 weeks";
price.innerText = "Price: ₹3999";
desc.innerText = "Learn HTML, CSS, JavaScript and build websites.";
}

else if(course === "python"){
title.innerText = "Python Programming";
instructor.innerText = "Instructor: David";
duration.innerText = "Duration: 6 weeks";
price.innerText = "Price: ₹2999";
desc.innerText = "Learn Python from beginner to advanced.";
}

else if(course === "ai"){
title.innerText = "Artificial Intelligence";
instructor.innerText = "Instructor: Smith";
duration.innerText = "Duration: 10 weeks";
price.innerText = "Price: ₹4999";
desc.innerText = "Introduction to AI and ML.";
}

else if(course === "data"){
title.innerText = "Data Science";
instructor.innerText = "Instructor: Sarah";
duration.innerText = "Duration: 7 weeks";
price.innerText = "Price: ₹3999";
desc.innerText = "Learn data analysis and visualization.";
}

}

}

// ==========================
// 📩 Contact Form
// ==========================
function submitForm(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

if(name === "" || email === "" || message === ""){
alert("Please fill all fields");
return;
}

alert("Message sent successfully ✅");

document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";

}