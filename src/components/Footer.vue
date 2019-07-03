<template>
  <v-footer height="auto" app inset light absolute>
    <v-layout justify-center row wrap>
      <v-btn v-for="link in links" :key="link.title" flat round color="primary" @click="showPrivacy()">
        {{ link.title }}
      </v-btn>
      <v-flex py-3 text-xs-center xs12>
        &copy;2019 — <strong>Rural Sourcing</strong> — Apache 2.0
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  methods: {
    showPrivacy() {
      this.val ^= true;
    }
  },
  data: () => ({
    val: true,
    links: [
      { title: "Home", href: "/" },
      { title: "Rural Sourcing", href: "https://ruralsourcing.com" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Night Mode", href: "JavaScript:toggleDark()", click: () => { this.showPrivacy() } }
    ]
  })
};
</script>

<style lang="stylus" scoped>
.v-footer
  background-color: white
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.35)
a
  color: var(--v-primary-base)
  text-decoration: none
  font-weight: 400
</style>
