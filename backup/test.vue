<!-- pages/index.vue -->
<template>
  <div>
    <h1>Shorten a URL</h1>
    <form @submit.prevent="createShortUrl">
      <input v-model="full_url" type="text" placeholder="Enter a URL" />
      <button type="submit">Shorten</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const full_url = ref('');

const createShortUrl = async () => {
  try {
    // Ensure full_url is a string
    const requestData = { full_url: full_url.value.toString() };
    const response = await axios.post('http://localhost:3001/shorturl', requestData);
    console.log('Short URL:', response.data.short_url);
  } catch (error) {
    console.error('Error creating short URL:', error);
  }
};
</script>
