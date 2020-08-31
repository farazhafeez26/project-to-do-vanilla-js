var todos = []

var form = document.getElementById("form")
var input = document.getElementById("todo-item")
var todoList = document.getElementById("todo-list")


function showtodos() {
    // clean to do list
    todoList.innerHTML = ""
    for (var i = 0; i <= todos.length; i++) {
        var todo = document.createElement("P")
        todo.innerText = todos[i]
        todoList.appendChild(todo)
    }


}




form.addEventListener("submit", function (event) {                              // event     
    event.preventDefault()   //to avoid page refresh on form submit
    var todoText = input.value
    todos.push(todoText)
    showtodos()
})


