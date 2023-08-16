<template>
  <h1 class="logo-text">
    <slot></slot>
  </h1>
</template>
<style scoped>
.logo-text {
  padding-top: 29px;
  margin-left: 4vw;
}
@media only screen and (min-width: 768px) {
  .logo-text {
    padding-top: 0;

    margin-left: 1vw;
  }
}
</style>
