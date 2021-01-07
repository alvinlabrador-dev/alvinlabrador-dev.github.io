<template>
  <section id="about" class="about">
    <div class="about-content">
      <h3 class="about-heading">About Me</h3>
      <p>My name is Alvin Labrador. I'm a <strong>front-end developer and graphic artist</strong> based in the Philippines. I have over <strong>9 years of experience</strong> in designing, building, and maintaining <strong>responsive websites</strong>. I am proficient in <strong>HTML, CSS, Javascript;</strong> using modern libraries and frameworks. I always aim to give <strong>quality</strong> output with <strong>time efficiency</strong>.</p>
      <ul>
        <li>
          <a class="link link--bordered" href="https://www.dropbox.com/s/du0nxgp06eucgn7/Alvin%20Labrador.pdf?dl=1" target="_blank">Download RÉSUMÉ</a>
        </li>
        <li>
          <a class="link" href="#work">Check my work</a>
        </li>
        <li>
          <a class="link link--shadow-accent" href="#contact">Get in touch</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .about {
    min-height: 100vh;
    padding: 10vw 9vw;
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;

    &-heading {
      font-size: 1.875rem;
      text-transform: uppercase;
      @include accent-shadow;
      @include font-bold;
      margin: 0 0 1rem;

      @media screen and (min-width: 768px) and (min-width: 600px) {
        font-size: 3rem;
      }
    }

    &-content {
      width: 100%;
    }
  }

  p {
    margin: 0 0 1.5em;
    max-width: 65.9375rem;

    @media screen and (min-width: 768px) and (min-width: 600px) {
      line-height: 1.8;
      margin: 0 0 3rem;
    }

    @media screen and (min-width: 1000px) {
      font-size: 1.25rem;
    }
  }

  ul {
    list-style: none;
    margin: 0 0 2rem;
    padding: 0;
    transition: .5s;

    @media screen and (min-width: 700px) {
      display: flex;
      align-items: stretch;
      justify-content: flex-start;
      max-width: 53.125rem;
    }
  }

  li {
    margin: 0 0 1em;
    transition: .5s;

    @media screen and (min-width: 992px) and (min-width: 600px) {
      width: 100%;
      padding-right: 1rem;
    }
  }

  .link {
    display: block;
    width: 15.625rem;
    padding: 0.9375rem 1.25rem;
    text-align: center;
    @include font-bold;
    color: $grey;
    text-decoration: none;
    text-transform: uppercase;
    background:  $cta;
    transition: .5s;
    border: 0.25rem solid transparent;

    @media screen and (min-width: 700px) {
      font-size: .8rem;
      width: 13.125rem;
      margin-right: .8rem;
    }

    @media screen and (min-width: 992px) and (min-width: 600px) {
      font-size: 1.1rem;
      width: 100%;
    }

    &:hover {
      background: $grey;
      color: $cta;
    }

    &--bordered {
      border-color: $cta;
      background: none;
    }

    &--shadow-accent {
      @include accent-shadow(0.3, true);
      background: $grey;
      color: $white;

      &:hover {
        @include accent-shadow(0.6, true);
        color: $white;
      }
    }
  }
</style>