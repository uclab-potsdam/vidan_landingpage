<template>
  <div class="projects">
    <Separator title="Projects and Activities"/>
  </div>
</template>

<script>
import Separator from './Separator.vue'

export default {
  name: 'Projects',
  components: {
    Separator
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projects {
  background-color: pink;
}
</style>
