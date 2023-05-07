<template>
  <v-app>
    <TopHead></TopHead>
     <router-view></router-view>
  </v-app>
</template>

<script>
import TopHead from '@/components/Head.vue';
export default {
  components: {
        TopHead,
    },  

};
</script>
<style>
@font-face{
  font-family: "IranYekan";
  src: url("./assets/fonts/IRANYekanBold.ttf") format("truetype")
}
.persianFont{
  font-family: "IranYekan";
}
</style>