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
      Projet 6 du parcours Développeur Web OpenClassrooms<br />
      "Construisez une API sécurisée pour une application d’avis gastronomiques"
    </h3>
    <div class="monportfolio-content">
      <div class="monportfolio-image">
        <img
          src="../../assets/img/portfolio/Piiquante.png"
          alt="Capture d'ecran site Piiquante"
        />
      </div>
      <div class="monportfolio-details">
        <p>
          L'objectif du projet est de construire une API sécurisée pour une
          application d'avis gastronomique (partie backend uniquement)
        </p>
        <h3>Technologies Utilisées</h3>
        <p>
          Node.JS, Express, MongoDB <br />
          <img
            src="../../assets/img/javascript.png"
            alt="logo javascript"
            width="50px"
          />
          <img
            src="../../assets/img/node.png"
            alt="logo node js"
            width="70px"
          />
          <img
            src="../../assets/img/express.png"
            alt="logo express"
            width="70px"
          />
          <img
            src="../../assets/img/mongo.png"
            alt="logo mongo DB"
            width="70px"
          />
        </p>
        <button>
          <a
            href="https://github.com/bea14/BeatriceMoulinBeltrame_6_100821"
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
