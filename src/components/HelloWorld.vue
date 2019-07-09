<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to OpenStacks
        </h1>
        <p class="subheading font-weight-regular">
          Use your Slack account on your company workspace to access OpenStacks
        </p>
        <v-btn color="primary" flat>
          <v-icon left>mdi-slack</v-icon> Sign in with Slack
        </v-btn>
      </v-flex>
    </v-layout>
    <!--<v-chip color="deep-purple lighten-2" dark>
      <v-avatar color="deep-purple darken-4">
        <v-icon>mdi-car-hatchback</v-icon>
      </v-avatar>
      Cars.com&nbsp;
    </v-chip>
    <v-chip color="red lighten-2" text-color="white" dark>
      <v-avatar color="red darken-4">
        <v-icon>mdi-home</v-icon>
      </v-avatar>
      RSI&nbsp;
    </v-chip>
    <v-chip color="blue lighten-2" text-color="white" dark>
      <v-avatar color="blue darken-4">
        <v-icon>mdi-airplane</v-icon>
      </v-avatar>
      Southwest&nbsp;
    </v-chip>-->
  </v-container>
</template>

<script>
export default {
  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuetifyjs.com"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
};
</script>

<style lang="stylus" scoped>
</style>
