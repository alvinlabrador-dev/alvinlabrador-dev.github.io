<template>
  <section id="intro" class="intro">
    <div class="intro-content" ref="intro-content">
      <div class="intro-deco--wrap" ref="intro-deco" data-depth="0.2">
        <span class="intro-deco">{{ decoText }}</span>
      </div>
      <div class="parallax-section" ref="intro-heading" data-depth="0.1">
        <h1 class="intro-heading">{{ heading }}</h1>
      </div>
      <div class="parallax-section" ref="intro-subheading" data-depth="0.4">
        <h2 class="intro-subheading">{{ subHeading }}</h2>
      </div>
    </div>
    <a :href="sectionTarget" class="intro-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="26.196" height="24.935" viewBox="0 0 26.196 24.935">
        <path id="Path_1" data-name="Path 1" d="M27.088-11.837a2.236,2.236,0,0,0-.622-1.53L25.2-14.628a2.236,2.236,0,0,0-1.53-.622,2.165,2.165,0,0,0-1.513.622L17.218-9.685V-21.522a2.167,2.167,0,0,0-2.152-2.152H12.913a2.167,2.167,0,0,0-2.152,2.152V-9.685L5.818-14.628A2.165,2.165,0,0,0,4.3-15.25a2.236,2.236,0,0,0-1.53.622L1.53-13.367a2.178,2.178,0,0,0-.639,1.53,2.11,2.11,0,0,0,.639,1.513L12.476.639a2.165,2.165,0,0,0,1.513.622,2.236,2.236,0,0,0,1.53-.622L26.465-10.324A2.165,2.165,0,0,0,27.088-11.837Z" transform="translate(-0.891 23.674)" fill="#fff"/>
      </svg>
    </a>
  </section>
</template>

<script>
import Parallax from "parallax-js"
export default {
  props: {
    decoText: {
      type: String,
      default: "Hi!"
    },
    heading: {
      type: String,
      default: "I'm Alvin"
    },
    subHeading: {
      type: String,
      default: "An experienced front-end developer"
    },
    sectionTarget: {
      type: String, 
      default: '#about'
    }
  },
  data() {
    return {
      parallaxInstance: ''
    }
  },
  mounted() {
    // trigger parallax scene
    setTimeout(() => {
      this.triggerScene();
    }, 2000);
  },
  methods: {
    triggerScene() {
      const scene = this.$refs['intro-content'];
      const parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        pointerEvents: true
      });
      parallaxInstance.friction(0.2, 0.2);
      this.removeStyles();
    },
    removeStyles() {
      // remove added unecessary styles from parallax-js
      const refs = this.$refs;

      for(let ref in refs) {
        refs[ref].style.removeProperty('display');
        refs[ref].style.removeProperty('top');
        refs[ref].style.removeProperty('left');
        refs[ref].style.removeProperty('position');
      }
    },
  }
}
</script>

<style scoped lang="scss">
  .intro {
    height: 100vh;
    @include flex-center;
    text-align: center;
    padding: 2rem;
    @include font-bold;
    text-transform: uppercase;
    position: relative;

    &-content {
      position: relative;
      display:inline-block;
      margin-top: -20vh;

      @media screen and (min-width: 1440px) {
        margin-top: -10vh;
      }
    }

    &-deco {
      min-width: 4.1rem;
      min-height: 4.1rem;
      border-radius: 100%;
      @include flex-center;
      background: $cta-rgb;
      transform: rotate(-15deg);
      color: $grey;
      font-size: 1.5rem;
      @include font-bold;
      text-transform: none;
      animation: zoomDrop .5s ease-out forwards;

      &--wrap {
        position: absolute;
        top: -2.2rem;
        left: -1.8rem;
        z-index: 4;
      }

      @media screen and (max-height: 414px) {
        width: 10vh;
        height: 10vh;
      }

      @media screen and (min-width: 768px) {
        width: 5rem;
        height: 5rem;
        font-size: 2.3rem;
      }
    }

    &-heading {
      font-size: 3rem;
      margin: 0 0 .2rem;
      position: relative;
      @include accent-shadow;
      white-space: nowrap;
      overflow: hidden;
      width: 0;
      animation: revealFromleft .8s .3s ease-out forwards;

      @media screen and (min-width: 360px) {
        font-size: 3.5rem;
      }

      @media screen and (min-width: 768px) {
        font-size: 6rem;
      }
    }

    &-subheading {
      font-size: .8rem;
      background: $scarlet;
      display: inline-block;
      padding: .5rem;
      opacity: 0;
      transform: skewX(-10deg) translateX(1rem);
      animation: fromLeft .5s 1.2s cubic-bezier(.35,.58,0,1.57) forwards;

      @media screen and (min-width: 768px) {
        font-size: 1.4rem;
        transform: skewX(-10deg) translateX(2rem);
      }
    }

    &-arrow {
      @include arrow-link;
      position: absolute;
      bottom: 3rem;
      left: 50%;
      margin: 0 0 0 -1.5625rem;
      opacity: 0;
      animation: fadeInTop .5s 1.2s ease-out forwards;

      @media screen and (min-width: 768px) {
        margin: 0 0 0 -2rem;
      }

      @media screen and (min-width: 768px) and (min-height: 550px) {
        bottom: 10rem;
      }

    }
  }
</style>