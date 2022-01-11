<template>
  <section class="page-content" id="portfolio-container">
    <nav aria-label="breadcrumb">
      <ul class="breadcrumb">
        <li class="breadcrumb-item">Vous êtes ici :</li>
        <li class="breadcrumb-item"><a href="/">Accueil</a></li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ this.$route.params.title }}
        </li>
      </ul>
    </nav>
    <h1 class="title">{{ this.$route.params.title }}</h1>
    <div class="p-container">
      <div class="works">
        <!-- PORTFOLIO FILTER BUTTONS -->
        <div class="portfolio-filter">
          <button @click="filterSelection('all')">Tous</button>
          <button @click="filterSelection('item-web')">Site Internet</button>
          <button @click="filterSelection('item-api')">API</button>
          <button @click="filterSelection('item-design')">Design</button>
        </div>
        <!-- END PORTFOLIO FILTER BUTTONS -->
        <!-- PORTFOLIO CONTENT -->
        <div class="portfolio-content">
          <div id="cards" class="cards">
            <div class="card all item-web">
              <div class="card-image">
                <img
                  class="img card-img"
                  src="../assets/img/portfolio/SiteBapadoz.png"
                  alt="Capture d'ecran site internet BAPADOZ"
                />
                <div class="card-body card-img-overlay">
                  <div class="card-text-description">
                    Site internet d'une association sportive de badminton :
                    administration du site sous Joomla, mise à jour et écriture
                    de nouveaux articles
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="card-footer-details">
                  <span class="card-text-name">BAPADOZ</span>
                  <span class="details">Site Internet/Joomla</span>
                  <span class="voir-plus">
                    <router-link
                      :to="{
                        name: 'bapadoz',
                        params: { title: 'Site Bapadoz' },
                      }"
                      ><span class="voir-plus-txt">Voir plus</span>
                    </router-link>
                  </span>
                </div>
              </div>
            </div>
            <div class="card all item-web">
              <div class="card-image">
                <img
                  class="img card-img"
                  src="../assets/img/portfolio/SiteDD.png"
                  alt="Capture d'écran du site internet Sport et developpement durable"
                />
                <div class="card-body card-img-overlay">
                  <div class="card-text"></div>
                  <div class="card-text-description">
                    Site présentant toutes les possibilités pour une pratique
                    sportive respectueuse de l'humain et de l'environnement.
                    Administration du site sous Joomla, mises à jour et
                    rédaction d'articles.
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="card-footer-details">
                  <span class="card-text-name"
                    >Développement Durable et Sport</span
                  >
                  <span class="details">Site Internet/Joomla</span>
                  <span class="voir-plus">
                    <router-link
                      :to="{
                        name: 'devdurable',
                        params: {
                          title: 'Site Developpement Durable et Badminton',
                        },
                      }"
                      ><span class="voir-plus-txt">Voir plus</span>
                    </router-link>
                  </span>
                </div>
              </div>
            </div>
            <div class="card all item-web">
              <div class="card-image">
                <img
                  class="img card-img"
                  src="../assets/img/portfolio/SiteWix.png"
                  alt="Capture d'ecran site vitrine MyBike sous Wix"
                />
                <div class="card-body card-img-overlay">
                  <div class="card-text">
                    <span class="card-text-name">MyBike</span>
                  </div>
                  <div class="card-text-description">
                    Site vitrine créé avec Wix lors de la formation Start.io
                    dans le but de présenter une société fictive (créée dans le
                    cadre de la formation), MyBike, qui vend des vélos
                    électriques
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="card-footer-details">
                  <span class="details">Site vitrine/Wix</span>
                  <span class="voir-plus">
                    <router-link
                      :to="{
                        name: 'mybikewix',
                        params: { title: ' MyBike - Wix' },
                      }"
                      ><span class="voir-plus-txt">Voir plus</span>
                    </router-link>
                  </span>
                </div>
              </div>
            </div>
            <div class="card all item-web">
              <div class="card-image">
                <img
                  class="img card-img"
                  src="../assets/img/portfolio/SiteShopify.png"
                  alt="Capture d'ecran site ecommerce MyBike sous Shopify"
                />
                <div class="card-body card-img-overlay">
                  <div class="card-text">
                    <span class="card-text-name">MyBike</span>
                  </div>
                  <div class="card-text-description">
                    Site e-commerce créé avec Shopify lors de la formation
                    Start.io dans le but de présenter une société fictive (créée
                    dans le cadre de la formation), MyBike, qui vend des vélos
                    électriques
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="card-footer-details">
                  <span class="details">Site e-commerce/Shopify</span>
                  <span class="voir-plus">
                    <router-link
                      :to="{
                        name: 'mybikeshopify',
                        params: { title: 'MyBike - Shopify' },
                      }"
                      ><span class="voir-plus-txt">Voir plus</span>
                    </router-link>
                  </span>
                </div>
              </div>
            </div>
            <div class="card all item-web">
              <div class="card-image">
                <img
                  class="img card-img"
                  src="../assets/img/portfolio/Reservia.png"
                  alt="Capture d'ecran site Reservia"
                />
                <div class="card-body card-img-overlay">
                  <div class="card-text">
                    <span class="card-text-name">Reservia</span>
                  </div>
                  <div class="card-text-description">
                    Site internet de Reservia, une petite entreprise proposant
                    un outil de planification de vacances. Mon but était
                    d'intégrer la maquette responsive en HTML et CSS.<br />
                    Premier travail réalisé dans le cadre de la formation
                    Openclassrooms
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="card-footer-details">
                  <span class="details">Site Internet / HTML & CSS</span>
                  <span class="voir-plus">
                    <router-link
                      :to="{ name: 'reservia', params: { title: 'Reservia' } }"
                      ><span class="voir-plus-txt">Voir plus</span>
                    </router-link>
                  </span>
                </div>
              </div>
            </div>
            <div class="card all item-web">
              <div class="card-image">
                <img
                  class="img card-img"
                  src="../assets/img/portfolio/Ohmyfood.png"
                  alt="Capture d'ecran du site Oh My food!"
                />
                <div class="card-body card-img-overlay">
                  <div class="card-text">
                    <span class="card-text-name">Oh My Food!</span>
                  </div>
                  <div class="card-text-description">
                    Ohmyfood! <br />L'objectif est de développer un site 100%
                    mobile qui répertorie les menus de restaurants
                    gastronomiques.<br />
                    Intégration de maquettes, animation CSS<br />
                    2ème travail réalisé dans le cadre de la formation
                    Openclassrooms
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="card-footer-details">
                  <span class="details">Site Internet / HTML & SCSS</span>
                  <span class="voir-plus">
                    <router-link
                      :to="{
                        name: 'ohmyfood',
                        params: { title: 'Oh My Food !' },
                      }"
                      ><span class="voir-plus-txt">Voir plus</span>
                    </router-link>
                  </span>
                </div>
              </div>
            </div>
            <div class="card all item-web item-api">
              <div class="card-image">
                <img
                  class="img card-img"
                  src="../assets/img/portfolio/Orinoco.png"
                  alt="Capture d'ecran du site Orinoco"
                />
                <div class="card-body card-img-overlay">
                  <div class="card-text">
                    <span class="card-text-name">Orinoco</span>
                  </div>
                  <div class="card-text-description">
                    Vous avez été recruté en tant que développeur front-end par
                    Orinoco, une entreprise de commerce en ligne. Dans un
                    premier temps, Paul souhaite créer un premier MVP pour
                    démontrer le fonctionnement de ses applications à ses
                    investisseurs. Vous êtes chargé de la partie front-end.<br />
                    3ème travail réalisé dans le cadre de la formation
                    Openclassrooms
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="card-footer-details">
                  <span class="details"
                    >Site e-commerce / HTML, SCSS et JS</span
                  >
                  <span class="voir-plus">
                    <router-link
                      :to="{ name: 'orinoco', params: { title: 'Orinoco' } }"
                      ><span class="voir-plus-txt">Voir plus</span>
                    </router-link>
                  </span>
                </div>
              </div>
            </div>
            <div class="card all item-web item-api">
              <div class="card-image">
                <img
                  class="img card-img"
                  src="../assets/img/portfolio/Piiquante.png"
                  alt="Capture d'ecran du site piiquante"
                />
                <div class="card-body card-img-overlay">
                  <div class="card-text">
                    <span class="card-text-name">Piiquante</span>
                  </div>
                  <div class="card-text-description">
                    La marque de condiments à base de piment Piiquante, veut
                    développer une application web de critique des sauces
                    piquantes appelée « Hot Takes » . La première version est
                    une « galerie de sauces » permettant aux utilisateurs de
                    télécharger leurs sauces piquantes préférées et de liker ou
                    disliker les sauces que d'autres partagent. Vous êtes chargé
                    de la partie back-end pour construire l'API.<br />
                    4ème travail réalisé dans le cadre de la formation
                    Openclassrooms
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="card-footer-details">
                  <span class="details">API / JS</span>
                  <span class="voir-plus">
                    <router-link
                      :to="{
                        name: 'piiquante',
                        params: { title: 'Piiquante' },
                      }"
                      ><span class="voir-plus-txt">Voir plus</span>
                    </router-link>
                  </span>
                </div>
              </div>
            </div>
            <div class="card all item-web item-api">
              <div class="card-image">
                <img
                  class="img card-img"
                  src="../assets/img/portfolio/Groupomania.png"
                  alt="Capture d'ecran du site Groupomania"
                />
                <div class="card-body card-img-overlay">
                  <div class="card-text">
                    <span class="card-text-name">Groupomania</span>
                  </div>
                  <div class="card-text-description">
                    Réseau social de l'entreprise Groupomania qui permet de
                    partager des images/vidéos/gifs, liens ou commentaires entre
                    collègues. Le frontend est développé avec Vuejs et le
                    backend avec NodeJs/ExpressJs en lien avec une base de
                    données MySQL<br />
                    5ème travail réalisé dans le cadre de la formation
                    Openclassrooms
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="card-footer-details">
                  <span class="details">Réseau Social d'entreprise / JS</span>
                  <span class="voir-plus">
                    <router-link
                      :to="{
                        name: 'groupomania',
                        params: { title: 'Groupomania' },
                      }"
                      ><span class="voir-plus-txt">Voir plus</span>
                    </router-link>
                  </span>
                </div>
              </div>
            </div>
            <div class="card all item-design">
              <div class="card-image">
                <img
                  class="img card-img"
                  src="../assets/img/portfolio/PochetteCD.png"
                  alt="Pochette Cd sous Photoshop, les felins pour l'autre"
                />
                <div class="card-body card-img-overlay">
                  <div class="card-text">
                    <span class="card-text-name">Pochette CD</span>
                  </div>
                  <div class="card-text-description">
                    Pochette CD réalisée avec Photoshop<br />
                    Travail réalisé dans le cadre de la formation Start.io
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="card-footer-details">
                  <span class="details">Photoshop</span>
                  <span class="voir-plus">
                    <router-link
                      :to="{
                        name: 'pochetteCD',
                        params: { title: 'Pochette CD' },
                      }"
                      ><span class="voir-plus-txt">Voir plus</span>
                    </router-link>
                  </span>
                </div>
              </div>
            </div>
            <div class="card all item-design">
              <div class="card-image">
                <img
                  class="img card-img"
                  src="../assets/img/portfolio/PochetteCD2.png"
                  alt="Pochette CD sous photoshop, pingouin sur fond disco"
                />
                <div class="card-body card-img-overlay">
                  <div class="card-text">
                    <span class="card-text-name">Pochette CD</span>
                  </div>
                  <div class="card-text-description">
                    Pochette CD réalisée avec Photoshop<br />
                    Travail réalisé dans le cadre de la formation Start.io
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="card-footer-details">
                  <span class="details">Photoshop</span>
                  <span class="voir-plus">
                    <router-link
                      :to="{
                        name: 'pochetteCD2',
                        params: { title: 'Pochette CD 2' },
                      }"
                      ><span class="voir-plus-txt">Voir plus</span>
                    </router-link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <a href="https://github.com/bea14" target="_blank"><button>Voir mon gitjhub</button></a>
      <a href="https://codepen.io/bea14-the-lessful" target="_blank"><button>Voir mon codepen</button></a>
    </div>
    <section class="returnBack">
      <a style="cursor: pointer" @click="$router.back()">
        &lt; Retour à la page principale
      </a>
    </section>
  </section>
