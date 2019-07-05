<template>
  <v-navigation-drawer clipped fixed app floating>
    <v-list>
      <v-list-tile v-on:click="alert('what')" class="blue lighten-5">
        <v-list-tile-action>
          <v-icon color="blue darken-4">mdi-airplane</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Southwest</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-on:click="alert('what')" class="deep-purple lighten-5">
        <v-list-tile-action>
          <v-icon color="deep-purple darken-4">mdi-car-hatchback</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Cars.com</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-on:click="alert('what')" class="red lighten-5">
        <v-list-tile-action>
          <v-icon color="red darken-4">mdi-home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Rural Sourcing</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    toggle: (o = null) => {
      if (o === true || o === false) {
        this.open = o;
      } else {
        this.open = !this.open;
      }
    }
  }
};
</script>

<style scoped>
.v-list>div {
  margin: 5px;
  border-radius: 10px;
}
</style>
