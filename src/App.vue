<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <component v-bind:is="layout"></component>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    layout() {
      return this.$route.meta.template;
    }
  }
}
</script>

<style <style lang="scss">
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #05a4c0;
$primary-invert: findColorInvert($primary);
$twitter: #d7ecfb;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
// $link: $primary;
// $link-invert: $primary-invert;
// $link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

*, *::before, *::after {
  box-sizing: border-box;
}
html {
  overflow-y: auto;
}
html,
body {
  height: 100%;
}
#app {
  display: flex;
  min-height: 100%;
}
.body-content {
  flex: 1 0 auto;
}



.menu .button {
  margin-bottom: 0.5rem;
}

.my-table thead {
  background-color: $twitter;
}
.table thead td, .table thead th {    
  border-width: 0 0 1px;
  color: #363636;
}

/* animation page*/
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  100% {
    opacity: 1;
  }
}
</style>
