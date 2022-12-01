let todoList = ['todo1', 'todo2', 'todo3'];


while ((input = prompt("What do you want to do? \n -------------------------- \n Commands: \n -------------------------- \n new or n - Add a task\n list or l - List all tasks\n delete or d - Remove specific task\n quit or q - Quit app "))) {
  if (input == "quit") {
    console.log("Bye!");
    break;
  } else if (input == "new" || input == 'n') {
    input = prompt("Enter a task");
    console.log(input);
    todoList.push(input);
  } else if (input == "list" || input == 'l') {
    console.log('-----------------------')
    for (let todo in todoList) {
      console.log(todo + ": " + todoList[todo]);
      break;
    }
    console.log('-----------------------');
  } else if (input == "delete" || input == 'd') {
    input = prompt('what would you like to delete?');
    //removes an item from the list based on the index value
    todoList.indexOf(input)
    //if value entered exists
    if (input > -1){
    //deletes the item
      todoList.splice(input, 1);
      console.log('item deleted');
    }
  }
}
