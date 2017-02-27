var todoArray = [];
var finArray = [];

function Todo(taskParam, timeParam) {
  this.taskItem = taskParam;
  this.datetime = timeParam;
  todoArray.push(this);
}

function Finished(taskParam, timeParam) {
  this.taskItem = taskParam;
  this.datetime = timeParam;
  finArray.push(this);
}

// user interface logic
$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();
    var taskVar = $("input#todoItem").val();
    var timeVar = Date.now();

    var newTask = new Todo(taskVar, timeVar);
    var currentItem = newTask.taskItem;
    var currentTime = newTask.datetime;
    $("ul#active").append("<li class='"+ currentItem+" listItem'><span class='"+currentItem+"'>" + currentItem + "</span></li>");
    // console.log(currentItem);  console.log(currentItem);
    $(".listItem").last().click(function(){
      $("ul#finished").append("<li class='"+currentItem+" finItem'><span class='"+currentItem+"'>" + currentItem + "</span></li>");
      this.remove();
      var filterTodo = todoArray.filter(function(fruit) {
        return fruit.taskItem === currentItem;
      });

      var finTaskVar = currentItem;
      var finTimeVar = currentTime;
      var finishedTask = new Finished(finTaskVar, finTimeVar);
      console.log(filterTodo);
      console.log("at was filterTodo");

      if (filterTodo.length > 0) finishedTask && todoArray.pop(filterTodo);
      console.log(todoArray);
      console.log("that was todo. this is fin:");
      console.log(finArray);
    });



    $(".finItem").click(function(){
      alert("alksdjfhalksjdfhlkjh");
    });
    // $(".finItem").last().click(function(){
    //   console.log('finItem function starts');
    //   $("ul#active").append("<li class='"+currentItem+" listItem'><span class='"+currentItem+"'>" + currentItem + "</span></li>");
    //   this.remove();
    //
    //   var filterTodo = finArray.filter(function(fruit) {
    //     var removedItem = $(el).attr("class");
    //     console.log(removedItem);
    //     return fruit.taskItem === removedItem;
    //   });
    //
    //   if (filterTodo.length > 0) newTask && finArray.pop(filterTodo);
    //   console.log(todoArray);
    //   console.log("that was todo. this is fin:");
    //   console.log(finArray);
    // });
    //

  });
});
