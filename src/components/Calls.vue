<template>
  <div class="calls">
    <Separator title="Open Calls"/>
  </div>
</template>

<script>
import Separator from './Separator.vue'

export default {
  name: 'HelloWorld',
  components: {
    Separator
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calls {
  background-color: pink;
}

</style>
