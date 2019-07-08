<template>
  <v-layout column justify-center>
    <v-layout row>
      <v-text-field
        solo
        label="Search Questions"
        prepend-inner-icon="mdi-magnify"
        dense
      >
      </v-text-field>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" width="700">
        <template v-slot:activator="{ on }">
          <v-btn color="primary lighten-1" dark v-on="on">
            New Question
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="headline grey lighten-3" primary-title>
            New Question
          </v-card-title>

          <v-card-text>
            <form>
              <v-text-field
                box
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Title"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-textarea
                box
                name="input-7-4"
                label="Question"
                value=""
                auto-grow
              ></v-textarea>
              <v-combobox
                box
                v-model="model"
                hide-selected
                label="Tags"
                multiple
                persistent-hint
                small-chips
              >
                <template v-slot:no-data>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>
                        Press <kbd>enter</kbd> to add <strong>{{ search }}</strong>
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-combobox>
            </form>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey darken-1" flat @click="dialog = false">
              Cancel
            </v-btn>
            <v-btn color="primary" flat @click="dialog = false">
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-subheader>Recent Questions</v-subheader>

    <v-expansion-panel popout>
      <v-expansion-panel-content
        v-for="(message, i) in messages"
        :key="i"
        hide-actions
      >
        <template v-slot:header>
          <v-layout align-center row spacer>
            <v-flex xs4 sm2 md1>
              <v-avatar size="36px">
                <img
                  v-if="message.avatar"
                  src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  alt="Avatar"
                />
                <v-icon
                  v-else
                  :color="message.color"
                  v-text="message.icon"
                ></v-icon>
              </v-avatar>
            </v-flex>

            <v-flex sm5 md3 hidden-xs-only>
              <strong v-html="message.name"></strong>
            </v-flex>

            <v-flex no-wrap xs5 sm3>
              <v-chip
                v-if="message.answers"
                color="green lighten-3"
                class="ml-0"
                label
                small
              >
                {{ message.answers }} Answers
              </v-chip>
              <strong v-html="message.title"></strong>
            </v-flex>

            <v-flex
              v-if="message.tags"
              class="grey--text"
              ellipsis
              hidden-sm-and-down
            >
              <v-chip
                v-for="(tag, j) in message.tags"
                :key="j"
                color="blue-grey lighten-4"
                light
              >
                {{ tag }}
              </v-chip>
            </v-flex>
          </v-layout>
        </template>

        <v-card>
          <v-divider></v-divider>
          <v-card-text v-text="message.message"></v-card-text>
          <v-card-actions>
            <v-btn flat color="primary">Answer</v-btn>
            <v-btn flat color="error">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    messages: [
      {
        color: "deep-purple",
        icon: "mdi-car-hatchback",
        name: "Brandon Drews",
        title: "How do you run the vdp-vertical?",
        tags: ["vdp-vertical", "profiles-vertical", "something"],
        message: "I just don't understand"
      },
      {
        color: "blue",
        icon: "mdi-airplane",
        name: "James Brown",
        answers: 3,
        title: "How do airplanes work?",
        tags: ["aerospace"]
      },
      {
        color: "deep-purple",
        icon: "mdi-car-hatchback",
        name: "Ameya Simpson",
        title: "Why doesn't Couchbase work?",
        tags: ["couchbase", "data"],
        message: "I just don't understand"
      },
      {
        color: "red",
        icon: "mdi-home",
        name: "Sajani More",
        title: "How to log in to the source?",
        tags: ["source", "hr"]
      },
      {
        color: "deep-purple",
        icon: "mdi-car-hatchback",
        name: "Brandon Drews",
        title: "How do you run the vdp-vertical?",
        tags: ["vdp-vertical", "profiles-vertical", "something"],
        message: "I just don't understand"
      },
      {
        color: "blue",
        icon: "mdi-airplane",
        name: "James Brown",
        answers: 3,
        title: "How do airplanes work?",
        tags: ["aerospace"]
      },
      {
        color: "deep-purple",
        icon: "mdi-car-hatchback",
        name: "Ameya Simpson",
        title: "Why doesn't Couchbase work?",
        tags: ["couchbase", "data"],
        message: "I just don't understand"
      },
      {
        color: "red",
        icon: "mdi-home",
        name: "Sajani More",
        title: "How to log in to the source?",
        tags: ["source", "hr"]
      },
      {
        color: "deep-purple",
        icon: "mdi-car-hatchback",
        name: "Brandon Drews",
        title: "How do you run the vdp-vertical?",
        tags: ["vdp-vertical", "profiles-vertical", "something"],
        message: "I just don't understand"
      },
      {
        color: "blue",
        icon: "mdi-airplane",
        name: "James Brown",
        answers: 3,
        title: "How do airplanes work?",
        tags: ["aerospace"]
      },
      {
        color: "deep-purple",
        icon: "mdi-car-hatchback",
        name: "Ameya Simpson",
        title: "Why doesn't Couchbase work?",
        tags: ["couchbase", "data"],
        message: "I just don't understand"
      },
      {
        color: "red",
        icon: "mdi-home",
        name: "Sajani More",
        title: "How to log in to the source?",
        tags: ["source", "hr"]
      },
      {
        color: "deep-purple",
        icon: "mdi-car-hatchback",
        name: "Brandon Drews",
        title: "How do you run the vdp-vertical?",
        tags: ["vdp-vertical", "profiles-vertical", "something"],
        message: "I just don't understand"
      },
      {
        color: "blue",
        icon: "mdi-airplane",
        name: "James Brown",
        answers: 3,
        title: "How do airplanes work?",
        tags: ["aerospace"]
      },
      {
        color: "deep-purple",
        icon: "mdi-car-hatchback",
        name: "Ameya Simpson",
        title: "Why doesn't Couchbase work?",
        tags: ["couchbase", "data"],
        message: "I just don't understand"
      },
      {
        color: "red",
        icon: "mdi-home",
        name: "Sajani More",
        title: "How to log in to the source?",
        tags: ["source", "hr"]
      }
    ],
    lorem:
      "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum."
  })
};
</script>
