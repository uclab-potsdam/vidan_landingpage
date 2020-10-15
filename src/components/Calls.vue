<template>
  <div class="calls section-container">
    <Separator title="Calls"/>
    <div class="container">
      <div v-for="(call, c) in calls" :key="c" class="call" :class="{active: call.open}">
        <a :href="getImgUrl(call.link)">
          <div class="inner-container">
            <h1>{{call.title}}</h1>
            <img v-if="call.open" src="../assets/right-arrow-yellow.svg" class="navigation"/>
            <img v-if="!call.open" src="../assets/closing-x.svg" class="navigation"/>
          </div>
        </a>
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
  },
  methods: {
    getImgUrl (pdf) {
      return 'calls/' + pdf + '.pdf'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calls {

  .container {

    .call:hover {
      transition: right color, 1s;

      &.active {
        transition: box-shadow 1s;
        box-shadow: -5px 5px 0px #FB9500;

        h1 {
          color: #FB9500;
        }
      }

      .inner-container {

        .navigation {
          right: 80px;
        }

      }
    }

    .call {
      background-color: white;
      border: 1px solid grey;
      margin: 40px;

      .inner-container {
        display: inline-flex;

        .navigation {
          position: absolute;
          right: 100px;
          transition: right 1s;
          align-self: center;
        }
      }

      &.active {
        cursor: pointer;
        box-shadow: -10px 10px 0px #FFCA7C;
        border: 1px solid #FFCA7C;
        transition: box-shadow 1s;

        h1 {
          cursor: pointer;
          transition: color 1s;
          color: black;
        }
      }

      h1 {
        cursor: not-allowed;
        color: grey;
        padding: 5px 5px 5px 55px;
      }
    }
  }
}

@media (max-width: 670px) {
  .call {
    margin: 20px !important;
    .inner-container {
      width: 100%;
      display: inline-block !important;
      text-align: center;

      .navigation {
        display: none;
      }

      h1 {
        font-size: 18px;
        padding: 0 !important;
      }
    }

  }
}
</style>
