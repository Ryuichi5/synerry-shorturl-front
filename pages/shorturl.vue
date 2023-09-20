<template>
     <navbar></navbar>
    <div class="url-shortener-container">
      <div class="url-shortener">
        <h1>Hee Yai Mak</h1>
        <div class="input-container">
          <input type="text" v-model="originalUrl" placeholder="Enter your URL" />
          <button @click="shortenUrl">Shorten</button>
        </div>
        <div v-if="shortenedUrl" class="result">
          <p>Your shortened URL:</p>
          <a :href="shortenedUrl" target="_blank">{{ shortenedUrl }}</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const originalUrl = ref("");
  const shortenedUrl = ref("");
  
  const shortenUrl = () => {
    // Implement your URL shortening logic here
    // Once shortened, set the shortenedUrl ref with the result
    // Example: shortenedUrl.value = "http://short.url/abc123";
  };
  </script>
  
  <style scoped>

.url-shortener-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.url-shortener {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .result {
    margin-top: 20px;
  }
  
  a {
    color: #007BFF;
    text-decoration: none;
    font-weight: bold;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  