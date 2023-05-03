<template>
  <div class="projects section-container">
    <Separator title="Activities / Outputs"/>
    <div class="container">
      <div v-for="(project, p) in projects" :key="p" class="project-container" :class="{soon: !project.link.length}">
        <a :href="project.link">
          <div>
            <img :src="getImgUrl(project.img)"/>
          </div>
          <div>
            <h5 class="category">{{ project.category }}</h5>
            <h2 class="project-title">{{ project.title }}</h2>
            <p class="description">{{ project.description }}</p>
            <img v-if="project.link !== ''" src="../assets/right-arrow.svg" class="arrow"/>
            <img v-if="project.link === ''" src="../assets/coming-soon.svg" class="soon"/>
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
  name: 'Projects',
  components: {
    Separator
  },
  data () {
    return {
      projects: Content.projects
    }
  },
  methods: {
    getImgUrl (img) {
      return require('../assets/images/' + img)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/_global.scss";

.projects {
  .container {
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;

    .project-container:hover {
      .soon {
        transition: opacity 1s;
        opacity: 1;
      }
    }

    .project-container {
      margin: 0 $margin 0 0;
      margin-bottom: 5%;
      width: calc(100% / 3.2);

      &.soon {
       pointer-events: none;
      }

      .project-title {
        margin: 0 !important;
      }

      .category {
        margin-top: 20px;
      }

      img {
        width: 100%;
        border: 0.5px solid #eee;

        &.soon {
          width: 40%;
          margin-top: $margin;
          opacity: 0.5;
          transition: opacity 1s;
          border: none;
        }

        &.arrow {
          max-width: 20%;
          margin-bottom: $margin;
          transition: margin-left 1s;
          border: none;
        }
      }

    }
  }
}

@media (max-width: 780px) {
  .projects {
    .container {
    display: inline-block;

    .project-container {
      margin: 30px auto;
      padding-left: 0px !important;
      width: 100%;

      img {
        width: 100%;

        &.soon {
          width: 20%;
          margin-top: $margin * 4;
          margin-left: 40%;
          opacity: 0.5;
        }

        &.arrow {
          width: 20%;
          margin-left: 40%;
          margin-top: $margin * 4;
        }
      }

    }
    }
  }
}
</style>
