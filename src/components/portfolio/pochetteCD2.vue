<template>
  <div class="monportfolio">
    <nav aria-label="breadcrumb">
      <ul class="breadcrumb">
        <li class="breadcrumb-item">Vous êtes ici :</li>
        <li class="breadcrumb-item"><a href="/">Accueil</a></li>
        <li class="breadcrumb-item">
          <a href="/monPortfolio">monPortfolio</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ this.$route.params.title }}
        </li>
      </ul>
    </nav>
    <h1>{{ this.$route.params.title }}</h1>
    <h3>Projet du parcours StartIO de Creative</h3>
    <div class="monportfolio-content">
      <div class="monportfolio-image">
        <img
          src="../../assets/img/portfolio/PochetteCD2.png"
          alt="Pochette CD créée avec Phostoshop représentant un pingouin dansant sur un fond disco"
        />
      </div>
      <div class="monportfolio-details">
        <p>
          Nous avions comme consigne de créer une pochette CD en utilsant
          photoshop uniquement
        </p>
        <h3>Technologies Utilisées</h3>
        <p>
          Photoshop <br />
          <img
            src="../../assets/img/Adobe-Photoshop.png"
            alt="logo Adobe Photoshop"
            width="50px"
          />
        </p>
      </div>
    </div>
    <section class="returnBack">
      <a style="cursor: pointer" @click="$router.back()">
        &lt; Retour au portfolio
      </a>
    </section>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
