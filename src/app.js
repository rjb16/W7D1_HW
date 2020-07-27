import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: ['Do laundry', 'Clean bathroom', 'Vacuum'],
            newTodo: ''
        },
        methods: {
            saveNewTodo: function() {
                this.todos.push(this.newTodo);
            }
        }
    });
});