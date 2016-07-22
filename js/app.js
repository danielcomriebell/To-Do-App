//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so the user can manage daily tasks


var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button on the page
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //unordered list
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks



//New Task List item

var createNewTaskElement = function(taskString){
//Create List Item
  var listItem = document.createElement("li");
  //input checkbox
  var checkBox = document.createElement("input");
  //label
  var label = document.createElement("label");
  //input for the text
  var editInput = document.createElement("input");
  //Create a button with the class of Edit
  var editButton = document.createElement("button");
  //Create a button with the class of Delete
  var deleteButton = document.createElement("button");
  //Each element will need to be modified
  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";


  label.innerText = taskString;

  //Each element needs to be appended
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}
//Add a task
var addTask = function(){

  console.log("Add task...");
  //When the button is pressed:
  //Create a new list item with the text from #new-task:
  var listItem = createNewTaskElement(taskInput.value);
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = "";
}


//Edit an existing task

var editTask = function(){

  console.log("Edit task...");

  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");

  var containsClass = listItem.classList.contains("editMode")

  //if the class of the parent is .editMode
  if (containsClass){
    //Switch from editMode
    //label text become the input's value
    label.innerText = editInput.value;
  } else{
    //Switch to .editMode
    //input value becomes the label's text
    editInput.value = label.innerText;
  }

  //Toggle .editMode
  listItem.classList.toggle("editMode");
}


//Delete an existing task
var deleteTask = function(){
  console.log("Delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}


//Mark a task as complete
var taskCompleted = function(){
  console.log("Task Complete...");

  //Append the task list item ot the #completed-tasks
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}



//Mark a task as incomplete.
var taskIncomplete = function(){
  console.log("Task Incomplete...");

  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}


//Creating functions like this promotes DRY code
var bindTaskEvents = function(TaskListItem, checkBoxEventHandler){
  console.log("Bind List item events");
  //select TaskListItem's children
  var checkBox = TaskListItem.querySelector("input[type=checkbox]");
  var editButton = TaskListItem.querySelector("button.edit");
  var deleteButton = TaskListItem.querySelector("button.delete");

  //bind the editTask to edit button
  editButton.onclick = editTask;
  //bind the deleteTask to the delete button
  deleteButton.onclick = deleteTask;
  //bind the checkBoxEventHandler to the checkbox
  //you can use space to check a checkbox
  //GlobalEventHandlers.onchange
  checkBox.onchange = checkBoxEventHandler;
}


//Set the click handler to the addTask function
// addButton.onclick = addTask;

addButton.addEventListener("click", addTask);


//cycle over the incompleteTasksHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++){
  //Bind events to list items children (taskComplete)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}


//cycle over the completedTasksHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++){
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
