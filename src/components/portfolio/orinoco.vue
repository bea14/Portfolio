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
    <h3>
      Projet 5 du parcours Développeur Web OpenClassrooms;<br />
      "Construisez un site e-commerce"
    </h3>
    <div class="monportfolio-content">
      <div class="monportfolio-image">
        <img
          src="../../assets/img/portfolio/Orinoco.png"
          alt="Capture d'ecran site Orinoco"
        />
      </div>
      <div class="monportfolio-details">
        <p>
          Scénario : Vous avez été recruté en tant que développeur front-end par
          Orinoco, une entreprise de commerce en ligne.<br />
          Il faut créer un premier MVP pour démontrer le fonctionnement des
          applications.<br />
          Vous êtes chargé de la partie front-end.
        </p>
        <h3>Technologies Utilisées</h3>
        <p>
          HTML, Javascript, Bootstrap 4, planification de tests unitaires et
          Adobe XD pour maquettage <br />
          <img
            src="../../assets/img/html5.png"
            alt="logo html 5"
            width="50px"
          />
          <img src="../../assets/img/css3.png" alt="logo css 3" width="50px" />
          <img src="../../assets/img/sass.png" alt="logo sass" width="50px" />
          <img
            src="../../assets/img/bootstrap.png"
            alt="logo bootstrap"
            width="50px"
          />
          <img
            src="../../assets/img/javascript.png"
            alt="logo javascript"
            width="50px"
          />
          <img
            src="../../assets/img/adobe-xd.png"
            alt="logo adobe xd"
            width="50px"
          />
        </p>
        <button>
          <a
            href="https://github.com/bea14/-BeatriceMoulinBeltrame_5_210721-"
            target="_blank"
          >
            Lien vers le github
          </a>
        </button>
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
