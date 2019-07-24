const todos1 = document.querySelector('.todos');
const todo_manager = (todo) => {
    let html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo.todos}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
    `
    todos1.innerHTML+=html;
}

db.collection('mytodos').get().then((snapshot) => {
    //when we have the data
    snapshot.docs.forEach(element => {
        todo_manager(element.data());
    });
}).catch((err) => {
    console.log(err);
})