<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon><v-icon>mdi-earth</v-icon></v-toolbar-side-icon>
    <v-toolbar-title >{{ name }}</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-spacer></v-spacer>
    <strong>Jon Doe</strong>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-chip
      color="blue-gray lighten-3"
      class="ml-0"
      label
      small
    >
      25,342 rep
    </v-chip>
    <!--<v-avatar color="grey lighten-3" size="36px">
      <img :src="require('../assets/logo.png')" alt="avatar" />
    </v-avatar>-->
  </v-toolbar>
</template>

<script>
import config from '../../config.json'
export default {
  data: () => ({
    name: config.name || "OpenStacks",
    links: [
      { title: "Home", href: "/" },
      { title: "Rural Sourcing", href: "https://ruralsourcing.com" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Night Mode", href: "JavaScript:toggleDark()" }
    ]
  })
};
</script>

<style scoped lang="stylus">
.v-toolbar.theme--light
  background-color: white;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
</style>
