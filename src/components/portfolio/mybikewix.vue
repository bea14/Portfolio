<template>
  <div class="monportfolio">
    <nav aria-label="breadcrumb">
      <ul class="breadcrumb">
        <li class="breadcrumb-item">Vous êtes ici : </li>
        <li class="breadcrumb-item"><a href="/">Accueil</a></li>
        <li class="breadcrumb-item"><a href="/monPortfolio">monPortfolio</a></li>
        <li class="breadcrumb-item active" aria-current="page">{{ this.$route.params.title }}</li>
      </ul>
    </nav>
    <h1>{{ this.$route.params.title }}</h1>
    <h3>Projet du parcours StartIO de Créative</h3>
    <div class="monportfolio-content">
      <div class="monportfolio-image">
        <img
          src="../../assets/img/portfolio/SiteWix.png"
          alt="Capture d'ecran site My Bike sous Wix"
        />
      </div>
      <div class="monportfolio-details">
        <p>
          L'objectif du projet est de réaliser un site vitrine pour l'entreprise My Bike (entreprise 
          fictive créée dans le cadre de la formation) qui vend des vélos électriques.
        </p>
        <h3>Technologies Utilisées</h3>
        <p>
          Wix <br />
          <img src="../../assets/img/wix.png" alt="logo Wix" width="50px"/>
        </p>
        <button>
          <a
            href="https://beatricestartio19.wixsite.com/mybike"
            target="_blank"
          >
            Lien vers le site
          </a>
        </button>
      </div>
    </div>
    <section class="returnBack">
      <a style="cursor:pointer" @click="$router.back()">
        &lt; Retour au portfolio
      </a>
    </section>
  </div>
</template>

<script>
export default {
  props: ['title']
};
</script>