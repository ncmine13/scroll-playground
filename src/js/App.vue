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
      if ( direction === 'FORWARD') {
        // active section is the one closest to and less than this number
        if (pageOffset <= this.offsets[1]) {
          console.log('active is 1')
        } else if (pageOffset >= this.offsets[1] && pageOffset <= this.offsets[2]) {
          console.log('active is 2!')
        } else if (pageOffset >= this.offsets[2] && pageOffset <= this.offsets[3]) {
          console.log('active is 3!')
        } else if (pageOffset >= this.offsets[3]) {
          console.log('active is 4!')
        }
      } else if (direction === 'REVERSE') {
        if (pageOffset <= this.offsets[1]) {
          console.log('active is 1')
        } else if (pageOffset >= this.offsets[1] && pageOffset <= this.offsets[2]) {
          console.log('active is 2!')
        } else if (pageOffset >= this.offsets[2] && pageOffset <= this.offsets[3]) {
          console.log('active is 3!')
        } else if (pageOffset >= this.offsets[4]) {
          console.log('active is 4!')
        }
      }
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
      // change the corresponding anchor square color when navigating
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

