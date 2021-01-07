<template>
  <teleport to="body"> 
    <particles />
  </teleport>
  <section-intro />
  <section-about />
</template>

<script>
import Particles from "@/components/Particles"
import SectionIntro from "@/components/SectionIntro"
import SectionAbout from "@/components/SectionAbout"
import WebFont from "webfontloader"
export default {
  name: 'App',
  components: {
    Particles,
    SectionIntro,
    SectionAbout
  },
  mounted() {
    WebFont.load({
      google: {
        families: ['Montserrat:900', 'Nunito Sans:200,400,700&&display=swap']
      }
    });
  }
}
</script>


<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  background: linear-gradient(45deg, $gradient-from, $gradient-to);
  background-attachment: fixed;
  font-family: $font;
  color: $white;
}

#app {
  min-height: 100vh;
  z-index: 2;
  position: relative;
}

.bold {
  @include font-bold
}
</style>
