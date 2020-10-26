<template>
  <div class="card">
    {{content}}
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
