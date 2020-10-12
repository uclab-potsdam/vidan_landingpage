<template>
  <div class="calls section-container">
    <Separator title="Open Calls"/>
    <div class="container">
      <div v-for="(call, c) in calls" :key="c" class="call" :class="{active: call.open}">
        <div class="inner-container">
          <h1>{{call.title}}</h1>
          <img v-if="call.open" src="../assets/right-arrow-yellow.svg" class="navigation"/>
          <img v-if="!call.open" src="../assets/closing-x.svg" class="navigation"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Separator from './Separator.vue'
import Content from '../assets/data/content.json'

export default {
  name: 'HelloWorld',
  components: {
    Separator
  },
  data () {
    return {
      calls: Content.calls
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calls {

  .container {

    .call {
      background-color: white;
      border: 1px solid grey;

      .inner-container {
        display: inline-flex;

        .navigation {
          position: absolute;
          right: 80px;
          align-self: center;
        }
      }

      &.active {
        box-shadow: -10px 10px 0px #FB9500;
        border: 1px solid #FB9500;
        h1 {
          color: black;
        }
      }

      margin: 40px;

      h1 {
        color: grey;
        padding: 5px 5px 5px 55px;
      }
    }
  }
}

</style>
