//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so the user can manage daily tasks


var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button on the page
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //unordered list
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//Add a task

var addTask = function(){

  console.log("Add task...");
  //When the button is pressed:
  //Create a new list item with the text from #new-task:
    //input checkbox
    //label
    //input for the text
    //Create a button with the class of Edit
    //Create a button with the class of Delete
    //Each element will need to be modified and appended
}


//Edit an existing task

var editTask = function(){

  console.log("Edit task...");
  //When the edit button is pressed
    //We want to see if the class of the parent is .Edit
      //Switch from .editMode
      //label text become the input's value
    //else
      //We want to switch to editMode
      //input value becomes the label's text
}


//Delete an existing task
var deleteTask = function(){
  console.log("Delete task...");
}


//Mark a task as complete
var taskCompleted = function(){
  console.log("Complete task...");
}



//Mark a task as incomplete.
var taskIncomplete = function(){
  console.log("Task Incomplete...");
}


//Creating functions like this promotes DRY code
var bindTaskEvents = function(TaskListItem, checkBoxEventHandler){
  console.log("Bind List item events");
  //select it's children
  //bind the editTask to edit button
  //bind the deleteTask to the delete button
  //bind the checkBoxEventHandler to the checkbox

}


//Set the click handler to the addTask function
addButton.onclick = addTask;


//cycle over the incompleteTasksHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++){
  //Bind events to list items children (taskComplete)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}


//cycle over the completedTasksHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++){
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
