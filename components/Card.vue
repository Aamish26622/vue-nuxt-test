<template>
  <div class="rounded-white-card">
    <p class="app-heading">Todo app</p>
    <CreateForm></CreateForm>
    <TodoItems :items="items"></TodoItems>
  </div>
</template>

<script>

export default {
  data() {
    return{
      items: [
        {
          title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
          checked: false
        },
        {
          title: "quo adipisci enim quam ut ab",
          checked: true
        },
      ]
    }
  },
}
</script>