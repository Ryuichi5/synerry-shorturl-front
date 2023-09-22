<template>
  <body>
    <navbar></navbar>
    <div class="url-shortener-container">
      <div class="url-shortener">
        <h1>Shorten your URL</h1>
        <div class="input-container">
          <input v-model="full_url" type="text" placeholder="Enter a URL" />
          <button @click="shortenUrl">Shorten</button>
        </div>
        <div v-if="shortenedUrl" class="result">
          <p>Your shortened URL:</p>
          <a :href="shortenedUrl" target="_blank">{{ shortenedUrl }}</a>
        </div>
      </div>
    </div>
  </body>
  
  </template>
  
  <script setup>
import { ref } from "vue";
import { generateRandomString, isValidHttpUrl } from "../helpers/helper-functions";
import axios from 'axios';

const full_url = ref('');
const shortenedUrl = ref("");

const process = useRuntimeConfig();
    // console.log("test" , process.public.DATABASE_HOST+":3003/users/profile");

// const shortenUrl = () => { 
//   if (isValidHttpUrl(originalUrl.value)) {
//     const uniqueID = generateRandomString();
//     const shortUrl = `http://127.0.0.1:3000/${uniqueID}`;
//     shortenedUrl.value = shortUrl;
//   } else {
//     alert("Invalid URL. Please enter a valid HTTP/HTTPS URL.");
//   }
// };

const shortenUrl = async () => {
  try {

    const token = localStorage.getItem("token");
    console.log("tokenResponse", token);

    // Fetch the user's short URL history by user_id
    const response = await axios.get(process.public.DATABASE_HOST+":3003/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user_id = response.data?.data?.profile?.id;


    if (user_id === null) {
      return null;
    }
 

    if (isValidHttpUrl(full_url.value)) {
      const requestData = { 
        full_url: full_url.value.toString() ,
        user_id : user_id
      };
    const response = await axios.post(process.public.DATABASE_HOST+':3001/shorturl', requestData);
    console.log("shortenedUrl",response.data.short_url);
    const uniqueID = response.data.short_url
    const shortUrl = process.public.DATABASE_HOST+`:4000/${uniqueID}`;
    shortenedUrl.value = shortUrl;
  } else {
    alert("Invalid URL. Please enter a valid HTTP/HTTPS URL.");
  }

  } catch (error) {
    console.error('Error creating short URL:', error);
  }
};
  </script>
  
  <style scoped>

body{
  background-color: #0093E9;
background-image: linear-gradient(45deg, #0093E9 0%, #80D0C7 100%);

}
.url-shortener-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.url-shortener {
  text-align: center;
  padding: 20px;
  /* background: linear-gradient(45deg, #ff5733, #33ff57, #5733ff); */
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
  