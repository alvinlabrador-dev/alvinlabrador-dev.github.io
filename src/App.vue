<template>
  <teleport to="body"> 
    <particles />
  </teleport>
  <section-intro />
</template>

<script>
import Particles from "@/components/Particles"
import SectionIntro from "@/components/SectionIntro"
import WebFont from "webfontloader"
export default {
  name: 'App',
  components: {
    Particles,
    SectionIntro
  },
  mounted() {
    WebFont.load({
      google: {
        families: ['Montserrat:900', 'Nunito Sans:200,400&&display=swap']
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
}

body {
  background: linear-gradient(45deg, $gradient-from, $gradient-to);
  font-family: $font;
  color: $white;
}

#app {
  min-height: 100vh;
  z-index: 2;
  position: relative;
}

.bold, strong {
  @include font-bold
}
</style>
