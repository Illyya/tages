<template>
  <h3 class="title-3">{{ name }}</h3>
</template>

<script>
export default {
  name: 'AppTitleH3',
  props: {
    name: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.title-3 {
  font-weight: 600;
}
</style>