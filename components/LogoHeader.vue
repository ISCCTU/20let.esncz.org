<template>
  <!--    :style="{transform: `scaleY(${mapNumber(collapseRatio, 1, 0, .2, 1)})`}"-->
  <Transition name="slide-down">
    <header
      ref="header"
      v-if="$route.path === '/'"
      class="
        transition-opacity
        min-h-[23vh] md:min-h-[50vh] lg:min-h-[70vh]

        origin-bottom select-none bg-logo bg-contain bg-no-repeat bg-center
        flex flex-row justify-center items-center
        my-4 md:my-8 mx-4
      ">
    </header>
  </Transition>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.slide-down-enter-active {
  animation: slide-down 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-down-leave-active {
  animation: slide-down 150ms cubic-bezier(0.4, 0, 0.2, 1) reverse;
}

@keyframes slide-down {
  from {
    transform: translateY(-100%);
    /*opacity: 0;*/
  }
  to {
    transform: translateY(0);
    /*opacity: 1;*/
  }
}
</style>
