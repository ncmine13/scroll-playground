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
    this.addAnchorHandler()
    for (var i = 0; i < this.sections.length; i++) {
      this.initializeScene(i)
    }
  },
  data () {
    return {
      offsets: [],
      counter: 0,
      activeSection: '',
      click: false,
      isAnchorActive: false
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
// initial calculations

    calculateOffsets () {
      let self = this
      Array.prototype.forEach.call(self.sections, function(section){
        self.offsets.push(self.counter * self.vpHeight)
        self.counter+=2
      })
    },
    addAnchorHandler () {
      let self = this
      Array.prototype.forEach.call(self.anchorSquares, function (anchor) {
        anchor.addEventListener('click', self.handleAnchorNavigation, false)
      })
    },
    initializeScene (iterator) {
      let self = this
      var scene = new ScrollMagic.Scene({
        triggerHook: 0,
        duration: self.vpHeight,
        offset: self.offsets[iterator]
      })
      .setPin(self.pinElem)
      .on('add', function(e) {
        console.log(e)
      })
      .on('start', function (e) {
        if (e.state != 'AFTER') {
          console.log(e.scrollDirection, e.state, this)
          self.activateSection(e.scrollDirection, window.pageYOffset)
        }
      })
      .on('leave', function(e) {
        self.handleLeave(e.scrollDirection)
      })
      .addIndicators()
      .addTo(self.controller)
    },


// handlers on enter and leave of scrollMagic

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
      if (!this.isAnchorActive) {
        this.activateAnchor(this.activeSection)
        this.isAnchorActive = true
      }
      if (direction === 'REVERSE') {
        this.activateAnchor(this.activeSection)
      }
    },
    handleLeave (direction) {
      let active = direction === 'FORWARD' ? parseInt(this.activeSection.slice(-1)) + 1 : parseInt(this.activeSection.slice(-1))
      let elem = "#section" + active
      if (direction === 'FORWARD' && active <= this.sections.length) {
        this.activateAnchor(elem)
      }
      if (!this.click) {
        if (active <= this.sections.length) {
          let sectionOffset = direction === 'FORWARD' ? document.querySelector(elem).offsetTop * 2 : document.querySelector(elem).offsetTop * 2 + (this.vpHeight / 2)
          window.scrollTo({
            'top': sectionOffset,
            'left': 0,
            'behavior': 'smooth'
          })
        }
      }
    },

// anchor nav functionality and UI

    activateAnchor (section) {
      document.querySelector('a')
      let anchor = "a[href='" + section + "']"
      this.handleAnchorUI(document.querySelector(anchor))
    },
    handleAnchorUI (elem) {
      if (document.querySelector('.activeAnchor')) {
        document.querySelector('.activeAnchor').classList.remove('activeAnchor')
      }
      elem.classList.add('activeAnchor')
    },
    handleAnchorNavigation (e) {
      let offset = document.querySelector(e.target.hash).offsetTop * 2
      this.click = true
      var self = this
      window.scrollTo({
        'top': offset,
        'left': 0,
        'behavior': 'smooth'
      })
      window.setTimeout(function() {
        self.click = false
      }, 500)
    }



  },
  components: {
      mainComponent,
      navComponent,
      footerComponent
    }
}
</script>

