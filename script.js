// Get elements
const input = document.getElementById("input");
const list = document.getElementById("list");

// Add task
function addTask() {
	// Create new list item
	const li = document.createElement("li");
	const task = document.createTextNode(input.value);
	li.appendChild(task);
 
	
	// Create delete button
	const button = document.createElement("button");
	button.innerHTML = "&times;";
	button.onclick = function() {
		li.remove();
	}
	li.appendChild(button);
	
	// Add list item to list
	if (input.value === "") {
		alert("Please enter a task");
	} else {
		list.appendChild(li);
		input.value = "";
	}
}

// Press enter to add task
input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("addBtn").click();
	}
});
