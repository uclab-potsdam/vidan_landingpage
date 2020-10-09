<template>
  <div class="description">
    <Separator title="On VIDAN"/>
  </div>
</template>

<script>
import Separator from './Separator.vue'

export default {
  name: 'Description',
  components: {
    Separator
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.description {
  background-color: pink;
}

</style>
