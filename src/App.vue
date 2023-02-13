<template>
    <Pockemon/>
</template>

<script>
import Pockemon from './pages/PockemonPage.vue'

export default {
  name: 'App',
  components: {
    Pockemon
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
