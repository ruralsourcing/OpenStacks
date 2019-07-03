import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  theme: {
    primary: "#009688",
    secondary: "#9c27b0",
    accent: "#673ab7",
    error: "#f44336",
    warning: "#ff9800",
    info: "#03a9f4",
    success: "#4caf50"
  },
  iconfont: 'mdi',
})
