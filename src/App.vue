<template>
  <div id="app">
    <section>
        <Header/>
    </section>
    <section>
      <router-view/>
    </section>
    <section>
      <Footer/>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Layout/header.vue';
import Footer from '@/components/Layout/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
