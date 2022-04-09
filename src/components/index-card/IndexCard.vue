<template>
  <div class="new-component">
    <d-card>{{title}}</d-card>
 </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    title: String
  }
})

export default class IndexCard extends Vue {
  title: String;
}
</script>