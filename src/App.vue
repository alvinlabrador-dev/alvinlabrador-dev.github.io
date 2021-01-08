<template>
  <teleport to="body"> 
    <particles />
  </teleport>
  <section-intro />
  <section-about />
  <section-projects />
</template>

<script>
import Particles from "@/components/Particles"
import SectionIntro from "@/components/SectionIntro"
import SectionAbout from "@/components/SectionAbout"
import SectionProjects from "@/components/SectionProjects"
import WebFont from "webfontloader"
export default {
  name: 'App',
  components: {
    Particles,
    SectionIntro,
    SectionAbout,
    SectionProjects
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


