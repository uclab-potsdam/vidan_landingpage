<template>
  <div id="app">
    <meta property="og:url" content="https://uclab.fh-potsdam.de/vidan/">
    <div class="content-body" v-scroll="scrollPosition" :style="`--text-axis:${scrollValue};`">
      <div id="logo" class="container">
        <div class="logo-container" @click="scrollTop()">
            <Logo class="sticky logo" :scroll="scrollValue"/>
            <!-- <img src="./assets/logo-colors.svg" class="sticky logo"/> -->
            <img src="./assets/logo-mobile.svg" class="mobile"/>
        </div>
      </div>
        <div id="content" class="container">
          <div class="header">
            <p class="description">
              Collaborative research on <i>Visual and Dynamic Arrangements of Narratives</i> from 2019 until 2023
              at UCLAB, FH Potsdam —
              <a href="https://twitter.com/hashtag/vidanfhp?src=hashtag_click">
                #vidanfhp
              </a>
            </p>
          </div>
          <!-- Only showing component if data are present -->
          <Projects v-if="Content.projects.length"/>
          <Publications v-if="Content.events.length"/>
          <!-- <Calls v-if="Content.calls.length"/> -->
          <Description/>
          <Team/>
        </div>
      </div>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import Projects from './components/Projects.vue'
import Publications from './components/Publications.vue'
// import Calls from './components/Calls.vue'
import Description from './components/Description.vue'
import Team from './components/Team.vue'

import Content from './assets/data/content.json'

export default {
  name: 'App',
  components: {
    Logo,
    Projects,
    Publications,
    // Calls,
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

      .logo-container {
        position: sticky;
        position: -webkit-sticky; /* Safari */
        height: calc(100vh - 2%);
        padding-left: 15%;
        top: 5%;

        .logo {
          width: 100%;
          top: 10px;
          height: auto;
          opacity: 1;
        }

        .mobile {
          display: none;
        }
      }
    }

    &#content {
      .header {
        // margin-bottom: 5%;
        p.description {
          margin: 0;
          margin-bottom: 10px;

          a {
            text-decoration: underline;
          }
        }
      }
      width: 92%;
      margin-left: 2%;
      margin-right: 2%;
      padding-left: 2%;
      margin-top: 2%;

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

            img.mobile {
              position: static;
              width: 50%;
              height: auto;
              display: block;
              opacity: 1;
              margin-left: 10px;
            }

            .logo {
              display: none;
            }
        }
      }

      &#content {
        width: 100%;
        margin-left: 0;
        padding-left: 0;

        .header {
          p.description {
            font-size: 10px;
            margin: 0;
            display: none;
          }
        }

        .section-container {
          margin-bottom: 20%;
        }
      }
    }
  }
}

</style>
