<template>
  <section>
    <div class="contact-container">
      <div class="form-col">
        <div class="contact-area">
          <div class="small-title">
            <h4>Formulaire de contact</h4>
          </div>
          <form
            action="mailto:beatrice.moulinbeltrame@gmail.com"
            method="post"
            enctype="text/plain"
            class="contact-forum"
            novalidate=""
          >
            <div class="form-group">
              <input
                id="form_name"
                type="text"
                name="name"
                placeholder="Nom *"
                required="required"
              />
            </div>
            <div class="form-group">
              <input
                id="form_email"
                type="email"
                name="email"
                placeholder="Email *"
                required="required"
              />
            </div>
            <div class="form-group">
              <input
                id="form_subject"
                type="text"
                name="subject"
                placeholder="Sujet *"
                required="required"
              />
            </div>
            <div class="form-group">
              <textarea
                id="form_message"
                name="message"
                placeholder="Message *"
                rows="4"
                required="required"
                data-error="Message."
              ></textarea>
            </div>
            <div class="form-group">
              <input
                type="submit"
                class="button disabled"
                onClick="sendContact();"
                value="Envoyer"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="info-col">
        <div class="contact-info">
          <div class="small-title">
            <h4>Informations de contact</h4>
          </div>
          <div class="item">
            <i class="fa fa-phone"></i>
            <h6 class="sm-titl">
              Téléphone :<br />
              <span><a href="tel:+33 627099200">+33 627099200</a></span>
            </h6>
          </div>
          <div class="item">
            <i class="fa fa-map-marker"></i>
            <h6 class="sm-titl">
              Adresse :<br />
              <span>Bavent (14)</span>
            </h6>
          </div>
          <div class="item">
            <i class="fa fa-envelope-o"></i>
            <h6 class="sm-titl">
              Email :<br />
              <span
                ><a href="mailto:beatrice.moulinbeltrame@gmail.com"
                  >beatrice.moulinbeltrame@gmail.com</a
                ></span
              >
            </h6>
          </div>
          <!-- social Icon -->
          <div class="social-icon">
            <a href="https://fr-fr.facebook.com/beatrice.moulin.161">
              <!--<span><i class="fas fa-facebook" aria-hidden="true"></i></span>-->
              <img
                src="../assets/img/5365678_fb_facebook_facebook logo_icon.png"
                alt="logo facebook"
                width="30px"
              />
            </a>
            <!--<a href="https://twitter.com/beamb14">
							<span><i class="fa fa-twitter" aria-hidden="true"></i></span>
						</a>-->
            <a href="https://github.com/bea14/">
              <!--<span><i class="fa fa-github" aria-hidden="true"></i></span>-->
              <img
                src="../assets/img/1298743_github_git_logo_social_icon.png"
                alt="logo github"
                width="30px"
              />
            </a>
            <a href="https://www.linkedin.com/in/béatrice-moulin-beltrame">
              <!--<span><i class="fa fa-linkedin" aria-hidden="true"></i></span>-->
              <img
                src="../assets/img/5296501_linkedin_network_linkedin logo_icon.png"
                alt="logo Linkedin"
                width="30px"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
