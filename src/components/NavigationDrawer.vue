<template>
  <v-navigation-drawer clipped fixed app floating>
    <v-list>
      <v-list-tile v-on:click="alert('what')">
        <v-list-tile-action>
          <v-icon color="red lighten-3">mdi-home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Rural Sourcing</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-on:click="alert('what')">
        <v-list-tile-action>
          <v-icon color="blue lighten-3">mdi-airplane</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Southwest Airlines</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-on:click="alert('what')">
        <v-list-tile-action>
          <v-icon color="deep-purple lighten-3">mdi-car-hatchback</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Cars.com</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-on:click="alert('what')">
        <v-list-tile-action>
          <v-icon color="green lighten-3">mdi-chevron-double-right</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Zywave</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-on:click="alert('what')">
        <v-list-tile-action>
          <v-icon color="blue lighten-3">mdi-heart-multiple</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Beacon</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-on:click="alert('what')">
        <v-list-tile-action>
          <v-icon color="red lighten-3">mdi-arrow-down-bold</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Guaranteed Rate</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-on:click="alert('what')">
        <v-list-tile-action>
          <v-icon color="green lighten-3">mdi-car-multiple</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>ParkMobile</v-list-tile-title>
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
</style>
