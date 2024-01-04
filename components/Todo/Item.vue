<template>
  <div class="todo-item">
    <InputCheckbox :label="item.title" :value="item.completed"></InputCheckbox>
    <ButtonIcon class="btn-secondary btn-icon-small" icon="/_nuxt/assets/icons/trash-can-regular.svg"></ButtonIcon>
  </div>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
}
</script>