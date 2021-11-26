<template>
  <div class="header-container">
    <div class="logo"></div>
    <nav>
      <!--Menu-->
      <div class="nav-wrapper">
        <p class="site-title">
          <a href="index.html">Béatrice Moulin Beltrame</a>
        </p>
        <input type="checkbox" id="menu-checkbox" class="menu-checkbox" />
        <label for="menu-checkbox" class="menu-toggle">&equiv; Menu</label>
        <ul class="menu">
          <li>
            <a
              href="#home"
              aria-controls="home"
              role="tab"
              data-toggle="tab"
              aria-expanded="false"
              >Accueil</a
            >
          </li>
          <li>
            <a
              href="#about"
              aria-controls="about"
              role="tab"
              data-toggle="tab"
              aria-expanded="false"
              >A propos</a
            >
          </li>
          <li>
            <a
              href="#resume"
              aria-controls="resume"
              role="tab"
              data-toggle="tab"
              aria-expanded="false"
              >Experiences</a
            >
          </li>
          <li>
            <a
              href="#portfolio"
              aria-controls="portfolio"
              role="tab"
              data-toggle="tab"
              aria-expanded="false"
              >Portfolio</a
            >
          </li>
          <li>
            <a
              href="#contact"
              aria-controls="contact"
              role="tab"
              data-toggle="tab"
              aria-expanded="false"
              >Contact</a
            >
          </li>
        </ul>
      </div>

      <!--Social Icons-->
      <div class="social">
        <a href="https://fr-fr.facebook.com/beatrice.moulin.161" target="_blank"
          ><img src="images/facebook.png" alt="logo facebook"
        /></a>
        <a href="https://twitter.com/beamb14" target="_blank"
          ><img src="images/twitter.png" alt="logo twitter"
        /></a>
        <a href="https://github.com/bea14/" target="_blank"
          ><img src="images/github.png" alt="logo github"
        /></a>
        <a
          href="https://www.linkedin.com/in/béatrice-moulin-beltrame"
          target="_blank"
          ><img src="images/linkedin.png" alt="logo Linkedin"
        /></a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
@import "../assets/styles/abstracts/_variables.scss";
//header
.header {
    background-color: transparent;
    //background-color: white;
    //position: fixed;
    width: 100%;
    //width: 1367px;
    padding: 20px 0px;
    margin-top: 10px;
    margin-bottom: 0px;
    box-shadow: 0px 0px 15px #333;
    color: white;
    height: 150px;
    .header-container {
        //max-width: 1140px;
        display: flex;
        margin-right: auto;
        margin-left: auto;
        position: relative;
        border: 0;
        font-size: 100%;
        outline: 0;
        padding: 0;
        height: 100%;
        .logo {
            width: 7%;
            position: relative;
            min-height: 1px;
            display: flex;
        }
        
    }
 
}

nav {
    width: 93%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .nav-wrapper {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: unset;
        .menu-checkbox:checked ~ .menu {
            /*display: block;*/
            margin: 1em 0;
            max-height: 500px;
            opacity: 1;
            visibility: visible;
        }                
        .menu-checkbox:checked + .menu {
            margin: 1em 0;
            max-height: 500px;
            opacity: 1;
            visibility: visible;
        }                
        .menu-checkbox {
            opacity: 0;
            position: absolute;
            top: -1000px;
        }                
        .menu-checkbox:focus + .menu-toggle {
            outline: #ae952e auto 5px;
        }                
        .menu-toggle {
            padding: .5em 1em;
            display: inline-block;/**/
        }
        ul {
            color: white;  
            display: flex;
            @media screen and (min-width: 992px) {
                flex-direction: row;
            }
            li {
                border-bottom: 1px solid #eee;
                a {
                    display: block;   
                    height: 100%;
                    padding: 0.5em 1em;
                    color: #fff;
                    i {
                        display: block;   
                        height: 100%;
                    }
                    &:hover {
                        background-color: #f4f4f4;
                        color: #333;
                    }
                }
            }
        }
        .menu {
            /*display: none;*/ /* le menu est cache par defaut */
            flex-basis: 100%;
            list-style: none;
            margin: 0;
            max-height: 0;
            opacity: 0; /**/
            overflow: hidden;
            padding: 0 2em;
            transition: margin .5s ease-in-out, max-height .5s ease-in-out, opacity .3s .1s ease-in-out;
            visibility: hidden; /**/
        }
    }
    
}
</style>