<template >
    <div>
      <v-app-bar
          app
          color="rgb(247,247,247)"
          dark
      >
      <template >
        <img class="mr-3" :src="require('@/assets/achare.png')" height="40"/>
        <v-tabs  class="persianFont" color="#59CBB8" dir="ltr">
          <v-tab to="/address">مشاهده آدرس ها</v-tab>
          <v-tab to="/Form">ثبت آدرس</v-tab>
        </v-tabs>
      </template>
        <v-spacer></v-spacer>
      </v-app-bar>
    </div>
</template>
  
  <script>
  export default {
    name: "TopHead",
  }
  </script>
