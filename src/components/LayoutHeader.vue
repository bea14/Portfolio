<template>
  <div class="header-container">
    <!--<div class="logo"></div>-->
    <!--Menu-->
    <nav class="main-navigation">
      <div class="nav-wrapper">
        <!--<p class="site-title"><a href="index.html">Béatrice Moulin Beltrame</a></p>-->
        <input type="checkbox" id="menu-checkbox" class="menu-checkbox" />
        <label for="menu-checkbox" class="menu-toggle">&equiv; Menu</label>
        <ul class="menu">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/#about">A propos</router-link></li>
          <li><router-link to="/#resume">Experiences</router-link></li>
          <li><router-link to="/#portfolio">Portfolio</router-link></li>
          <li><router-link to="/Challenges"> Challenges</router-link></li>
          <li><router-link to="/#contact">Contact</router-link></li>
        </ul>
      </div>
    </nav>
    <!--Social Icons-->
    <div class="social">
      <a href="https://fr-fr.facebook.com/beatrice.moulin.161" target="_blank">
        <img
          src="../assets/img/5365678_fb_facebook_facebook logo_icon.png"
          alt="logo facebook"
          width="35px"
        />
      </a>
      <a href="https://github.com/bea14/" target="_blank">
        <img
          src="../assets/img/1298743_github_git_logo_social_icon.png"
          alt="logo github"
          width="35px"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/béatrice-moulin-beltrame"
        target="_blank"
      >
        <img
          src="../assets/img/5296501_linkedin_network_linkedin logo_icon.png"
          alt="logo Linkedin"
          width="35px"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.header {
}
</style>
