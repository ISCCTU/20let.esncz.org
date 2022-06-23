<template>
  <article class="
    max-w-2xl mx-auto
    prose-em:text-secondary prose-em:not-italic prose-em:font-medium prose-a:text-secondary
  ">
    <h1 class="text-center text-3xl md:text-6xl text-primary my-4 font-bold">#ENSCZ20</h1>
    <p class="prose prose-xl  mx-auto my-12 text-center">
      Welcome to the web of <em>#ESNCZ20</em> celebrations! At the end of June 2022 we are going to Prague
      to celebrate this amazing aniversary.

    </p>

    <h2 class="text-center text-2xl md:text-4xl text-primary my-8 font-bold">ISC CTU in Prague &amp; ESN VSE Prague</h2>

    <p class="prose prose-lg  mx-auto text-justify">
      This event is co-organised by <em>ISC CTU in Prague</em> &amp; <em>ESN VSE Prague</em>
      – the first two sections from the Czech Republic to join the Erasmus Student Network.
    </p>
    <img
      src="../assets/svg/esncz20-logo.svg"
      alt="#ESNCZ20 logo" class="min-w-[15rem] w-[50vw] mx-auto"
    >

    <div class="flex flex-row items-center my-16">
      <div class="flex-grow h-1 bg-secondary rounded-full"></div>
      <h2 class="text-3xl md:text-5xl font-bold text-primary  mx-4">Our Partners</h2>
      <div class="flex-grow h-1 bg-secondary rounded-full"></div>
    </div>

    <ul class="flex flex-row items-center justify-center flex-wrap lg:-mx-6 bg-white">
      <li
        v-for="p in partners"
        class="w-full sm:w-1/2 px-6 pb-12 bg-white flex justify-center items-center"
      >
        <img
          :class="{'w-full': p.includes('.svg')}"
          :src="p"
          alt=""
          class="max-w-full max-h-24 h-auto mx-auto"
        >
      </li>
    </ul>

  </article>
</template>

<script>
export default {
  name: "AboutPage",
  asyncData() {
    return {
      partners: [
        require('../assets/partners/logo_cvut_en.svg'),
        require('../assets/partners/VSE_logo_EN_horizontal_blue.svg'),

        require('../assets/partners/dzs.svg'),
        require('../assets/partners/eurosender.svg'),
        require('../assets/partners/BOMBUS_HNEDE-1024x399.png'),
      ]
    }
  },

  head() {
    return {
      title: 'About'
    };
  },
}
</script>

<style scoped>

</style>
