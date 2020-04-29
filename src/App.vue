<template>
  <div id="app">
    <h1>Todo manager</h1>
    <TodoList></TodoList>
    <Footer></Footer>
  </div>
</template>

<script>
import TodoList from "./Todolist.vue";
import Footer from "./Footer.vue";
export default {
  name: "app",
  components: { TodoList, Footer },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app {
	font-family: Helvetica, Arial, sans-serif;
	text-align: center;
	color: #2c3e50;
	background-color: #878f99;
	margin: 10px auto;
	padding: 10px;
}
</style>
