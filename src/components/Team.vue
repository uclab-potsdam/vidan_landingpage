<template>
  <div class="team">
    <Separator title="Team, Partners and Funding"/>
  </div>
</template>

<script>
import Separator from './Separator.vue'

export default {
  name: 'Team',
  components: {
    Separator
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.team {
  background-color: pink;
}
</style>
