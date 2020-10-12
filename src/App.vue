<template>
  <div id="app">
    <div class="content-body">
      <div id="logo" class="container">
        <div class="logo-container">
          <img src="./assets/logo.svg"/>
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
    position: sticky;

    &#logo {
      border: 1px solid lightblue;
      width: 15%;
      .logo-container {
        img {
          width: 100px;
          display: block;
          margin: 0 auto;
        }
      }
    }

    &#content {
      background-color: lightblue;
      width: 90%;

      margin-left: 2%;
      padding-left: 2%;
    }
  }
}

</style>
