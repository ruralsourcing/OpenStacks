<template>
  <v-app id="inspire">
    <NavigationDrawer ref="drawer"/>
    <Toolbar />
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <HelloWorld />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Footer from "./components/Footer";
import NavigationDrawer from "./components/NavigationDrawer";
import Toolbar from "./components/Toolbar";

export default {
  components: {
    HelloWorld,
    Footer,
    NavigationDrawer,
    Toolbar
  }
};
</script>

<style lang="stylus">
.theme--light.application
  background-color: white
a
  color: var(--v-primary-base)
  text-decoration: none
  font-weight: 600
</style>
