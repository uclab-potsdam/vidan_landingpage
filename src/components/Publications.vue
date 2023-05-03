<template>
  <div class="events section-container">
    <Separator title="Publications / Talks"/>
    <div class="container">
      <div v-if="events.length === 0">
        <p class="description">Nothing here yet.</p>
      </div>
      <!-- Happening only if data are found in the json events part-->
      <div v-if="events.length !== 0">
        <div v-for="(element, e) in events" :key="e" class="element-container">
            <a :href="element.link">
              <h2>{{ element.title }}<span><img src="../assets/share-arrow.svg"/></span></h2>
            </a>
            <div class="element-details">
                <h5 v-for="(author, a) in element.authors" :key="`${a}-author`" class="category">{{ author }},</h5>
                <h5 v-for="(year, y) in element.year" :key="`${y}-year`" class="category">({{ year }})</h5>
                <h5 class="category">{{ element.category }} for</h5>
                <h5 class="category">{{ element.venue }}</h5>
            </div>
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
    margin-top: 5%;

    .element-container {
      width: 95%;
      margin: 2.5% 0 0% 0;
      border-bottom: 1px dashed black;

      a > h2 {
        padding-right: 2%;
        margin-bottom: 1px;
      }
    }

    .element-details {
      display: inline-flex;
      flex-wrap: wrap;
      margin-bottom: 2%;
      width: 100%;

      h5 {
        padding-right: 5px;
        padding-top: 10px;
        white-space:nowrap;
      }
    }

    h2 > span {
      display: inline-block;
      img {
        margin-left: $margin * 2;
        width: 25%;
      }
    }
  }
}

@media (max-width: 670px) {
  .events {
    .container {
      .element-details {
        margin-top: 5%;
        margin-bottom: 5%;
        // display: initial;

        h5 {
          padding-top: 5px;
        }

        .category {
          font-size: 12px;
        }
      }
    }
  }
}

</style>
