<!-- pages/shorturl/[id].vue -->
<template>
    <div>
      <!-- This is your redirection page -->
      <!-- <p>Redirecting to the original URL...</p> -->
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  const process = useRuntimeConfig();
  const { id } = useRoute().params 
  onMounted(async () => {
    // Fetch the original URL using the 'id' (randomString)
    const response = await fetchOriginalUrl(id);
    const view = await increaseView(id);
    console.log("response" , response);
    // Redirect to the original URL
    if (response.status === 200) {
      window.location.href = response.data.data.originalUrl;
    }
  });
  
  // Create a function to fetch the original URL
  async function fetchOriginalUrl(randomString) {
    try {
      const response = await axios.get(process.public.DATABASE_HOST+`:3001/shorturl/${randomString}`);
      return {
        status: response.status,
        data: response.data,
      };
    } catch (error) {
      return {
        status: error.response.status,
        data: null,
      };
    }
  }

  async function increaseView(randomString) {
    try {
      const response = await axios.get(process.public.DATABASE_HOST+`:3001/shorturl/view/${randomString}`);
      return {
        status: response.status,
        data: response.data,
      };
    } catch (error) {
      return {
        status: error.response.status,
        data: null,
      };
    }
  }
  </script>

  