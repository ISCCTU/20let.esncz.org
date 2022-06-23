<template>
  <div
    :class="themeClass"
    class="min-h-screen flex flex-col"
  >
    <LogoHeader/>
    <Nav/>
    <FancyLine/>
    <main
      class="
      mx-auto max-w-4xl w-full p-2 mt-4 pb-8 lg:px-8
      transition-max-w flex-grow flex flex-col
      "
      :class="{'max-w-full m-0 p-0 mt-0 pb-0 lg:px-0': $route.name === 'map'}"
    >
      <Nuxt/>
    </main>
    <template v-if="$route.name !== 'map'">
      <InstagramFeed v-if=""/>
      <Footer/>
    </template>

    <Updater/>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  computed: {
    themeClass() {
      return {
        default: 'theme-default',
      }[this.$store.state.theme.current]
    }
  },
  async created() {
    if (!process.client)
      await this.$store.dispatch('nuxtServerInit')
  }
}
</script>

<style scoped>

</style>
