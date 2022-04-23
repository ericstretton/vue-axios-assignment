<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/ericstretton/vue-axios-assignment"
        target="_blank"
        text
      >
        <span class="mr-2">Git Repository</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
    <PageContainer class="pageGrid"/>
    </v-main>
  </v-app>
</template>

<script>
import PageContainer from './components/PageContainer.vue';


export default {
  name: 'App',

  components: {
    PageContainer
    
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
main{
  background-color: seashell;
  .pageGrid{
      width: 40vw;
      left: 35vw;
      display: grid;
      position: relative;
      grid-template-rows: 1fr 1fr 1fr;
      text-align: center;
      background-color: bisque;
    }
}


    
</style>