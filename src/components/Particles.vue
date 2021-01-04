<template>
  <div id="particles-js"></div>
</template>

<script>
// plugins 
import "particles.js"
import particlesJson from "@/plugins/config/particles.json"
export default {
  name: 'Particles',
  methods: {
    initParticlesJS() {
      window.particlesJS("particles-js", particlesJson);
    }
  },
  mounted() {
    this.initParticlesJS();
  },
}
</script>

<style lang="scss">
  #particles-js {
    position: fixed;
    top: 0;

    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
