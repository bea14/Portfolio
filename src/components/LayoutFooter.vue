<template>
  <footer class="footer">
    <div class="author" author-name="Béatrice Moulin Beltrame">
      <i class="fas fa-copyright" aria-hidden="true">&nbsp;</i> {{ copyright }} &nbsp;
    </div>
    <div class="contact">
      Contact : <a href="mailto:beatrice.moulinbeltrame@gmail.com">beatrice.moulinbeltrame@gmail.com</a>
    </div>
    <div class="mentions">
      <router-link to="/mentionslegales">Mentions legales</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    authorName: String,
  },
  computed: {
    copyright: function () {
      const currentYear = new Date().getFullYear();
      return `Copyright ${this.authorName} ${currentYear}`;
    },
  },
}
</script>
