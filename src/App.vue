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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
