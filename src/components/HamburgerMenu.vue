<script setup>
import ButtonItem from './ButtonItem.vue'

import { ref } from 'vue'

const showMenu = ref(false)
</script>
<template>
  <transition>
    <button
      @click="showMenu = !showMenu"
      type="button"
      class="Button-open"
      onClick="openMenu()"
      v-if="!showMenu"
    >
      <div class="Button-open-image">
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style="background-color: transparent"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z"
            fill="#1C274C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z"
            fill="#1C274C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z"
            fill="#1C274C"
          />
        </svg>
      </div>
    </button>
  </transition>
  <Transition>
    <button @click="showMenu = !showMenu" type="button" class="Button-close" v-if="showMenu">
      <div class="Button-close-image">
        <svg
          width="40px"
          height="40px"
          viewBox="-0.5 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style="background-color: transparent"
        >
          <path
            d="M3 21.32L21 3.32001"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 3.32001L21 21.32"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </button>
  </Transition>
  <Transition>
    <div class="Hamburger-menu" v-if="showMenu">
      <ul class="Hamburger-menu-list">
        <ButtonItem :title="'Button'" :id="1"></ButtonItem>
        <ButtonItem :title="'Button'" :id="2"></ButtonItem>
        <ButtonItem :title="'Button'" :id="3"></ButtonItem>
      </ul>
    </div>
  </Transition>
</template>

<style scoped>
@keyframes open {
  from {
    transform: translateX(60vw);
  }
  to {
    transform: translateX(0px);
  }
}
@keyframes close {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(60vw);
  }
}

.v-enter-active {
  animation: open 1s ease-in-out;
}
.v-leave-to {
  animation: close 1s ease-in-out;
}
.Button-open {
  border: none;
  position: fixed;
  right: 0;
  margin-top: 6vw;
  margin-right: 5vw;
  display: block;
  background-color: #555555;
}
.Button-open-image {
  padding: 0;
  margin: 0;
  background-color: #555555;
}
.Button-open-image path {
  fill: white;
}
.Button-close {
  width: 40px;
  height: 40px;
  border: none;
  position: fixed;
  right: 0;
  margin-top: 6vw;
  margin-right: 40vw;
  z-index: 1;
  display: block;
  background-color: #dedede;
}
.Button-close-image {
  padding: 0;
  margin: 0;
  background-color: #dedede;
}
.Button-close-image path {
  stroke: black;
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
</style>
