
<template>
  <section id="projects" class="projects">
    <div class="projects-content">
      <h3>Checkout some of my works below</h3>

      <carousel :items-to-show="3">
        <slide v-for="(project, index) in projects" :key="index">
          <div class="project">
            <h6 class="project-title">{{ project.title }}</h6>
            <img :src="project.image" :alt="project.title" />
            <a :href="project.link">View Project</a>
          </div>
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>

    </div>
    <a href="#" class="intro-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="26.196" height="24.935" viewBox="0 0 26.196 24.935">
        <path id="Path_1" data-name="Path 1" d="M27.088-11.837a2.236,2.236,0,0,0-.622-1.53L25.2-14.628a2.236,2.236,0,0,0-1.53-.622,2.165,2.165,0,0,0-1.513.622L17.218-9.685V-21.522a2.167,2.167,0,0,0-2.152-2.152H12.913a2.167,2.167,0,0,0-2.152,2.152V-9.685L5.818-14.628A2.165,2.165,0,0,0,4.3-15.25a2.236,2.236,0,0,0-1.53.622L1.53-13.367a2.178,2.178,0,0,0-.639,1.53,2.11,2.11,0,0,0,.639,1.513L12.476.639a2.165,2.165,0,0,0,1.513.622,2.236,2.236,0,0,0,1.53-.622L26.465-10.324A2.165,2.165,0,0,0,27.088-11.837Z" transform="translate(-0.891 23.674)" fill="#fff"/>
      </svg>
    </a>
  </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
export default {
  data() {
    return {
      projects: [
        {
          title: 'Project title',
          image: 'https://picsum.photos/300',
          link: '#'
        },
        {
          title: 'Project title 2',
          image: 'https://picsum.photos/300',
          link: '#'
        },
        {
          title: 'Project title 3',
          image: 'https://picsum.photos/300',
          link: '#'
        },
        {
          title: 'Project title',
          image: 'https://picsum.photos/300',
          link: '#'
        },
        {
          title: 'Project title 2',
          image: 'https://picsum.photos/300',
          link: '#'
        },
        {
          title: 'Project title 3',
          image: 'https://picsum.photos/300',
          link: '#'
        },
      ]
    }
  },
  components: {
    Carousel, Navigation, Slide
  }
}
</script>

<style lang="scss" scoped>

.intro-arrow {
  @include arrow-link;
  opacity: 1;
}

</style>