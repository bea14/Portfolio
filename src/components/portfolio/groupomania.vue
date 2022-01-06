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
      Projet 7 du parcours Développeur Web OpenClassrooms:<br />
      "Créez un réseau social d'entreprise"
    </h3>
    <div class="monportfolio-content">
      <div class="monportfolio-image">
        <img
          src="../../assets/img/portfolio/Groupomania.png"
          alt="Capture d'ecran site Groupomania"
        />
      </div>
      <div class="monportfolio-details">
        <p>
          L'objectif du projet est de construire un réseau social interne pour
          les employés de Groupomania. Le but de cet outil est de faciliter les
          interactions entre collègues. Le département RH de Groupomania a
          laissé libre cours à son imagination pour les fonctionnalités du
          réseau et a imaginé plusieurs briques pour favoriser les échanges
          entre collègues.
        </p>
        <h3>Technologies Utilisées</h3>
        <p>
          Vue.JS, MySQL, Axios, Node.JS, Express, SASS et Adobe XD pour
          maquettage <br />
          <img
            src="../../assets/img/javascript.png"
            alt="logo javascript"
            width="50px"
          />
          <img src="../../assets/img/vue.png" alt="logo vue js" width="50px" />
          <img
            src="../../assets/img/mysql.png"
            alt="logo My SQL"
            width="50px"
          />
          <img src="../../assets/img/axios.jpg" alt="logo axios" width="70px" />
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
            src="../../assets/img/html5.png"
            alt="logo html 5"
            width="50px"
          />
          <img src="../../assets/img/css3.png" alt="logo css 3" width="50px" />
          <img src="../../assets/img/sass.png" alt="logo sass" width="50px" />
          <br />
          <img
            src="../../assets/img/adobe-xd.png"
            alt="logo adobe xd"
            width="50px"
          />
        </p>
        <button>
          <a
            href="https://github.com/bea14/BeatriceMoulinBeltrame_7_23082021"
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
