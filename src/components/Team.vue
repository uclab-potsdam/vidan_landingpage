<template>
  <div class="team section-container">
    <div class="section">
        <div class="label category">Team</div>
        <div v-for="(member, m) in team" :key="m" class="team-members">
        <div class="single-member">
          <p class="description">{{member.name}}, {{member.role}}</p>
        </div>
      </div>
    </div>
    <div class="partners-funding">
      <div class="section">
        <div class="label category">Partners</div>
        <div class="logos">
          <a href="https://uclab.fh-potsdam.de/"><img src="../assets/logos/uclab_logo.svg"/></a>
          <a href="https://www.fh-potsdam.de/"><img src="../assets/logos/fhp_logo.svg"/></a>
          <a href="https://civity.de/en/"><img src="../assets/logos/civity_logo.svg"/></a>
          <a href="https://taz.de"><img id="taz" src="../assets/logos/taz-logo.png"/></a>
        </div>
      </div>
      <div class="section">
        <div class="label category">Funding</div>
        <div class="logos">
          <a href="https://www.bmbf.de"><img src="../assets/logos/bmbf_logo.svg"/></a>
        </div>
      </div>
      <div class="section">
        <div class="imprint">
          <a href="https://www.fh-potsdam.de/impressum/">Imprint</a> &nbsp;·&nbsp; <a href="https://www.fh-potsdam.de/datenschutzhinweis/">Privacy policy</a>
          </div>
      </div>
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
@import "@/style/_global.scss";

.team {

  .label {
    border-bottom: 1px solid black;
    margin-bottom: 10px !important;
  }

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
    // display: inline-flex;
    margin-top: 5%;

    .section {
      margin-right: $margin * 4;
      margin-top: 5%;

      .label {
        border-bottom: 1px solid black;
        margin-bottom: 10px !important;
      }

      .logos {
        margin-top: 20px;
        img {
          width: 150px;
          margin-top: 30px;
          margin-right: 100px;
          vertical-align: top;
        }

        #taz {
          width: 80px;
        }
      }
    }

    .section {
      .imprint {
        a {
          .mastodon, .twitter {
            display: inline-block;
            width: 1rem;
            height: auto;
            margin-bottom: -.3rem;
            padding-left: .25rem;
          }
        }
      }
    }

  }
  
}

@media (max-width: 670px) {
  .team {
    .partners-funding {
      display: inline-block;

      .logos {
        width: 100%;
        img {
          width: 50px;
          margin: 30px 0;
        }
      }
    }
  }
}
</style>
