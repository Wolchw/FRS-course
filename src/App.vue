<script setup>
import LogText from './components/LogText.vue'
import ButtonItem from './components/ButtonItem.vue'
import MainPhotoContent from './components/MainPhotoContent.vue'
import { ref } from 'vue'

const items = ref([{ title: 'button' }, { title: 'button' }, { title: 'button' }])
</script>

<template>
  <header>
    <LogText>LOGO TEXT</LogText>
    <nav>
      <ul>
        <li v-for="(item, index) in items">
          <ButtonItem :title="item.title" :id="index + 1"></ButtonItem>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <div>
      <MainPhotoContent></MainPhotoContent>
    </div>
    <div>
      <MainPhotoContent></MainPhotoContent>
    </div>
  </main>
</template>

<style>
header {
  background-color: #555555;
  height: 135px;
  width: 100vw;
}
main {
  width: 100vw;
  background-color: white;
}
ul,
li {
  padding: 0px;
}
</style>
