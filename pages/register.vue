<template>
  <body>
        <navbar></navbar>
    <div class="register-container">
      <div class="register-box">
        <h1>Register</h1>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="name" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  </body>
  </template>
  
  <script setup>
import { ref } from "vue";
import axios from "axios"; // Import axios for making HTTP requests

const name = ref("");
const password = ref("");
  
const register = async () => {
  try {
    // Send a POST request to your backend API to authenticate
    const response = await axios.post("http://45.144.164.74:3003/users", {
      name: name.value,
      password: password.value,
    });

    // Assuming the server returns a token
    const token = response.data.token;

    console.log("Login Success" , token);

    window.location = "/login";

    // Redirect to the dashboard or another page upon successful login
    // Example: router.push("/dashboard");
  } catch (error) {
    alert("เกิดข้อผิดพลาด")
    // Handle login errors here, e.g., display an error message
    console.error("Login failed:", error);
  }
};
  </script>
  
  <style scoped>

body{
  background-color: #0093E9;
background-image: linear-gradient(45deg, #0093E9 0%, #80D0C7 100%);

}

  .register-container {
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  
  .register-box {
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
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  label {
    font-weight: bold;
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
  </style>
  