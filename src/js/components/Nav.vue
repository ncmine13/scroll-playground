<template>
  <div class="side-nav__wrapper">
    <div class="side-nav__anchor-squares">
      <a class="anchorElem activeAnchor" href="#section1"></a>
      <a class="anchorElem" href="#section2"></a>
      <a class="anchorElem" href="#section3"></a>
      <a class="anchorElem" href="#section4"></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Nav",
  mounted () {
    let anchorSquares = document.querySelectorAll('.anchorElem')
    let self = this
    Array.prototype.forEach.call(anchorSquares, function (anchor) {
      anchor.addEventListener('click', self.clickHandler, false)
    })
  },
  methods: {
    clickHandler (e) {
      document.querySelector('.activeAnchor').classList.remove('activeAnchor')
      e.target.classList.add('activeAnchor')
      let offset = document.querySelector(e.target.hash).offsetTop * 2
      window.scrollTo({
        'top': offset,
        'left': 0,
        'behavior': 'smooth'
      })
    }
  }
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
