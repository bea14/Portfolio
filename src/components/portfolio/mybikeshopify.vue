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
          src="../../assets/img/portfolio/SiteShopify.png"
          alt="Capture d'ecran site My Bike sous Shopify"
        />
      </div>
      <div class="monportfolio-details">
        <p>
          L'objectif du projet est de réaliser un site e-commerce pour
          l'entreprise My Bike, une entreprise fictive créée dans le cadre de la
          formation, qui vend des vélos électriques.
          <br />
          Ce site e-commerce est réalisé à partir d'un site vitrine crée sous
          wix qui nous sert de maquette.
        </p>
        <h3>Technologies Utilisées</h3>
        <p>
          Shopify <br />
          <img
            src="../../assets/img/shopify.png"
            alt="logo shopify"
            width="50px"
          />
        </p>
      </div>
    </div>
    <div class="monportfolio-gallery">
      <p>Copies d'écran du site (qui n'est plus accessible en ligne) :</p>
      <img
        class="img card-img"
        src="../../assets/img/portfolio/Shopify/SiteShopify.png"
        alt="Capture d'ecran site vitrine MyBike sous Shopify"
        width="350px"
      />
      <img
        class="img card-img"
        src="../../assets/img/portfolio/Shopify/APropos.png"
        alt="Capture d'ecran site vitrine MyBike sous Shopify"
        width="350px"
      />
      <img
        class="img card-img"
        src="../../assets/img/portfolio/Shopify/Boutique.png"
        alt="Capture d'ecran site vitrine MyBike sous Shopify"
        width="350px"
      />
      <img
        class="img card-img"
        src="../../assets/img/portfolio/Shopify/Services.png"
        alt="Capture d'ecran site vitrine MyBike sous Shopify"
        width="350px"
      />
      <img
        class="img card-img"
        src="../../assets/img/portfolio/Shopify/Contact.png"
        alt="Capture d'ecran site vitrine MyBike sous Shopify"
        width="350px"
      />
      <img
        class="img card-img"
        src="../../assets/img/portfolio/Shopify/Connexion.png"
        alt="Capture d'ecran site vitrine MyBike sous Shopify"
        width="350px"
      />
      <img
        class="img card-img"
        src="../../assets/img/portfolio/Shopify/PageProduit.png"
        alt="Capture d'ecran site vitrine MyBike sous Shopify"
        width="350px"
      />
      <img
        class="img card-img"
        src="../../assets/img/portfolio/Shopify/Panier.png"
        alt="Capture d'ecran site vitrine MyBike sous Shopify"
        width="350px"
      />
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
