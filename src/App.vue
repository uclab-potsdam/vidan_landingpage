<template>
  <div id="app">
    <div class="content-body" v-scroll="scrollPosition">
      <div id="logo" class="container">
        <div class="logo-container" @click="scrollTop()">
          <div class="title-container">
            <img src="./assets/logo-colors.svg" class="sticky logo"/>
            <img src="./assets/logo-mobile.svg" class="mobile"/>
            <h1
                class="title"
                :style="`--text-axis:${scrollValue}; --letter-space:${scrollValue / 1000}px`">
                Vidan
            </h1>
          </div>
        </div>
      </div>
        <div id="content" class="container">
          <!-- Only showing component if data are present -->
          <Projects v-if="Content.projects.length"/>
          <Publications v-if="Content.events.length"/>
          <Calls v-if="Content.calls.length"/>
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

import Content from './assets/data/content.json'

export default {
  name: 'App',
  components: {
    Projects,
    Publications,
    Calls,
    Description,
    Team
  },
  data () {
    return {
      Content,
      logo: './assets/logo.svg',
      scrollValue: 0
    }
  },
  methods: {
    scrollTop () {
      window.scrollTo(0, 0)
    },
    scrollPosition () {
      this.scrollValue = window.scrollY
    }
  },
  directives: {
    scroll: {
      inserted: function (el, binding) {
        const f = function (evt) {
          if (binding.value(evt, el)) {
            window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
      }
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

      .logo-container:hover {
        .title-container {

          .title {
            transition: opacity 0.5s;
            opacity: 0;
          }
          img {
            transition: opacity 0.5s;
            opacity: 1;
          }
        }
      }

      .logo-container {
        // background-color: lightblue;
        position: sticky;
        position: -webkit-sticky; /* Safari */
        height: calc(100vh - 2%);
        padding-left: 25%;
        top: 2%;

        .title-container {
          // background-color: teal;
          .title {
            font-size: 10rem;
            transform-origin: 190px 260px;
            transform: rotate(-90deg);
            color: black;
            font-variation-settings: 'wght'  var(--text-axis);
            letter-spacing: var(--letter-space);
          }

          img {
            width: 70%;
            top: 20vh;
            height: auto;
            display: block;
            position: absolute;
            margin: 0 auto;
            opacity: 0;
          }
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

@media (max-width: 780px) {

  .content-body {
    display: inline-block;

    .container {
      &#logo {
        width: 100%;
        margin-bottom: 5%;
        .logo-container {
          padding: 0;
          width: 100%;
          .title-container {
            .title {
              display: none;
            }

            img {
              position: static;
              width: 50%;
              height: auto;
              display: block;
              opacity: 1;
              margin-left: 20px;
            }

            .logo {
              display: none;
            }
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
