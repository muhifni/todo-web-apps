document.addEventListener('DOMContentLoaded', ()=>{
    const submitForm = document.getElementById('form');

    submitForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        addTodo();
        submitForm.reset();
    })

    if(isStorageExist()){
        loadDataFromStorage();
    }

    document.addEventListener('ondatasaved', ()=> {
        console.log("Data berhasil disimpan :)");
    })

    window.addEventListener('load', ()=>{
        console.log('refreshDataFromTodos')
        refreshDataFromTodos();        
    })
});