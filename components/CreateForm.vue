<template>
  <form @submit.prevent="submit" class="search-form" action="">
    <InputText v-model="title" class="w-80"></InputText>
    <Button type="submit" class="btn-primary btn-medium" label="Add"></Button>
  </form>
</template>

<script>
import TodoService from "~/services/todo.service.js";

export default {
  data() {
    return {
      title: ""
    }
  },
  methods: {
    submit() {
      if (!this.title) {
        return;
      }
      let data = {
        userId: 1,
        title: this.title,
        completed: false
      }
      TodoService.createRecord(data)
          .then((response) => {
            this.$emit('created', response.data)
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
}
</script>