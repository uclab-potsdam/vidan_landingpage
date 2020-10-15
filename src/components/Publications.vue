<template>
  <div class="events section-container">
    <Separator title="Publications / Talks"/>
    <div class="container">
      <div v-if="events.length === 0">
        <p class="description">Nothing here yet.</p>
      </div>
      <!-- Happening only if data are found in the json events part-->
      <div v-if="events.length !== 0">
        <div v-for="(element, e) in events" :key="e">
          <div class="element-details">
            <h5 class="category">{{ element.category }},</h5>
            <h5 class="category">{{ element.venue }},</h5>
            <h5 v-for="(year, y) in element.year" :key="`${y}-year`" class="category">{{ year }},</h5>
            <h5 v-for="(author, a) in element.authors" :key="`${a}-author`" class="category">{{ author }}</h5>
          </div>
            <a href="#">
              <h1>{{ element.title }}<span><img src="../assets/share-arrow.svg"/></span></h1>
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Separator from './Separator.vue'
import Content from '../assets/data/content.json'

export default {
  name: 'Publications',
  components: {
    Separator
  },
  data () {
    return {
      events: Content.events
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/_global.scss";

.events {
  .container {
    width: 100%;
    margin-top: 10%;

    .element-details {
      display: inline-flex;

      h5 {
        padding-left: $margin * 2;
      }
    }
    h1 > span {
      display: inline-block;
      img {
        margin-left: $margin;
        width: 50%;
      }
    }
  }
}

</style>
