<script setup>
import { ref, onMounted, defineEmits } from 'vue'
const email = ref('')
const name = ref('')
const text = ref('')
const checked = ref([])
const currentDate = ref(null)

onMounted(() => {
  const today = new Date()
  const day = String(today.getDate()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const year = today.getFullYear()

  currentDate.value = `${year}-${month}-${day}`
})
const emit = defineEmits(['submit'])
const submitForm = () => {
  const formData = {
    email: email.value,
    name: name.value,
    checked: checked.value,
    currentDate: currentDate.value,
    text: text.value
  }
  emit('submit', formData)
}
const resetForm = () => {
  email.value = ''
  name.value = ''
  checked.value = []
  text.value = ''

  const today = new Date()
  const day = String(today.getDate()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const year = today.getFullYear()

  currentDate.value = `${year}-${month}-${day}`
}
</script>
<template>
  <div class="Buttons-container"></div>
  <br />
  <form class="form" @submit.prevent="submitForm">
    <div class="data">
      <input v-model="email" placeholder="Email" class="Basic-data" />
      <br />
      <input pattern="[A-Z].*" v-model="name" placeholder="Name" class="Basic-data" />
    </div>
    <div class="data Data-checkbox">
      <input type="checkbox" id="something" value="something" v-model="checked" />
      <label for="something" class="Data-checkbox-label">something</label>
      <input type="checkbox" id="content error" value="content error" v-model="checked" />
      <label for="content error" class="Data-checkbox-label">content error</label>
      <input type="checkbox" id="other" value="other" v-model="checked" />
      <label for="other" class="Data-checkbox-label">other</label>
    </div>
    <div class="data">
      <input type="date" v-model="currentDate" class="Data-date" />
      <br />
      <textarea v-model="text" maxlength="150" class="Data-date"></textarea>
    </div>
    <div class="data Data-button-down">
      <button class="Button-down">Wyślij</button>
      <button @click="resetForm" class="Button-down">Wyczyść</button>
    </div>
  </form>
</template>
<style scoped>
.form {
  display: flex;
  height: fit-content;
  background-color: white;
  width: 100%;
  margin-left: 5%;
  align-items: baseline;
  flex-direction: column;
}
.data {
  margin-top: 10px;
  padding: 10px;
  width: 20vw;
  background-color: white;
}

.Buttons-container {
  background-color: white;
}
.Basic-data {
  border: none;
  height: 3vh;
  border: gray thin solid;
  background-color: white;
  width: 15vw;
}
.Data-checkbox {
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.2em;
}
.Data-checkbox-label {
  background-color: white;
}
.Data-date {
  background-color: white;
  width: 15vw;
  height: 3vh;
  border: gray thin solid;
}
.Data-button-down {
  width: 15vw;
  display: flex;
  justify-content: space-around;
}
.Button-down {
  background-color: white;
  border: gray thin solid;
  padding: 0.5em;
}
</style>
