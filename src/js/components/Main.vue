<template>
  <div class="main-wrapper">
    <div class="scene-wrapper">
      <div class="hero__screen"></div>
      <div :id="'section' +( index + 1)" class="bgImg section" v-for="(section, index) in sections" :key="section.id" :style="'background-image: url(' + bgImage(index) + ');'">
        <text-box></text-box>
      </div>
      <div id="section4" class="bgImg section" :style="'background-image: url(' + bgImage(3) + ');'">
        <div class="hero__screen--last"></div>
        <text-box></text-box>
      </div>
    </div>
  </div>
</template>

<script>
import textBox from "./TextBox";
import ScrollMagic from 'ScrollMagic'

export default {
  name: "Main",
    mounted () {
    // document.addEventListener('scroll', _.throttle(this.scrollHandler, 30), false);
    var vpHeight = window.innerHeight,
    controller = new ScrollMagic.Controller()
    let self = this
    var duration = window.innerHeight
    var pinElem = document.querySelector('.scene-wrapper')
    let offsets = [0, vpHeight * 2, vpHeight * 4, vpHeight * 6]
    for (var i = 0; i < this.mainSections.length; i++) {
      setScene(i)
    }
    function setScene(i) {
      new ScrollMagic.Scene({
        triggerHook: 0,
        duration: vpHeight,
        offset: offsets[i]
      })
      .setPin(pinElem)
      .addIndicators()
      .addTo(controller)
    }
  },
  data () {
    return {
      sectionIDs: [],
    }
  },
  computed: {
    sections() {
      return 3;
    },
    mainSections () {
      return document.querySelectorAll(".section")
    }
  },
  methods: {
    bgImage(index) {
      return require("../../styles/assets/img" + index + ".jpg");
    }
  },
  components: {
    textBox
  }
};
</script>

<style lang="sass-loader">
.bgImg {
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  }
.scene-wrapper {
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  color: white;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-size: 40px;
}
</style>
