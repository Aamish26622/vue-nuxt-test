<script setup lang="ts">
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/todos' })
</script>

<template>
  <div class="error-page">
    <div>
      <h2>{{ error.statusCode }}</h2>
      <Button @click="handleError" class="btn-secondary" label="Go to TODOs" />
    </div>
  </div>
</template>
