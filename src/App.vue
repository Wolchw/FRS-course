<script setup>
import LogText from './components/LogText.vue'
import ButtonItem from './components/ButtonItem.vue'
import MainPhotoContent from './components/MainPhotoContent.vue'
import HamburgerMenu from './components/HamburgerMenu.vue'
import AdvertismentPhoto from './components/AdvertismentPhoto.vue'
import PageForm from './components/PageForm.vue'
import { useBreakpoints } from '@vueuse/core'
import { ref, watch } from 'vue'

const items = ref([{ title: 'button' }, { title: 'button' }, { title: 'button' }])
const breakpoints = useBreakpoints({
  mobile: 425,
  tablet: 768,
  desktop: 1366
})
const responsiveMobile = breakpoints.smallerOrEqual('mobile')
const responsiveDesktop = breakpoints.greaterOrEqual('desktop')
watch(responsiveDesktop, (responsiveDesktop) => {
  showForm.value = responsiveDesktop
})

let showForm = ref(true)

const showAdv = ref(true)
const toggleForm = (id) => {
  if (id === 1) {
    showAdv.value = !showAdv.value
  }
}

const DataFormSubmit = (formData) => {
  console.log(JSON.stringify(formData))
}
</script>

<template>
  <body>
    <header class="Header-logo">
      <LogText class="Header-logo-text">LOGO TEXT</LogText>
      <nav class="Nav">
        <ul class="Nav-list">
          <li v-for="(item, index) in items" class="list-element">
            <ButtonItem :title="item.title" :id="index + 1" @click="toggleForm(index + 1)" />
          </li>
        </ul>
      </nav>
      <HamburgerMenu class="Side-menu" v-if="responsiveMobile" />
    </header>
    <main class="App-main">
      <MainPhotoContent class="App-main-content" />
      <MainPhotoContent class="App-main-content" />
      <div class="Form-form">
        <button @click="showForm = true">Pokaż formularz</button>
        <button @click="showForm = false">Ukryj formularz</button>
        <PageForm @submit="DataFormSubmit" v-if="showForm" />
      </div>
    </main>
    <article class="something">
      <AdvertismentPhoto class="Advertisment-content" v-if="showAdv && responsiveDesktop" />
    </article>
  </body>
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
.Advertisment-content {
  z-index: 1;
  margin-top: 10%;
  margin-left: -4%;
  position: absolute;
}
.Form-form {
  display: flex;
  background-color: white;
}
.buttonBut {
  background-color: aqua;
  position: absolute;
}
@media only screen and (min-width: 1366px) {
  body {
    display: flex;
  }
  .Header-logo {
    height: 100vh;
    width: 10%;
    align-items: center;
  }
  .Nav-list {
    flex-direction: column;
    align-items: end;
  }
  .App-main {
    width: 50%;
    height: 70vh;
    margin-top: 2%;
    margin-left: 4%;
    box-shadow: 1px 1px 20px grey;
    align-content: baseline;
    z-index: 2;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1365px) {
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
