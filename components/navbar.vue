<template>
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">Your Logo</router-link>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/qrurl">QR Generate</router-link></li>
        <li v-if="isAuthenticated"><router-link to="/history-table">My Short</router-link></li>
        <li v-if="isAuthenticated"><router-link to="/history-qr">My QR</router-link></li>
        <li v-if="!isAuthenticated"><router-link to="/login">Login</router-link></li>
        <li v-if="isAuthenticated"><button @click="logout">Logout</button></li>
      </ul>
    </nav>
  </template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";

// Function to check if the user is authenticated
const isAuthenticated = computed(() => {
  const token = localStorage.getItem("token");
  return !!token; // Returns true if token is present, false otherwise
});

// Function to handle logout
const logout = () => {
  // Remove the token from localStorage
  localStorage.removeItem("token");
  window.location = "/login";
  // Redirect to the login page or another appropriate location
  // Example: router.push("/login");
};
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
  