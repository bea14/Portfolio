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
      Projet 3 du parcours Développeur Web OpenClassrooms:<br />
      "Dynamisez une page web avec des animations css"
    </h3>
    <div class="monportfolio-content">
      <div class="monportfolio-image">
        <img
          src="../../assets/img/portfolio/Ohmyfood.png"
          alt="Capture d'ecran site Oh My Food"
        />
      </div>
      <div class="monportfolio-details">
        <p>
          L'objectif est de développer un site 100% mobile qui répertorie les
          menus de restaurants gastronomiques. En plus des systèmes classiques
          de réservation, les clients pourront composer le menu de leur repas
          pour que les plats soient prêts à leur arrivée. Finis, les temps
          d'attente au restaurant ! <br />
          La phase d'intégration s'accompagnait de modalités requises :
        </p>
        <ul>
          <li>Le développement devra se faire en CSS, sans JavaScript.</li>
          <li>
            Aucun framework ne devra être utilisé, en revanche l’utilisation de
            SASS serait un plus.
          </li>
        </ul>
        Mise en place d'animations :
        <ul>
          <li>
            Boutons: au survol la couleur de fond s'eclaircit légèrement et
            l'ombre portée est plus visible
          </li>
          <li>Bouton j'aime : au clic/hover se remplit progressivement</li>
          <li>
            Page d'accueil : loading spiner de son choix de 1 à 3s sur la
            totalité de l'écran
          </li>
          <li>
            Pages des menus :
            <ul>
              <li>
                Plats apparaissent progressivement avec un léger décalage dans
                le temps
              </li>
              <li>
                Coche à droite du plat qui coulisse de la droite vers la gauche
              </li>
            </ul>
          </li>
        </ul>
        <h3>Technologies Utilisées</h3>
        <p>
          HTML, CSS, Préprocesseur CSS: Sass et Adobe XD pour maquettage <br />
          <img
            src="../../assets/img/html5.png"
            alt="logo html 5"
            width="50px"
          />
          <img src="../../assets/img/css3.png" alt="logo css 3" width="50px" />
          <img src="../../assets/img/sass.png" alt="logo sass" width="50px" />
          <img
            src="../../assets/img/adobe-xd.png"
            alt="logo adobe xd"
            width="50px"
          />
        </p>
        <button>
          <a
            href="https://bea14.github.io//BeatriceMoulinBeltrame_3_180621/"
            target="_blank"
          >
            Lien vers le site
          </a>
        </button>
        <button>
          <a
            href="https://github.com/bea14//BeatriceMoulinBeltrame_3_180621"
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
