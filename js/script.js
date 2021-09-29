document.addEventListener('DOMContentLoaded', ()=>{
    const submitForm = document.getElementById('form');

    submitForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        addTodo();
        submitForm.reset();
    })
})