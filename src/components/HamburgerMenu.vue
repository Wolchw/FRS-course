<script setup>
import ButtonItem from './ButtonItem.vue'

import { ref } from 'vue'

const showMenu = ref(false)
</script>
<template>
  <button @click="showMenu = !showMenu" type="button" class="Button-open">
    <img src="/src/assets/open-menu.svg" alt="" class="Button-open-image" v-if="!showMenu" />
  </button>
  <button @click="showMenu = !showMenu" type="button" class="Button-close" v-if="showMenu">
    <img src="/src/assets/close.svg" alt="" class="Button-close-image" />
  </button>

  <div class="Hamburger-menu" v-if="showMenu">
    <ul class="Hamburger-menu-list">
      <ButtonItem :title="'Button'" :id="1"></ButtonItem>
      <ButtonItem :title="'Button'" :id="2"></ButtonItem>
      <ButtonItem :title="'Button'" :id="3"></ButtonItem>
    </ul>
  </div>
</template>

<style scoped>
.Button-open {
  width: 60px;
  height: 40px;
  border: none;
  position: fixed;
  right: 0;
  margin-top: 6vw;
  margin-right: 5vw;
  display: none;
  background-color: #555555;
}
.Button-close {
  width: 60px;
  height: 40px;
  border: none;
  position: fixed;
  right: 0;
  margin-top: 6vw;
  margin-right: 40vw;
  z-index: 1;
  display: none;
}
.Hamburger-menu {
  position: fixed;
  width: 60vw;
  height: 100vh;
  background-color: #dedede;
  right: 0;
}
.Hamburger-menu-list {
  list-style: none;
  padding: 0;
  background-color: #dedede;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
}

@media only screen and (max-width: 425px) {
  .Button-open {
    display: block;
  }
  .Button-close {
    display: block;
  }
}
</style>
