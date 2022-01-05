<template>
  <div id="app">
    <div clas="container">
      <div class="header">
        <Header />
      </div>
      <div class="main-page">
        <router-view />
      </div>
    </div>
    <Footer authorName="Béatrice Moulin Beltrame" />
  </div>
</template>

<script>
import Header from "./components/LayoutHeader.vue";
import Footer from "./components/LayoutFooter.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
}
</script>
