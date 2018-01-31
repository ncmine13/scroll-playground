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

import ScrollMagic from 'ScrollMagic'
import ScrollTo from 'ScrollTo'

export default {
  name: 'App',
  mounted () {
    this.calculateOffsets()
    for (var i = 0; i < this.sections.length; i++) {
      this.initializeScene(i)
    }
    this.addAnchorHandler()
  },
  data () {
    return {
      offsets: [],
      counter: 0,
      activeSection: ''
    }
  },
  computed: {
    sections () {
      return document.querySelectorAll(".section")
    },
    vpHeight () {
      return window.innerHeight
    },
    pinElem () {
      return document.querySelector('.scene-wrapper')
    },
    controller () {
      return new ScrollMagic.Controller()
    },
    anchorSquares () {
      return document.querySelectorAll('.anchorElem')
    }
  },
  methods: {
    calculateOffsets () {
      let self = this
      Array.prototype.forEach.call(self.sections, function(section){
        self.offsets.push(self.counter * self.vpHeight)
        self.counter+=2
      })
    },
    activateSection (direction, pageOffset) {
      let self = this
      for (var i = 0; i < 4; i++) {
        if (pageOffset >= self.offsets[i] && pageOffset < self.offsets[i + 1]) {
          this.activeSection = '#section' + (i + 1)
          break
        } else if (pageOffset >= self.offsets[3]) {
          this.activeSection = '#section' + 4
          break
        }
      }
      document.querySelector('a')
      let anchor = "a[href='" + this.activeSection + "']"
      this.handleAnchorUI(document.querySelector(anchor))
    },
    addAnchorHandler () {
      let self = this
      Array.prototype.forEach.call(self.anchorSquares, function (anchor) {
        anchor.addEventListener('click', self.anchorHandler, false)
      })
    },
    initializeScene (iterator) {
      let self = this
      new ScrollMagic.Scene({
        triggerHook: 0,
        duration: self.vpHeight,
        offset: self.offsets[iterator]
      })
      .setPin(self.pinElem)
      .on('start', function (e) {
        self.activateSection(e.scrollDirection, window.pageYOffset)
      })
      .addIndicators()
      .addTo(self.controller)
    },
    handleAnchorUI (elem) {
      document.querySelector('.activeAnchor').classList.remove('activeAnchor')
      elem.classList.add('activeAnchor')
    },
    anchorHandler (e) {
      this.handleAnchorUI(e.target)
      let offset = document.querySelector(e.target.hash).offsetTop * 2
      window.scrollTo({
        'top': offset,
        'left': 0,
        'behavior': 'smooth'
      })
    }
  },
  components: {
      mainComponent,
      navComponent,
      footerComponent
    }
}
</script>

