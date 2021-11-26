<template>
  <div class="main-content">
    <section id="home" class="home-page">
      <div class="home-left">
        <h1 class="title">Béatrice Moulin Beltrame</h1>
        <h3>
          <span class="subtitle">Développeuse Web</span>
          <span class="typed-cursor">|</span>
          <br />
          <span class="animated-subtitle">
            HTML / CSS / Javascript,
            
            VueJS / NodeJS
          </span>
        </h3>
        <a href="#contact"><button>Me contacter</button></a>
      </div>
      <div class="home-right">
        <img
          src="../assets/img/screenshot.18.jpg"
          alt="ma photo"
          title="ma photo"
        />
      </div>
    </section>
    <section id="about">
      <!-- ABOUT TITLE -->
      <h1 class="title">A PROPOS DE MOI</h1>
      <!-- ABOUT CONTENT -->
      <About />
    </section>
    <section id="resume">
      <!-- RESUME TITLE -->
      <h1 class="title">CV</h1>
      <!-- RESUME CONTENT -->
      <Resume />
    </section>
    <section id="portfolio">
      <!-- PORTFOLIO TITLE -->
      <h1 class="title">PORTFOLIO</h1>
      <!-- PORTFOLIO CONTENT -->
      <Portfolio />
    </section>
    <section id="contact">
      <!-- CONTACT TITLE -->
      <h1 class="title">CONTACT</h1>
      <!-- CONTACT CONTENT -->
      <Contact />
    </section>
  </div>
</template>

<script>
import About from "../components/About.vue";
import Resume from "../components/Resume.vue";
import Portfolio from "../components/Portfolio.vue";
import Contact from "../components/Contact.vue";

export default {
  name: "Home",
  components: {
    About,
    Resume,
    Portfolio,
    Contact,
  },
};
</script>
