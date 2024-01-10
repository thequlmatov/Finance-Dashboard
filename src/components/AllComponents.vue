<template>
  <SiteHeader />
  <SiteMain />

</template>


<script>
  import SiteHeader from './SiteHeader.vue'
  import SiteMain from './SiteMain.vue';
  import "@/assets/main.css"
  export default {
    name: 'App',
    components: {
      SiteHeader,
      SiteMain,
    },

  }
</script>


<style></style>