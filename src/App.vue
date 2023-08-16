<script setup>
import LogText from './components/LogText.vue'
import ButtonItem from './components/ButtonItem.vue'
import MainPhotoContent from './components/MainPhotoContent.vue'
import HamburgerMenu from './components/HamburgerMenu.vue'
import { ref } from 'vue'

const items = ref([{ title: 'button' }, { title: 'button' }, { title: 'button' }])
</script>

<template>
  <header class="Header-logo">
    <LogText class="Header-logo-text">LOGO TEXT</LogText>
    <nav class="Nav">
      <ul class="Nav-list">
        <li v-for="(item, index) in items" class="list-element">
          <ButtonItem :title="item.title" :id="index + 1"></ButtonItem>
        </li>
      </ul>
    </nav>
    <HamburgerMenu class="Side-menu" />
  </header>
  <main class="App-main">
    <MainPhotoContent class="App-main-content" />
    <MainPhotoContent class="App-main-content" />
  </main>
  <article class="something"></article>
</template>

<style scoped>
.Header-logo {
  background-color: #555555;
  display: flex;
  flex-direction: column;
  height: 15vh;
  width: 100%;
}
.Header-logo-text {
  color: white;
  display: flex;
  background-color: #555555;
}
.Nav {
  display: flex;
  background-color: #555555;
  padding-bottom: 2vh;
}
.Nav-list {
  padding: 0;
  background-color: #555555;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-around;
}
.App-main {
  width: 100%;
  height: 50vh;
  display: flex;
  background-color: white;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
}
.App-main-content {
  margin-top: auto;
}
.Side-menu {
  display: none;
}
@media only screen and (min-width: 768px) {
  .Header-logo {
    width: 80vw;
    height: fit-content;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
  }
  .Nav {
    width: 50%;
    height: 10vh;
    align-items: end;
    justify-content: space-around;
    gap: 21px;
  }
  .App-main {
    width: 68%;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 425px) {
  .App-main {
    align-content: end;
    padding-bottom: 20px;
  }
  .Nav-list {
    display: none;
  }
  .Side-menu {
    display: block;
    position: fixed;
    right: 0;
  }
}
</style>
<!-- .hamburger {
  display: none;
}
.list-element {
  background-color: #555555;
}
.appHeader {
  background-color: #555555;
  height: 135px;
  width: 100%;
  color: white;
}
.appMain {
  width: 100%;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
}
.appNav {
  justify-content: end;
  background-color: #555555;
}
.lText {
  background-color: #555555;
}
.appList {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  padding: 0px;
  background-color: #555555;
}
.something {
  background-color: #e5e5e5;

  margin-top: 20px;
  height: 100vh;
  width: 100%;
} -->
