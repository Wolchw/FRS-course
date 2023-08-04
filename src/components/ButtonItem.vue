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
  <div v-if="id == 3" class="fStyle">
    <button type="button" class="fButton button3">{{ title }} {{ id }}</button>
  </div>
  <div v-else class="fStyle">
    <button type="button" class="fButton">{{ title }} {{ id }}</button>
  </div>
</template>

<style scoped>
.fStyle {
  background-color: #555555;
}
.fButton {
  width: 80px;
  height: 40px;
  margin-top: 15px;
  border-radius: 15%;
  border: none;
  background-color: white;
  font-size: 15px;
}
.button3 {
  margin-top: 10px;
}
@media only screen and (width: 768px) {
  .fButton {
    width: 70px;
  }
  .button3 {
    margin-top: 10%;
  }
}
</style>
