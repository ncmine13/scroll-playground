<template>
  <div class="main-wrapper">
    <div class="wrapper">
      <div class="hero__screen"></div>
      <div class="top bgImg"></div>
      <div class="second bgImg"></div>
      <div class="third bgImg"></div>
      <div class="hero__screen--last"></div>
      <div class="bottom bgImg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style lang="sass-loader">
.bgImg {
  background-size: cover;
  height: 100vh;
}
.top {
  background-image: url('../../styles/assets/img1.jpg');
}
.second {
  background-image: url('../../styles/assets/img2.jpg');
}
.third {
  background-image: url('../../styles/assets/img3.jpg');
}
.bottom {
  background-image: url('../../styles/assets/img4.jpg');
}

</style>
