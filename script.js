function addTask() {

let input = document.getElementById("taskInput");

let task = input.value.trim();

if(task === ""){

alert("Please enter a task.");

return;

}

let li = document.createElement("li");

li.innerHTML = task + " ";

let completeBtn = document.createElement("button");

completeBtn.innerHTML = "Complete";

completeBtn.onclick = function(){

li.style.textDecoration = "line-through";

li.style.color = "green";

};

let deleteBtn = document.createElement("button");

deleteBtn.innerHTML = " Delete";

deleteBtn.onclick = function(){

li.remove();

};

li.appendChild(completeBtn);

li.appendChild(deleteBtn);

document.getElementById("taskList").appendChild(li);

input.value = "";

}

document.addEventListener("DOMContentLoaded", function(){

let form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();

let email = document.getElementById("email").value.trim();

let phone = document.getElementById("phone").value.trim();

let message = document.getElementById("message").value.trim();

if(name === "" || email === "" || phone === "" || message === ""){

alert("Please fill in all fields.");

return;

}

alert("Message sent successfully!");

form.reset();

});

}

});