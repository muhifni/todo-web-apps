const STORAGE_KEY = "TODO_APPS";

let todos = [];

// fungsi utk mengecek apakah browser mendukung web storage
function isStorageExist() {
    if(typeof(Storage) === undefined){
        alert("Browser kamu tidak mendukung local storage");
        return false;        
    }
    return true;
}

// fungsi utk menyimpan data kedalam web storage
function saveData(){
    // JSON.stringify() berfungsi utk mengubah array menjadi string
    const parsed = JSON.stringify(todos);
    // console.log("parsed: " + parsed)
    localStorage.setItem(STORAGE_KEY, parsed);

    // membuat event baru
    document.dispatchEvent(new Event('ondatasaved'));
}

// fungsi utk menampilkan data dari web storage
function loadDataFromStorage(){
    const serializeData = localStorage.getItem(STORAGE_KEY);
    
    // JSON.parse() berfungsi utk mengubah string menjadi JSON
    let data = JSON.parse(serializeData);

    if(data !== null){
        todos = data;
    }

    document.dispatchEvent(new Event('ondataloaded'));
}

// fungsi utk menyimpan perubahan ke web storage
function updateDataToStorage(){
    if(isStorageExist()){
        saveData();
    }
}

/* Fungsi yang digunakan untuk membuat objek TODO baru dari 
    beberapa parameter yang telah ditentukan. */
function composeTodoObject(task, timestamp, isCompleted){
    return {
        id : +new Date(),
        task,
        timestamp,
        isCompleted
    };
}

// Mencari objek task TODO yang ada pada array todos berdasarkan ID
function findTodo(todoId){
    for(todo of todos){
        if(todo.id === todoId){
            return todo;
        }
    }
    return null;
}

function findTodoIndex(todoId){
    let index = 0;
    for (todo of todos){
        if(todo.id === todoId){
            return index;
        }
        index++;
    }
    return -1;
}

function refreshDataFromTodos(){
    const listUncompleted = document.getElementById(UNCOMPLETED_LIST_TODO_ID);
    const listCompleted = document.getElementById(COMPLETED_LIST_TODO_ID);

    for(todo of todos){
        const newTodo = makeTodo(todo.task, todo.timestamp, todo.isCompleted);
        newTodo[TODO_ITEMID] = todo.id;

        if(todo.isCompleted){
            listCompleted.append(newTodo);
        } else {
            listUncompleted.append(newTodo);
        }
    }
}