<template>
  <div>
    <label for="urlInput">Enter URL:</label>
    <input
      id="urlInput"
      v-model="url"
      type="url"
      placeholder="https://example.com"
    />
    <button @click="generateQRCode">Generate QR Code</button>

    <qrcode-vue :value="qrCodeValue" :size="size" level="H" />
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';

export default {
  data() {
    return {
      url: 'https://example.com',
      size: 300,
      qrCodeValue: 'https://example.com', // Initial value for QR code
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
    },
    isValidURL(inputURL) {
      // A basic URL validation using regular expression
      const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
      return urlPattern.test(inputURL);
    },
  },
};
</script>
