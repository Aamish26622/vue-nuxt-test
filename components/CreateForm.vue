<template>
  <form class="search-form" action="">
    <InputText v-model="title" class="w-80"></InputText>
    <Button type="submit" class="btn-primary btn-medium"></Button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      title: ""
    }
  },
}
</script>