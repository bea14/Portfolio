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
    <h3>
      Projet 2 du parcours Développeur Web OpenClassrooms :<br />
      "Transformez une maquette en site web"
    </h3>
    <div class="monportfolio-content">
      <div class="monportfolio-image">
        <img
          src="../../assets/img/portfolio/Reservia.png"
          alt="Capture d'ecran site Reservia"
        />
      </div>
      <div class="monportfolio-details">
        <p>
          L'objectif du projet est d'intégrer la maquette d'un site proposant aux
          usagers de trouver des hébergements et des activités dans la ville de
          leur choix.
          <br />
          Un design basé sur les principes du Material Design nous est proposé.<br />
          Avant de valider défnitivement ce design, l’entreprise décide de réaliser un prototype. 
          La première étape consiste à intégrer la maquette responsive en HTML et CSS.
        </p>
        <h3>Technologies Utilisées</h3>
        <p>
          HTML, CSS et Adobe XD pour maquettage <br />
          <img src="../../assets/img/html5.png" alt="logo html 5" width="50px"/>
          <img src="../../assets/img/css3.png" alt="logo css 3" width="50px"/>
          <img src="../../assets/img/adobe-xd.png" alt="logo adobe xd" width="50px"/>
        </p>
        <button>
          <a
            href="https://bea14.github.io/BeatriceMoulinBeltrame_2_25052021/"
            target="_blank"
          >
            Lien vers le site
          </a>
        </button>
        <button>
          <a
            href="https://github.com/bea14/BeatriceMoulinBeltrame_2_25052021"
            target="_blank"
          >
            Lien vers le github
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