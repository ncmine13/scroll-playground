<template>
  <div class="main-wrapper">
    <div class="scene-wrapper">
      <div class="hero__screen"></div>
      <div :id="'section' + ( index + 1)" v-for="(section, index) in sections" :key="section.id" >
        <div class="bgImg section" :style="'background-image: url(' + bgImage(index) + ');'">
          <text-box></text-box>
        </div>
      </div>
      <div class="hero__screen--last"></div>
      <div id="section4" class="bgImg section" :style="'background-image: url(' + bgImage(3) + ');'">
        <text-box></text-box>
      </div>
    </div>
  </div>
</template>

<script>
import textBox from "./TextBox";

export default {
  name: "Main",
  computed: {
    sections () {
      return 3;
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
.trigger {
  height: 1px;
  width: 100vw;
  background-color: magenta;
}
</style>
