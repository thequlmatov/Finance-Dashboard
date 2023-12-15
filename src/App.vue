<template>
  <SiteHeader />
  <SiteMain />
</template>


<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue';
import "@/assets/main.css"

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain,
  },

}
</script>

<style lang="scss"></style>
