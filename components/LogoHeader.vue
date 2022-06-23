<template>
  <!--    :style="{transform: `scaleY(${mapNumber(collapseRatio, 1, 0, .2, 1)})`}"-->
  <Transition name="slide-down">
    <header
      ref="header"
      v-if="$route.path === '/'"
      class="
        transition-opacity
        min-h-[20vh] md:min-h-[30vh] lg:min-h-[40vh]

        origin-bottom select-none bg-primary
        flex flex-row justify-center items-center
      ">
      <h1>
        <img src="../assets/svg/esncz20-logo.svg" alt="#ESNCZ20 logo" class="bg-white min-h-[20vh] md:min-h-[30vh] lg:min-h-[40vh]" />
      </h1>
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
