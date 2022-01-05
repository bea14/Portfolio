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
    <div class="monportfolio-content">
      <div class="monportfolio-image">
        <img
          src="../../assets/img/portfolio/SiteBapadoz.png"
          alt="Capture d'ecran site Bapadoz"
        />
      </div>
      <div class="monportfolio-details">
        <p>
          L'association Bapadoz, un club de badminton, m'a chargée de réaliser son site Web pour présenter le club et ses activités.
          <br />
          La technologe imposée est joomla.
        </p>
        <h3>Technologies Utilisées</h3>
        <p>
          Joomla, PHP <br />
          <img src="../../assets/img/joomla.png" alt="logo joomla" width="50px"/>
          <img src="../../assets/img/php.png" alt="logo php" width="50px"/>
        </p>
        <button>
          <a
            href="http://normandiebad.com/Bapadoz/"
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
  props: ['title'],
};
</script>