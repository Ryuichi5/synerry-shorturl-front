<template>
     <navbar></navbar>
    <div class="url-shortener-container">
      <div class="url-shortener">
        <h1>Hee Yai Mak</h1>
        <div class="input-container">
          <input 
          id="urlInput"
          v-model="url"
          type="url"
          placeholder="https://example.com"
           />
          <button @click="generateQRCode">QR Generate</button>
        </div>
        <div v-if="qrCodeValue" class="result">
          <p>Generate Now !</p>
          <qrcode-vue :value="qrCodeValue" :size="size" level="H" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import QrcodeVue from 'qrcode.vue';
  import axios from 'axios';

  export default {
    data() {
      return {
        url: '',
        size: 300,
        qrCodeValue: '', // Initial value for QR code
      };
    },
    components: {
      QrcodeVue,
    },
    methods: {
      generateQRCode() {
        // Validate if the input is a valid URL
        if (!this.isValidURL(this.url)) {
          alert('Please enter a valid URL');
          return;
        }
  
        // Update the QR code value with the input URL
        this.qrCodeValue = this.url;

        this.sendQRCodeToBackend();
        
      },
      isValidURL(inputURL) {
        // A basic URL validation using regular expression
        const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return urlPattern.test(inputURL);
      },
async sendQRCodeToBackend() {
  // Ensure that this.qrCodeValue is defined before sending it to the backend
  const token = localStorage.getItem("token");
    console.log("tokenResponse", token);

    // Fetch the user's short URL history by user_id
    const response = await axios.get(`http://localhost:3003/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user_id = response.data?.data?.profile?.id;


    if (user_id === null) {
      return null;
    }
 

  const data = {
    full_url: this.qrCodeValue, 
    qr_image: this.qrCodeValue,
    user_id: user_id
  };

  axios
    .post('http://localhost:3002/qrurl', data)
    .then((response) => {
      console.log('QR code sent to the backend:', response.data);
    })
    .catch((error) => {
      console.error('Error sending QR code:', error);
    });
},

  },
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
  