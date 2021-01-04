<template>
  <section id="intro" class="intro">
    <div class="intro-content" ref="intro-content">
      <span class="intro-deco">{{ decoText }}</span>
      <h1 class="intro-heading" :data-heading="heading">{{ heading }}</h1>
      <h2 class="intro-subheading" >{{ subHeading }}</h2>
      <a :href="sectionTarget" class="intro-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="26.196" height="24.935" viewBox="0 0 26.196 24.935">
          <path id="Path_1" data-name="Path 1" d="M27.088-11.837a2.236,2.236,0,0,0-.622-1.53L25.2-14.628a2.236,2.236,0,0,0-1.53-.622,2.165,2.165,0,0,0-1.513.622L17.218-9.685V-21.522a2.167,2.167,0,0,0-2.152-2.152H12.913a2.167,2.167,0,0,0-2.152,2.152V-9.685L5.818-14.628A2.165,2.165,0,0,0,4.3-15.25a2.236,2.236,0,0,0-1.53.622L1.53-13.367a2.178,2.178,0,0,0-.639,1.53,2.11,2.11,0,0,0,.639,1.513L12.476.639a2.165,2.165,0,0,0,1.513.622,2.236,2.236,0,0,0,1.53-.622L26.465-10.324A2.165,2.165,0,0,0,27.088-11.837Z" transform="translate(-0.891 23.674)" fill="#fff"/>
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
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
    
  },
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
      position: absolute;
      top: -2.2rem;
      left: -1.8rem;
      z-index: 4;
      animation: zoomDrop .5s ease-out forwards;

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
      @include flex-center;
      width: 3.125rem;
      height: 3.125rem;
      position: fixed;
      bottom: 3rem;
      left: 50%;
      margin: 0 0 0 -1.5625rem;
      border-radius: 50rem;
      border: .4rem solid rgba(255,204,0, 0);
      box-shadow: 0 0 0 .4rem rgba(255,204,0, .4);
      transition: .5s;

      &:hover {
        box-shadow: 0 0 0 2rem rgba(255,255,255, 0);
        border: .4rem solid rgba(255,204,0, .4);
      }

      @media screen and (min-width: 768px) {
        position: relative;
        margin: 0 auto;
        top: 6rem;
        left: 0;
        width: 4rem;
        height: 4rem;
      }

      svg {
        width: 1.25rem;
        height: 1.25rem;

        @media screen and (min-width: 768px) {
          width: 1.5625rem;
          height: 1.5625rem;
        }
      }
    }
  }
</style>