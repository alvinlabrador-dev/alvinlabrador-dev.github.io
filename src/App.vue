<template>
  <teleport to="body"> 
    <Particles />
  </teleport>

  
</template>

<script>
import Particles from "@/components/Particles"
export default {
  name: 'App',
  components: {
    Particles
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: linear-gradient(to right, #f12711, #f5af19);
}

#app {
  min-height: 100vh;
}
</style>
