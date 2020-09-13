'use strict';

function initTodo() {
    const $todoForm = document.querySelector('#todo_form');
    const $hide = document.querySelector('#hide_btn');
    const $todoList = document.querySelector('.todo_list');
    let todos = [];

    $todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newItem = {
            id: Date.now(),
            value: e.target.elements.todo.value,
            done: false
        };

        todos.push(newItem);

        const $todoItem = document.createElement('li');
        $todoItem.className = 'list_item'

         $todoItem.innerHTML = `
            <span>${newItem.value}</span>
             <button class="done_btn" type="button">Done</button>       
            <button class ="delete_btn" type="button">Delete</button>
         `;
        $todoItem.querySelector('.done_btn')
            .addEventListener('click', function() {
                const index = todos.findIndex(el => newItem.id === el.id);

                todos[index] = {
                    ...todos[index],
                    done: !todos[index].done
                };
                
                this.closest('.list_item')
                    .classList
                    .toggle('done')
            });

        $todoItem.querySelector('.delete_btn')
            .addEventListener('click', function() {
                const index = todos.findIndex(el => newItem.id === el.id);

                todos.splice(index, 1)
                this.closest('.list_item').remove();

                console.log(todos);
            });
            
            $todoList.append($todoItem);

            $todoForm.reset();
    });
    $hide.addEventListener('click', function() {
        $todoList.classList.toggle('hide')
    });
}

initTodo();
