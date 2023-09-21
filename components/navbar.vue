<template>
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">Your Logo</router-link>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/qrurl">QR Generate</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #007BFF;
    color: #fff;
    padding: 10px 20px;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .nav-links li {
    margin: 0;
  }
  
  .nav-links a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  
  .nav-links a:hover {
    color: #0056b3;
  }
  </style>
  