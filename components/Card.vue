<template>
  <div class="rounded-white-card">
    <p class="app-heading">Todo app</p>
    <CreateForm @created="insertTodo"></CreateForm>
    <TodoItems @deleteItem="deleteTodo" :items="items"></TodoItems>
  </div>
</template>

<script>
import TodoService from "~/services/todo.service.js";

export default {
  data() {
    return{
      items: []
    }
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      TodoService.getRecords()
          .then((response) => {
            this.items = response.data
          })
          .catch((error) => {
            console.log(error)
          })
    },
    insertTodo(newTodo){
      this.items.unshift(newTodo)
    },
    deleteTodo(data){
      TodoService.deleteRecord(data.item_id)
          .then(() => {
            this.items.splice(data.index,1);
          })
    }
  }
}
</script>