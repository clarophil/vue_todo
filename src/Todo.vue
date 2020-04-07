<template>
    <div class="todo">
            <h3><span v-if="showInput==false">{{todo.task}} <button v-on:click="showInput=true">Update</button> </span></h3>
            <span v-if="showInput">
                
                <input type="text" v-model="todo.task" >
                <button v-on:click="updateTask(todo)">Save</button> 
            </span>
            <p>Status : <span v-if="todo.status==1">Completed</span><span v-if="todo.status==0">Uncompleted</span></p>
            <p>Date : {{todo.created_at | formatDate }}</p>
            <button v-on:click="deleteTodo(todo.idtask)">Remove</button>
            <button v-on:click="updateTodo(todo)">
                <span v-if="todo.status==0">Complete</span><span v-if="todo.status==1">Uncomplete</span>
            </button>
    </div> 
</template>
<script>
    export default {
        name: 'Todo',
        props: ['todo'],
        data() {
            return {
                showInput: false
            }
        },
        methods: {
            deleteTodo(id) {
                console.log(id)
                this.$emit('event_delete', id);
            },
            updateTodo(todo) {
                if (todo.status == 0 ) todo.status = 1; else todo.status = 0 ;
                this.$emit('event_update', todo);
            },
            updateTask(todo) {
                this.$emit('event_update', todo);
                this.showInput = false;
            }
        }
    }
</script>
<style >
    .todo {
        background-color:lightgrey;
        width: 300px;
        margin: 5px auto;
        padding : 5px;
    }
</style>