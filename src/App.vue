<script setup>
import LogText from './components/LogText.vue'
import ButtonItem from './components/ButtonItem.vue'
import MainPhotoContent from './components/MainPhotoContent.vue'
import { ref } from 'vue'

const items = ref([{ title: 'button' }, { title: 'button' }, { title: 'button' }])
</script>

<template class="something">
  <header class="appHeader">
    <LogText class="lText">LOGO TEXT</LogText>
    <nav class="appNav">
      <ul class="appList">
        <li v-for="(item, index) in items">
          <ButtonItem :title="item.title" :id="index + 1"></ButtonItem>
        </li>
      </ul>
    </nav>
  </header>
  <main class="appMain">
    <MainPhotoContent />
    <MainPhotoContent />
  </main>
  <article class="something"></article>
</template>

<style scoped>
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
.appButtton {
  background-color: blue;
}
.something {
  background-color: #e5e5e5;

  margin-top: 20px;
  height: 100vh;
  width: 100%;
}
@media only screen and (width: 768px) {
  .appHeader {
    width: 70vw;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;

    height: 10vw;
  }
  .appNav {
    width: 65%;
    display: flex;
  }
  .appList {
    margin-right: 5%;
    width: 60%;
    gap: 10px;
  }
  .appMain {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
