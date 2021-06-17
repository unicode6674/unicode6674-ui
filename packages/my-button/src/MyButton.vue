<template>
  <div class="button">
    按钮
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MyButton extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
  width: 64px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #2c3e50;
}
</style>
