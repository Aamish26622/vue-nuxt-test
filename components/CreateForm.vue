<template>
  <form @submit.prevent="submit" class="search-form" action="">
    <Input type="text" v-model="title" class="w-80"></Input>
    <Button :disabled="submitting" type="submit" class="btn-primary btn-medium" label="Add"></Button>
  </form>
</template>

<script>
import TodoService from "~/services/todo.service.js";

export default {
  data() {
    return {
      title: "",
      submitting: false,
    }
  },
  methods: {
    submit() {
      if (!this.title) {
        return;
      }
      this.submitting = true
      TodoService.createRecord({
        userId: 1,
        title: this.title,
        completed: false
      })
          .then((response) => {
            this.title = "";
            this.$emit('created', response.data)
          })
          .catch((error) => {
            console.log(error)
          })
          .finally(() => {
            this.submitting = false;
          })
    }
  }
}
</script>