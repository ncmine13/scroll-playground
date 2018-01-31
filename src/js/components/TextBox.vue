<template>
  <div class="text"> {{ text }} </div>
</template>
<script>
export default {
  name: 'TextBox',
  data () {
    return {
      text: 'This is some filler text'
    }
  }
}
</script>
<style lang="sass-loader">
.text {
  z-index: 2;
}
</style>
