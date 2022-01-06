<template>
  <div id="about-container">
    <!-- ABOUT INFO -->
    <div class="about-info">
      <div class="subtitle">
        <h2>Informations Personnelles</h2>
      </div>
      <div class="about-info-list">
        <ul>
          <li class="about-info-list-li">
            <span class="sub-title">Nom</span>
            <span class="value">Béatrice MOULIN BELTRAME</span>
          </li>
          <li class="about-info-list-li">
            <span class="sub-title">Experience</span>
            <span class="value">1 Ans</span>
          </li>
          <li class="about-info-list-li">
            <span class="sub-title">Email</span>
            <span class="value">
              <a href="mailto:beatrice.moulinbeltrame@gmail.com"
                >beatrice.moulinbeltrame@gmail.com</a
              >
            </span>
          </li>
          <li class="about-info-list-li">
            <span class="sub-title">Téléphone</span>
            <span class="value">
              <a href="tel:+33627758508">+33627099200</a>
            </span>
          </li>
          <li class="about-info-list-li">
            <span class="sub-title">Adresse</span>
            <span class="value">14860 Bavent</span>
          </li>
        </ul>
        <a href="/CV_MoulinBeltrame_Beatrice_Développeur_Web.pdf" download
          ><button>Télecharger mon CV</button></a
        >
      </div>
    </div>
    <div class="about-details">
      <!-- ABOUT INTRODUCTION -->
      <div class="about-txt">
        <div class="subtitle">
          <h2><span>Développeuse et passionnée </span></h2>
        </div>
        <div class="about-txt-p">
          <p>
            Après plusieurs années dans l'enseignement et la recherche, j'ai
            décidé de me reconvertir et d'aller vers un domaine qui me passionne
            : l'informatique.<br />
            J'ai toujours aimé développer des programmes, d'abord en turbo
            pascal puis je me suis mise à la création de sites internet avec
            HTML et les prémices du CSS. J'ai ensuite découvert Joomla, j'ai
            ainsi pu apprendre un peu le pHp. <br />
            Lorsque j'ai décidé de me former, j'ai suivi des cours HTML, CSS,
            Javascript et sur l'accessibilité Web.<br /><br />
            Cliquez sur le menu pour avoir un aperçu de mes différentes
            compétences<br />
          </p>
        </div>
      </div>
      <div>
        <div class="about-menu">
          <button @click="toggleVisibility('about-technical')">
            Compétences Techniques
          </button>
          <button @click="toggleVisibility('about-softskills')">
            Soft Skills
          </button>
          <button @click="toggleVisibility('about-languages')">Langues</button>
          <button @click="toggleVisibility('about-divers')">Divers</button>
        </div>
        <!-- ABOUT TECHNICAL SKILLS -->
        <div id="about-technical" class="about-technical about-skills">
          <div>
            <h2 class="subtitle">Compétences Techniques</h2>
          </div>
          <div>
            <ul>
              <li>
                <span>HTML, CSS</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="90"
                    style="width: 90%"
                  >
                    <span>90%</span>
                  </div>
                </div>
              </li>
              <li>
                <span>Javascript</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="70"
                    style="width: 70%"
                  >
                    <span>70%</span>
                  </div>
                </div>
              </li>

              <li>
                <span>Vue.js</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="75"
                    style="width: 75%"
                  >
                    <span>75%</span>
                  </div>
                </div>
              </li>
              <li>
                <span>NodeJs/Express</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="85"
                    style="width: 85%"
                  >
                    <span>85%</span>
                  </div>
                </div>
              </li>
              <li>
                <span>PostgresSql/Mysql</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="65"
                    style="width: 65%"
                  >
                    <span>65%</span>
                  </div>
                </div>
              </li>
              <li>
                <span>MySQL, MongoDB</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="60"
                    style="width: 60%"
                  >
                    <span>60%</span>
                  </div>
                </div>
              </li>
              <li>
                <span>Joomla, Prestashop</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="60"
                    style="width: 60%"
                  >
                    <span>60%</span>
                  </div>
                </div>
              </li>
              <li>
                <span>Wordpress, Wix, Shopify</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="70"
                    style="width: 70%"
                  >
                    <span>70%</span>
                  </div>
                </div>
              </li>
              <li>
                <span>Github</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="60"
                    style="width: 60%"
                  >
                    <span>60%</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- ABOUT SOFT SKILLS -->
        <div id="about-skills" class="about-softskills about-skills">
          <div>
            <h2 class="subtitle">Soft Skills</h2>
          </div>
          <div>
            <ul>
              <li>
                <span>Adaptabilité</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="100"
                    style="width: 100%"
                  >
                    <span>100%</span>
                  </div>
                </div>
              </li>
              <li>
                <span>Sérieuse</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="100"
                    style="width: 100%"
                  >
                    <span>100%</span>
                  </div>
                </div>
              </li>
              <li>
                <span>Rigoureuse</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="100"
                    style="width: 100%"
                  >
                    <span>100%</span>
                  </div>
                </div>
              </li>
              <li>
                <span>Autonome</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="100"
                    style="width: 100%"
                  >
                    <span>100%</span>
                  </div>
                </div>
              </li>
              <li>
                <span>Pédagogue</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="90"
                    style="width: 90%"
                  >
                    <span>90%</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- ABOUT LANGUAGES -->
        <div id="about-languages" class="about-languages about-skills">
          <div>
            <h2 class="subtitle">Compétences en langues</h2>
          </div>
          <div>
            <ul>
              <li>
                <span>Espagnol</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="75"
                    style="width: 75%"
                  >
                    <span>75%</span>
                  </div>
                </div>
              </li>
              <li>
                <span>Anglais</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="80"
                    style="width: 80%"
                  >
                    <span>80%</span>
                    <p>Bulats niveau 4/C1</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- ABOUT DIVERS -->
        <div id="about-divers" class="about-divers about-skills">
          <div>
            <h2 class="subtitle">Divers</h2>
          </div>
          <div>
            <ul>
              <li>
                <span>Badminton</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="70"
                    style="width: 100%"
                  ></div>
                </div>
              </li>
              <li>
                <span>Aquagym, Aquatraining</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="70"
                    style="width: 100%"
                  ></div>
                </div>
              </li>
              <li>
                <span>Loisirs créatifs</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="70"
                    style="width: 100%"
                  ></div>
                </div>
              </li>
              <li>
                <span>Jeux de plateau</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-percent="70"
                    style="width: 100%"
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    toggleVisibility(el) {
      //var div = document.getElementById(el);
      var x = document.getElementsByClassName("about-skills");
      // Add the "show" class (display:block) to the selected elements, and remove the "show" class from the elements that are not selected
      for (let i = 0; i < x.length; i++) {
        this.RemoveClass(x[i], "show");
        if (x[i].className.indexOf(el) > -1) this.AddClass(x[i], "show");
      }
    },
    // Show filtered elements
    AddClass(element, name) {
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
    RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    },
  },
};
</script>
