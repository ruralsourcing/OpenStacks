<template>
  <v-footer
    height="auto"
    color="primary lighten-2"
    app inset
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex
        primary
        lighten-3
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2019 — <strong>Rural Sourcing</strong> — Apache 2.0
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ]
    })
  }
</script>
