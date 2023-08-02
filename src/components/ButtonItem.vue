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
  <button>{{ title }} {{ id }}</button>
</template>

<style>
ul {
  margin: 0px;
}
li {
  float: left;
  display: inline-flexbox;
  list-style: none;
}
li > button {
  width: 80px;
  height: 40px;
  margin-top: 15px;
  margin-left: 20px;
  border-radius: 15%;
  border: none;
  background-color: white;
}
</style>
