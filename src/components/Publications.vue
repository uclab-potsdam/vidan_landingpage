<template>
  <div class="publications">
    <Separator title="Publications / Talks"/>
  </div>
</template>

<script>
import Separator from './Separator.vue'

export default {
  name: 'Publications',
  components: {
    Separator
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.publications {
  background-color: pink;
}

</style>
