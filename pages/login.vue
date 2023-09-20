<template>
     <navbar></navbar>
    <div class="login-container">
      <div class="login-box">
        <h1>Login</h1>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <router-link to="/register">Register</router-link></p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const username = ref("");
  const password = ref("");
  
  const login = () => {
    // Implement your login logic here
    // Example: Check credentials and navigate to the dashboard
  };
  </script>
  
  <style scoped>

  .reg-form{

  }
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  
  .login-box {
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
  