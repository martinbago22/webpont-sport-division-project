<script setup>
import { ref } from 'vue'
import languagesData from '../../languages/languages.json'

const selectedLanguage = ref('en')
const languages = languagesData

const handleChange = (event) => {
  selectedLanguage.value = event.target.value

  alert('Selected language: ' + languages[selectedLanguage.value])
}
</script>
<template>
  <header>
    <select v-model="selectedLanguage" @change="handleChange($event)">
      <option v-for="(language, key) in languages" :key="key" :value="key">{{ language }}</option>
    </select>
  </header>
</template>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 10px;
}

select {
  padding: 5px;
  border-radius: 5px;
}
</style>
