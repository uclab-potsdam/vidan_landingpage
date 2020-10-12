<template>
  <div class="projects section-container">
    <Separator title="Projects and Activities"/>
    <div class="container">
      <div v-for="(project, p) in projects" :key="p" class="project-container">
        <a :href="project.link">
          <div>
            <img :src="getImgUrl(project.img)"/>
          </div>
          <div>
            <h5 class="category">{{ project.category }}</h5>
            <h2 class="project-title">{{ project.title }}</h2>
            <p class="description">{{ project.description }}</p>
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
      return require('../assets/images/' + img + '.png')
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

    .project-container {
      margin: 0 $margin;
      width: calc(100% / 3);

      img {
        width: 100%;
      }
    }
  }
}
</style>
