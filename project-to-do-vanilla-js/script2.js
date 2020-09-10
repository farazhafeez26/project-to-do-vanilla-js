var todos = []

var form = document.getElementById("form")
var input = document.getElementById("todo-item")
var todoList = document.getElementById("todo-list")

// should be able to delete items 
// should store items to local storage

// 2 
function showtodos() {
    // clean to do list
    document.getElementById("todo-list").innerHTML = ""
    for (var i = 0; i < todos.length; i++) {
        var todo = document.createElement("P")
        todo.innerText = todos[i]
        document.getElementById("todo-list").appendChild(todo)
    }


}
// 1 
form.addEventListener("submit", function (event) {                              // event     
    event.preventDefault()   //to avoid page refresh on form submit
    var todoText = document.getElementById("todo-item").value
    todos.push(todoText)
    showtodos()
})

