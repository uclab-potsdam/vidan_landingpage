<template>
  <div id="app">
    <div class="content-body">
      <div id="logo" class="container">
        <div class="logo-container" @click="scrollTop()">
          <img src="./assets/logo.svg" class="sticky"/>
        </div>
      </div>
        <div id="content" class="container">
          <Projects/>
          <Publications/>
          <Calls/>
          <Description/>
          <Team/>
        </div>
      </div>
  </div>
</template>

<script>
import Projects from './components/Projects.vue'
import Publications from './components/Publications.vue'
import Calls from './components/Calls.vue'
import Description from './components/Description.vue'
import Team from './components/Team.vue'

export default {
  name: 'App',
  components: {
    Projects,
    Publications,
    Calls,
    Description,
    Team
  },
  methods: {
    scrollTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss">
@import "@/style/_global.scss";

.content-body {
  // background-color: blue;
  width: 100%;
  display: inline-flex;
  margin-top: 2%;

  .container {

    &#logo {
      width: 15%;
      .logo-container {
        position: sticky;
        position: -webkit-sticky; /* Safari */
        top: 2%;

        img {
          width: 120px;
          height: auto;
          display: block;
          margin: 0 auto;
        }
      }
    }

    &#content {
      width: 90%;

      margin-left: 2%;
      padding-left: 2%;

      .section-container {
        margin-bottom: 10%;
      }
    }
  }
}

@media (max-width: 670px) {

  .content-body {
    display: inline-block;

    .container {
      &#logo {
        width: 100%;
        margin-bottom: 5%;
        .logo-container {

          img {
            width: 50px;
            height: auto;
            display: block;
            margin: 0 auto;
          }
        }
      }

      &#content {
        width: 100%;
        margin-left: 0;
        padding-left: 0;

        .section-container {
          margin-bottom: 20%;
        }
      }
    }
  }
}

</style>
