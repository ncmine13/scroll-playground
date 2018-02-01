<template>
  <div class="side-nav__wrapper">
    <div class="side-nav__anchor-squares">
      <a class="anchorElem" href="#section1"></a>
      <a class="anchorElem" href="#section2"></a>
      <a class="anchorElem" href="#section3"></a>
      <a class="anchorElem" href="#section4"></a>
    </div>
  </div>
</template>

<script>
import ScrollMagic from 'ScrollMagic'
import ScrollTo from 'ScrollTo'

export default {
  name: "Nav",
};
</script>
<style lang="sass-loader">
.side-nav {
  &__wrapper {
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 3;
  }
  &__anchor-squares {
    width: 200px;
    margin: 0 auto;
    justify-content: space-between;
    display: flex;
    padding-top: 40px;
  }
}
.anchorElem {
  padding: 15px;
  background-color: rgb(224, 199, 74);
  &.activeAnchor {
    background-color: rgb(79, 108, 155);
  }
}
</style>