</template>

<script>
export default {
  name: "monPortfolio",
  props: ["title"],
  methods: {
    /*filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("item-web");
      if (c == "all") c = "";
      // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
      for (i = 0; i < x.length; i++) {
        this.w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) this.w3AddClass(x[i], "show");
      }
    },
    // Show filtered elements
    w3AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    },
    // Hide elements that are not selected
    w3RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    },*/
    filterSelection(el) {
      var div = document.getElementsByClassName(el);
      var div1 = document.getElementsByClassName("item-web");
      var div2 = document.getElementsByClassName("item-api");
      var div3 = document.getElementsByClassName("item-design");
      if (el == "item-web") {
        for (let i = 0; i < div2.length; i++) {
          div2[i].style.display =
            div2[i].style.display == "block" ? "none" : "none";
        }
        for (let i = 0; i < div3.length; i++) {
          div3[i].style.display =
            div3[i].style.display == "block" ? "none" : "none";
        }
      }
      if (el == "item-api") {
        for (let i = 0; i < div1.length; i++) {
          div1[i].style.display =
            div1[i].style.display == "block" ? "none" : "none";
        }
        for (let i = 0; i < div3.length; i++) {
          div3[i].style.display =
            div3[i].style.display == "block" ? "none" : "none";
        }
      }
      if (el == "item-design") {
        for (let i = 0; i < div2.length; i++) {
          div2[i].style.display =
            div2[i].style.display == "block" ? "none" : "none";
        }
        for (let i = 0; i < div1.length; i++) {
          div1[i].style.display =
            div1[i].style.display == "block" ? "none" : "none";
        }
      }
      /*if (el == 'all') {
        for (let i = 0; i < div1.length; i++) {
          div1[i].style.display = div1[i].style.display == "block" ? "block" : "block";
        }
        for (let i = 0; i < div2.length; i++) {
          div2[i].style.display = div2[i].style.display == "block" ? "block" : "block";
        }
        for (let i = 0; i < div3.length; i++) {
          div3[i].style.display = div3[i].style.display == "block" ? "block" : "block";
        }
      }*/
      for (let i = 0; i < div.length; i++) {
        div[i].style.display =
          div[i].style.display == "block" ? "none" : "block";
      }
    },
  },
};
</script>
