<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  id: Number
})
</script>
<template>
  <div v-if="id == 3" class="Button-conteiner">
    <button type="button" class="Button-style">{{ title }} {{ id }}</button>
  </div>
  <div v-else class="Button-conteiner">
    <button type="button" class="Button-style">{{ title }} {{ id }}</button>
  </div>
</template>

<style scoped>
.Button-conteiner {
  background-color: #555555;
  padding-top: 3vh;
}
.Button-style {
  width: 80px;
  height: 40px;
  border-radius: 15%;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
@media only screen and (min-width: 768px) and (max-width: 1365px) {
  .Button-style {
    width: 80px;
    height: 40px;
  }
}
@media only screen and (max-width: 425px) {
  .Button-conteiner {
    background-color: #dedede;
  }
  .Button-style {
    width: 50vw;
  }
}
</style>
