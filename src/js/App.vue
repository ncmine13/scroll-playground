<template>
  <div id="app">
    <main-component></main-component>
    <nav-component></nav-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import mainComponent from './components/Main'
import navComponent from './components/Nav'
import footerComponent from './components/Footer'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    sections () {
      return document.querySelectorAll("section")
    }
  },
  methods: {
  scrollHandler () {
      if (window.pageYOffset <= window.innerHeight) {
      }
    }
  },
  components: {
      mainComponent,
      navComponent,
      footerComponent
    }
}
</script>

