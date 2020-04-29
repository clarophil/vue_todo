<template>
  <div id="todolist">
    <h1>Todo list</h1>
    <p>
      <button v-on:click="showCreate = !showCreate" >
        Create todo
      </button>
    </p>
    <div v-if="showCreate">
        <input type="text" v-model="todo.task" />
        <button v-on:click="create()">Save</button>
    </div>
    <div v-for="todo in todolist" v-bind:key="todo.idtask">
      <Todo v-bind:todo="todo" @event_delete="deleteTodo"  @event_update="update"></Todo>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";

export default {
  components: { Todo, CreateTodo },
  data() {
    return {
        todo :
        {
            id:0,
            task:"none",
            status: 0
        },
      todolist: [],
      //uri: "http://laboweb.ecam.be/api/tasks/",
      uri: "http://172.17.0.67:8000/api/tasks/",
      showCreate: false,
    };
  },
  methods: {
    get_todolist() {
      axios
        .get(this.uri)
        .then((response) => {
          this.todolist = response.data;
          console.log("call todolist");
          console.log(this.todolist);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    create() {
      axios.post(this.uri, this.todo).then((response) => {
        console.log(response);
        this.showCreate = false;
        this.get_todolist();
      })
      . catch(error => {
        console.log(error)
    });
      console.log("saved");
    },
    deleteTodo(id) {
        axios.delete(this.uri + id).then((response) => {
            // let index = this.todolist.map(todo => todo.idtask).indexOf(id);
            // console.log(index);
            this.get_todolist();
            console.log(response.data);
        })
      . catch(error => {
        console.log(error)
    });
      console.log("deleted item " + id);
    },
    update(todo) {
        console.log(todo)
        axios.put(this.uri + todo.idtask, todo).then((response) => {
           console.log(response.data);
        })
      . catch(error => {
        console.log(error)
    });
      console.log("update item " + todo.idtask);
    }
  },
  mounted() {
    console.log("mount");
    axios.get(this.uri).then((response) => {
      this.todolist = response.data;
    });
  },
};
</script>
<style>
#todolist {
    background-color: #a2b9bc;
    margin: 10px auto;
    padding: 10px;
    width: 500px;
}
button {
    color: #fff;
    text-decoration: none;
    background: #6b5b95;
    padding: 5px;
    border-radius: 5px;
    display: inline-block;
    border: none;
}
</style>
