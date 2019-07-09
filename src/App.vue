<template>
  <v-app id="inspire" dark>
    <NavigationDrawer ref="drawer" v-if="signedin" />
    <Toolbar v-if="signedin"/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <Home v-if="signedin" />
            <HelloWorld v-else />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <Footer v-if="signedin" />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavigationDrawer from "./components/NavigationDrawer";
import Toolbar from "./components/Toolbar";

export default {
  data: () => ({
    signedin: false
  }),
  components: {
    HelloWorld,
    Home,
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
