<template>
  <div class="team section-container">
    <Separator title="Team, Partners and Funding"/>
    <div v-for="(member, m) in team" :key="m" class="team-members">
      <div class="single-member">
        <p class="description">{{member.name}}, {{member.role}}</p>
      </div>
    </div>
    <div class="partners-funding">
      <img src="../assets/logos/uclab_logo.svg"/>
      <img src="../assets/logos/fhp_logo.svg"/>
      <img src="../assets/logos/civity_logo.svg"/>
      <img src="../assets/logos/bfbdf.png"/>
    </div>
  </div>
</template>

<script>
import Separator from './Separator.vue'
import Content from '../assets/data/content.json'

export default {
  name: 'Team',
  components: {
    Separator
  },
  data () {
    return {
      team: Content.team
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.team {

  .team-members {
    width: 100%;
    .single-member {
      display: inline-flex;
      p {
        margin-top: 0;
      }
    }
  }

  .partners-funding {
    margin-top: 10%;

    img {
      width: 150px;
      margin-right: 100px;
      vertical-align: top;
    }
  }
}
</style>
