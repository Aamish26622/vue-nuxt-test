<template>
  <div class="card-parent">
    <div class="rounded-white-card">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import TodoService from "~/services/todo.service.js";

export default {}
</script>