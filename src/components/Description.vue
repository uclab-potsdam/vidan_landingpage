<template>
  <div class="description section-container">
    <Separator title="About Project"/>
    <div class="container">
        <p class="description vidan-description">
            At the intersection of data visualization, digital storytelling,
            and urban infrastructure, VIDAN (Visual and Dynamic Arrangements of Narratives - Visuelle und dynamische Arrangements von Nachrichten)
            was an interdisciplinary research project devoted to the design, development,
            and evaluation of data-based article formats. The aim was to create novel
            interaction and visualization techniques for the visual explanation and
            interactive exploration of complex data. The structure of news articles
            has hardly changed with the spread of online media. While some newsrooms
            have started to invest into the creation of long-reads and so-called
            scrollytelling pieces, the bulk of articles online is relatively conventional.
            Though social media are playing an increasing role in the distribution,
            news articles have remained mostly static, linear, and isolated from each other. The content of
            articles usually remains fixed and makes no reference to the current temporal
            and spatial situation of the reader. To develop and evaluate innovative
            techniques of visualizing news articles and narratives,
            the VIDAN research project experiments with new formats of article
            preparation and presentation. In close cooperation with domain experts
            and analysts and within the framework of user-centered design,
            concepts of data-based storytelling have been investigated, developed in the
            form of functional prototypes, and evaluated with authors and readers.
            The city has served as a framework to investigate how data-based narratives
            are changing our ways to analyze and communicate complex issues and
            their consequences. Cities are complex organisms, different stakeholders
            and entities shape its form and rhythm. As humans and citizens we experience
            the city everyday by navigating its complexity and moving through it.
            In the last few years, our cities have become more and more intertwined
            with technologies that help us navigate this complexity and services
            that enrich our city experience. Those technologies are also generating
            a great amount of data and information that can be used to investigate
            the city further. Over the course of 3.5 years, the sectors mobility,
            water, and waste have been examined as integral parts of urban infrastructure.
        </p>
    </div>
  </div>
</template>

<script>
import Separator from './Separator.vue'

export default {
  name: 'Description',
  components: {
    Separator
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.description {
    padding-right: 0.5em;
  .container {
    width: 96%;
    .vidan-description {
        column-count: 2;
        column-gap: 50px;
    }
  }
}
@media (max-width: 670px) {
    .description {
        padding-right: 0.5em;
      .container {
        .vidan-description {
            column-count: 1;
        }
      }
    }
}
</style>
