<template>
<div class="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <IndexCard title="devui card"></IndexCard>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IndexCard from './components/index-card/IndexCard.vue';


@Options({
  components: {
    IndexCard
  },
})
export default class App extends Vue {}
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
