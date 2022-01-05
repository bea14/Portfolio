<template>
  <section class="monportfolio">
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
          src="../../assets/img/portfolio/SiteDD.png"
          alt="Capture d'ecran site Developpement Durable"
        />
      </div>
      <div class="monportfolio-details">
        <p>
          L'association BAPADOZ, un club de badminton, a souhaité avoir un second 
          site web pour présenter les actions de développement durable que l'on 
          peut mettre en place pour une activité sportive et plus particulièrement 
          pour le badminton.
        </p>
        <h3>Technologies Utilisées</h3>
        <p>
          Joomla, PHP <br />
          <img src="../../assets/img/joomla.png" alt="logo joomla" width="50px"/>
          <img src="../../assets/img/php.png" alt="logo php" width="50px"/>
        </p>
        <button>
          <a
            href="http://normandiebad.com/DeveloppementDurable/"
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
  </section>
</template>

<script>
export default {
  props: ['title']
};
</script>