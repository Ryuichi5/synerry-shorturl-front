<template>
    <body>
      <div>
  
  <navbar></navbar>
  <div class="url-shortener-container">
    <div class="url-shortener">
      <h1>Short URL History</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full URL</th>
            <th>Short URL</th>
            <th>View</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          <!-- Loop through the short URL history and populate the table -->
          <tr v-for="(entry, index) in paginatedShortUrlHistory" :key="index">
            <td>{{ entry.id }}</td>
            <td>{{ entry.full_url }}</td>
            <td><a :href=entry.short_url>{{process.public.DATABASE_HOST}}/{{ entry.short_url }}</a></td>
            <td>{{ entry.view }}</td>
            <td>{{ entry.create_at }}</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
    </div>
  </div>
</div>
    </body>
 
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const process = useRuntimeConfig();
const shortUrlHistory = ref([]);
const itemsPerPage = 6; // Number of items per page
let currentPage = ref(1);

const paginatedShortUrlHistory = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return shortUrlHistory.value.slice(startIndex, endIndex);
});


const totalPages = computed(() => Math.ceil(shortUrlHistory.value.length / itemsPerPage));

// Fetch the token first
onMounted(async () => {
  try {

    const token = localStorage.getItem("token");
    console.log("tokenResponse", token);

    // Fetch the user's short URL history by user_id
    const response = await axios.get(process.public.DATABASE_HOST+":3003/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("response",response.data.data.profile.id);
    const user_id = response.data.data.profile.id;

    // // Fetch the user's short URL history by user_id
    const shorturl = await axios.get(process.public.DATABASE_HOST+`:3001/shorturl/users/${user_id}`,);
    shortUrlHistory.value = shorturl.data; // Assuming the API returns an array of history data
  } catch (error) {
    console.error('Error fetching short URL history:', error);
  }
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>

<style scoped>
body{
  background-color: #0093E9;
background-image: linear-gradient(45deg, #0093E9 0%, #80D0C7 100%);

}

/* Your CSS styles for the table */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

/* Your other CSS styles */
/* ... */
</style>


<style scoped>
.pagination{
  margin-top: 20px;
}
/* Your CSS styles for the table */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
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
    
    margin-left: 10px;
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
  